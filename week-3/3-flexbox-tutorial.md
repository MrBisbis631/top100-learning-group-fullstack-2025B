
# 🎯 CSS Flexbox: A Comprehensive Guide

CSS Flexbox is a powerful layout module that enables efficient arrangement of elements within a container, even when their size is unknown or dynamic.

---

## 📦 1. Flex Container Basics

To initiate a flex layout, designate a container with `display: flex;`. This action transforms its direct children into flex items.

```css
.container {
  display: flex;
}
```

By default, flex items are laid out in a row.

---

## 🔄 2. Defining the Main and Cross Axes

Flexbox operates along two axes:

- **Main Axis**: The primary axis along which flex items are laid out.
- **Cross Axis**: Perpendicular to the main axis.

You can set the direction of the main axis using `flex-direction`:

```css
.container {
  flex-direction: row; /* default */
  /* or */
  flex-direction: column;
}
```

---

## 📐 3. Controlling Item Wrapping

By default, flex items try to fit into one line. To allow items to wrap onto multiple lines, use `flex-wrap`:

```css
.container {
  flex-wrap: wrap;
}
```

Combine `flex-direction` and `flex-wrap` using the shorthand `flex-flow`:

```css
.container {
  flex-flow: row wrap;
}
```

---

## 🧭 4. Aligning Items Along the Main Axis

Use `justify-content` to align items along the main axis:

```css
.container {
  justify-content: flex-start; /* default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

---

## 🧱 5. Aligning Items Along the Cross Axis

Use `align-items` to align items along the cross axis:

```css
.container {
  align-items: stretch; /* default */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;
}
```

---

## 🧩 6. Aligning Multiple Lines

When items wrap onto multiple lines, use `align-content` to align the lines within the container:

```css
.container {
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch; /* default */
}
```

---

## 🔢 7. Ordering Flex Items

Use the `order` property to control the order of flex items:

```css
.item {
  order: 2; /* default is 0 */
}
```

Items with lower order values appear first.

---

## 📏 8. Flex Item Growth and Shrinkage

Control how flex items grow and shrink using the `flex` shorthand property:

```css
.item {
  flex: 1; /* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
}
```

This allows items to grow and shrink as needed, sharing available space equally.

---

## 🧍 9. Aligning Individual Items

Override the alignment of individual items using `align-self`:

```css
.item {
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

---

## 🧪 10. Practical Example

Here's a practical example demonstrating various flex properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Example</title>
  <style>
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      height: 300px;
      border: 2px solid #000;
    }
    .item {
      background-color: #f0f0f0;
      padding: 20px;
      margin: 10px;
      flex: 1 1 100px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

---

## 🧰 11. Additional Resources

- [CSS Flexbox Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Flexbox Froggy](https://flexboxfroggy.com/) – A game to learn Flexbox
- [Flexbox Defense](http://www.flexboxdefense.com/) – Another interactive Flexbox game
