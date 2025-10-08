# 🎨 Portfolio Color Scheme Documentation

## Overview
This document outlines the complete color palette used in the Ashley Motsie Portfolio project. The design follows a modern, tech-focused aesthetic with a blue-to-green gradient theme.

---

## 🌈 Primary Theme Colors

### Gradient Colors
These are the main colors used throughout the portfolio for gradients, accents, and interactive elements.

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Sky Blue** | `#60a5fa` | `rgb(96, 165, 250)` | Primary gradient color, links, accents |
| **Emerald Green** | `#34d399` | `rgb(52, 211, 153)` | Secondary gradient color, highlights |

**Usage Example:**
```css
.gradient-text {
  background: linear-gradient(90deg, #60a5fa, #34d399, #60a5fa);
}
```

---

## 🌑 Background Colors

### Dark Backgrounds
The portfolio uses various shades of dark blue/black for depth and contrast.

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Main Background** | `#020617` | `rgb(2, 6, 23)` | Primary page background |
| **Alt Background** | `#04081A` | `rgb(4, 8, 26)` | Section backgrounds |
| **Code Window** | `#091121` | `rgb(9, 17, 33)` | Code editor background |
| **Window Header** | `#0b466359` | `rgba(11, 70, 99, 0.35)` | Semi-transparent header |

**Usage Example:**
```css
body {
  background-color: #020617;
}

.code-window {
  background: #091121;
}
```

---

## 💻 Syntax Highlighting Colors (Prism.js)

Colors used for code syntax highlighting in the code editor window.

| Token Type | Color Name | Hex Code | RGB |
|------------|------------|----------|-----|
| **Comments** | Blue-Gray | `#8b9cb3` | `rgb(139, 156, 179)` |
| **Strings** | Light Blue | `#a5d6ff` | `rgb(165, 214, 255)` |
| **Keywords** | Pink | `#ff79c6` | `rgb(255, 121, 198)` |
| **Functions** | Cyan | `#66e7ff` | `rgb(102, 231, 255)` |

**Usage Example:**
```css
.token.comment {
  color: #8b9cb3;
}

.token.keyword {
  color: #ff79c6;
}
```

---

## 🎯 Accent & Interactive Colors

### Button & Link Colors
Colors used for interactive elements and hover states.

| Element | Color(s) | Hex Code(s) |
|---------|----------|-------------|
| **Primary Button** | Blue → Teal Gradient | `#60a5fa` → `#34d399` |
| **Hover Effects** | Same gradient | `#60a5fa` → `#34d399` |
| **Text Highlights** | Blue | `#60a5fa` |
| **Success/Green** | Emerald | `#34d399` |

---

## 🔲 Neutral Colors

### Grays & Whites
Used for text, borders, and subtle UI elements.

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **White** | `#ffffff` | Primary text, grid overlays |
| **Light Gray** | `#e5e7eb` | Borders, dividers |
| **Gray** | `#9ca3af` | Secondary text |
| **Dark Gray** | `#4b5563` | Muted text |

---

## 🎭 Theme Variables (shadcn/ui)

Custom CSS variables for light/dark mode support using OKLCH color space.

### Light Mode
```css
--color-background: oklch(100% 0 0);      /* White */
--color-foreground: oklch(3.9% 0 0);      /* Almost Black */
--color-primary: oklch(9% 0 0);           /* Dark Gray */
--color-secondary: oklch(96.1% 0 0);      /* Light Gray */
--color-muted: oklch(96.1% 0 0);          /* Light Gray */
--color-accent: oklch(96.1% 0 0);         /* Light Gray */
--color-border: oklch(89.8% 0 0);         /* Border Gray */
```

### Dark Mode
```css
--color-background: oklch(3.9% 0 0);      /* Almost Black */
--color-foreground: oklch(98% 0 0);       /* Almost White */
--color-primary: oklch(98% 0 0);          /* Almost White */
--color-secondary: oklch(14.9% 0 0);      /* Dark Gray */
--color-muted: oklch(14.9% 0 0);          /* Dark Gray */
--color-accent: oklch(14.9% 0 0);         /* Dark Gray */
--color-border: oklch(14.9% 0 0);         /* Dark Border */
```

---

## 📐 Design Tokens

### Border Radius
```css
--radius: 0.5rem; /* 8px */
```

### Opacity Values
- Grid overlays: `0.8` (80%)
- Window header: `0.35` (35%)
- Decorative blurs: `0.1` - `0.2` (10-20%)

---

## 🎨 Color Combinations

### Recommended Pairings

#### Primary Gradient
```css
background: linear-gradient(90deg, #60a5fa, #34d399);
```

#### Hover Effect
```css
background: linear-gradient(45deg, #60a5fa, #34d399);
```

#### Text Gradient
```css
background: linear-gradient(90deg, #60a5fa, #34d399, #60a5fa);
background-size: 200% auto;
animation: gradient-shift 4s linear infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 🚀 Quick Reference

### Most Used Colors
```
#60a5fa - Primary Blue (Sky Blue)
#34d399 - Primary Green (Emerald)
#020617 - Main Background (Dark Navy)
#091121 - Code Background (Darker Navy)
#ffffff - White (Text, Overlays)
```

### Gradient Formula
```css
linear-gradient(90deg, #60a5fa, #34d399, #60a5fa)
```

---

## 📝 Usage Guidelines

1. **Primary Actions**: Use the blue-to-green gradient
2. **Backgrounds**: Stick to the dark navy palette (`#020617`, `#04081A`, `#091121`)
3. **Text**: White for primary, gray variations for secondary
4. **Hover States**: Brighten by 10-20% or apply gradient
5. **Syntax Highlighting**: Follow the Prism.js color scheme

---

## 🔗 CSS Variables Reference

To use these colors in your components:

```css
/* Direct hex values */
color: #60a5fa;

/* Theme variables */
background-color: theme(colors.background);
color: theme(colors.foreground);

/* Tailwind classes */
bg-blue-400  → #60a5fa
bg-emerald-400 → #34d399
bg-slate-950 → #020617
```

---

## 📦 Export Formats

### For Design Tools (Figma, Adobe XD)
- Sky Blue: `#60a5fa`
- Emerald: `#34d399`
- Dark Navy: `#020617`
- Code Navy: `#091121`

### For Development
```javascript
const colors = {
  primary: {
    blue: '#60a5fa',
    emerald: '#34d399',
  },
  background: {
    main: '#020617',
    alt: '#04081A',
    code: '#091121',
  },
  syntax: {
    comment: '#8b9cb3',
    string: '#a5d6ff',
    keyword: '#ff79c6',
    function: '#66e7ff',
  }
};
```

---

## 📄 License
This color scheme is part of the Ashley Motsie Portfolio project.

---