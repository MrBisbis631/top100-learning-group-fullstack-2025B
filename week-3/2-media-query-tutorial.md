# 🌟 Practical Tutorial: Media Queries in Responsive Web Design

Media queries are the **backbone of responsive design**. They allow you to **apply CSS rules conditionally**, based on the user's device characteristics—most commonly screen width.

Let’s dive into real examples and useful tricks.

---

## 🧠 Syntax Overview

```css
@media media-type and (condition) {
  /* CSS rules */
}
```

**Most common usage:**
```css
@media (max-width: 768px) {
  /* Styles for devices 768px wide and smaller */
}
```

---

## 📘 Basic Use Case: Responsive Font Size

**HTML:**
```html
<p class="responsive-text">Resize the browser to see me adapt!</p>
```

**CSS:**
```css
.responsive-text {
  font-size: 18px;
}

@media (max-width: 768px) {
  .responsive-text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .responsive-text {
    font-size: 14px;
  }
}
```

---

## 📊 Layout Change Based on Screen Size

**Scenario:** A two-column layout becomes a single column on mobile.

**HTML:**
```html
<div class="container">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

**CSS:**
```css
.container {
  display: flex;
  gap: 1rem;
}
.left, .right {
  flex: 1;
}

/* Stack on small screens */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

---

## 🧱 Show/Hide Elements

**HTML:**
```html
<div class="desktop-only">Desktop Nav</div>
<div class="mobile-only">Mobile Nav</div>
```

**CSS:**
```css
.mobile-only {
  display: none;
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
}
```

---

## 📱 Mobile-First Strategy

Build styles for mobile first, then enhance for larger screens:

```css
/* Mobile styles */
.button {
  width: 100%;
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .button {
    width: auto;
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .button {
    font-size: 18px;
  }
}
```

---

## 🌈 Custom Breakpoints Example

```css
/* Small Phones */
@media (max-width: 480px) { ... }

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) { ... }

/* Laptops */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Large Screens */
@media (min-width: 1025px) { ... }
```

---

## 🖼 Image Responsiveness with `srcset`

**HTML:**
```html
<img src="image-small.jpg"
     srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1024w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="A beautiful view">
```

✅ Browser loads the best image based on the screen width.

---

## 🔑 Bonus: Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #f0f0f0;
  }
}
```

✅ Automatically supports users who prefer dark mode!

---

## 🛠 Testing Tools

- **Browser DevTools** → Responsive mode
- **Chrome Lighthouse** → Checks for responsive issues
- **Responsively App** → Side-by-side device testing
- **Emulators** → Android Studio, Xcode for device preview

---

## ✅ Quick Recap

| Media Query                         | Usage                         |
|------------------------------------|--------------------------------|
| `max-width: 768px`                 | Target phones and small tablets|
| `min-width: 1024px`                | Target desktops                |
| `orientation: landscape`           | Detect device orientation      |
| `prefers-color-scheme: dark`       | Enable dark mode               |
| `hover: hover`                     | Detect mouse hover support     |
| `pointer: coarse`                  | Touchscreen devices            |
| `aspect-ratio`                     | Target specific screen ratios  |
| `resolution`                       | High DPI displays              |
| `grid`                             | Detect grid layout support     |
| `print`                            | Styles for print media         |
| `speech`                           | Styles for screen readers      |
| `not`                              | Exclude specific devices       |
| `only`                             | Target specific media types    |
| `and`                              | Combine multiple conditions    |
| `or`                               | Logical OR for conditions      |
| `not all`                          | Exclude all media types        |
| `only screen`                      | Target only screen media       |
| `only print`                       | Target only print media        |
| `only speech`                      | Target only speech media       |
| `only projection`                  | Target only projection media   |
| `only braille`                     | Target only braille media      |
