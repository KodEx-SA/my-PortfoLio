# ─── Stage 1: Build ─────
FROM node:20-alpine AS builder

WORKDIR /app

# Declare build-time secret — Vite bakes VITE_* vars into the bundle at build
# Pass it with: docker build --build-arg VITE_GROQ_API_KEY=your_key .
ARG VITE_GROQ_API_KEY
ENV VITE_GROQ_API_KEY=$VITE_GROQ_API_KEY

# Copy dependency manifests first (better layer caching)
COPY package.json package-lock.json ./

# Install deps — clean install from lockfile
RUN npm ci

# Copy the rest of the source
COPY . .

# Build the production bundle
RUN npm run build

# ─── Stage 2: Serve ──────
FROM nginx:alpine AS runner

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (handles SPA routing + gzip + cache headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
