
# 🧱 CSS Grid: A Comprehensive Guide

CSS Grid is a powerful 2-dimensional layout system for the web. It enables precise control over both rows and columns of layout elements.

---

## 🔧 1. Setting Up a Grid Container

To use Grid, you define a container with `display: grid;`.

```css
.container {
  display: grid;
}
```

---

## 📐 2. Defining Columns and Rows

Use `grid-template-columns` and `grid-template-rows` to define the structure:

```css
.container {
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: 100px auto;
}
```

- `1fr` is a fractional unit — it shares remaining space.
- You can mix fixed, auto, and fractional sizes.

---

## 🔁 3. Repeat Notation

You can simplify repeated column/row definitions using `repeat()`:

```css
.container {
  grid-template-columns: repeat(3, 1fr);
}
```

This sets 3 equal-width columns.

---

## 🗃️ 4. Placing Grid Items

You can place items using `grid-column` and `grid-row`:

```css
.item {
  grid-column: 1 / 3; /* spans from column 1 to 3 */
  grid-row: 2 / 4;     /* spans from row 2 to 4 */
}
```

You can also use `span`:

```css
.item {
  grid-column: span 2;
}
```

---

## ⚙️ 5. Grid Gap

Use `gap` (or `row-gap` and `column-gap`) to create space between grid items:

```css
.container {
  gap: 20px;
}
```

---

## 🔤 6. Naming Grid Areas

You can assign areas with `grid-template-areas`:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

---

## 📦 7. Auto-Placement

Grid can automatically place items:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

This creates a responsive grid where each column is at least 150px and fills the space available.

---

## 🧮 8. Justifying and Aligning

You can align grid items or the grid itself using these properties:

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  
  justify-content: start | end | center | space-between | space-around | space-evenly;
  align-content: start | end | center | space-between | space-around | space-evenly;
}
```

---

## 🧪 9. Practical Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 10px;
    }

    .item {
      background-color: #e3e3e3;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }

    .item1 { grid-column: span 2; }
    .item4 { grid-row: span 2; }
  </style>
</head>
<body>
  <div class="container">
    <div class="item item1">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item item4">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```

---

## 📚 10. Additional Resources

- [CSS Grid Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Grid Garden](https://cssgridgarden.com/) – A game to learn Grid
- [CSS Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
