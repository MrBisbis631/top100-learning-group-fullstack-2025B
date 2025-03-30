# HTML Tags, CSS Selectors and JavaScript Events - Guide

## HTML Tags – Concepts and Explanations

HTML (HyperText Markup Language) is the foundation of every web page. It structures the content and defines how different elements are presented on the page. HTML tags allow developers to categorize and format content.

### 1️⃣ Basic HTML Tags

- **`<html>`**:  
  The root element that wraps all content of an HTML document.

  ```html
  <html>
    <!-- All content here -->
  </html>
  ```

- **`<head>`**:  
  Contains metadata, such as links to external stylesheets, JavaScript files, and other information not displayed on the page.

  ```html
  <head>
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  ```

- **`<body>`**:  
  Contains the visible content of the webpage.

  ```html
  <body>
    <!-- Visible content goes here -->
  </body>
  ```

- **`<title>`**:  
  Specifies the title of the document, which appears in the browser tab.

    ```html
    <title>My Webpage</title>
    ```

### 2️⃣ Structural Tags

- **`<h1>` to `<h6>`**:  
  Header tags used to define headers. `<h1>` is the most important, and `<h6>` is the least.

  ```html
  <h1>Main Heading</h1>
  <h2>Sub Heading</h2>
  ```

- **`<p>`**:  
  Paragraph tag used for text blocks.

  ```html
  <p>This is a paragraph of text.</p>
  ```

- **`<ul>` and `<ol>`**:  
  Defines unordered and ordered lists, respectively.

  ```html
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  ```

- **`<div>`**:  
  A generic block-level element used to group content.

  ```html
  <div>
    <h2>Heading in div</h2>
    <p>Paragraph inside div</p>
  </div>
  ```

- **`<span>`**:  
  A generic inline element for styling small parts of text.

    ```html
    <span>Styled text</span>
    ```

### 3️⃣ Media and Images

- **`<img>`**:  
  Embeds images into the webpage.

  ```html
  <img src="image.jpg" alt="Image description" />
  ```

- **`<figure>` and `<figcaption>`**:  
  Provides semantic support for images and their captions.

    ```html
    <figure>
      <img src="image.jpg" alt="Amazing image" />
      <figcaption>Image caption</figcaption>
    </figure>
    ```

### 4️⃣ Forms and Input

- **`<form>`**:  
  Wraps form elements for collecting user input.

  ```html
  <form action="/submit" method="POST">
    <input type="text" name="username" placeholder="Enter username" />
    <input type="submit" value="Submit" />
  </form>
  ```

- **`<input>`**:  
  Allows users to input data. It can be various types, such as text, checkbox, etc.

  ```html
  <input type="text" name="username" placeholder="Enter your username" />
  ```

- **`<button>`**:  
  Creates a clickable button.

    ```html
    <button type="button" onclick="alert('Button clicked')">Click me</button>
    ```

---

## CSS Selectors – Concepts and Explanations

CSS selectors are the foundation for applying styles to HTML elements. They target specific elements in the DOM based on their type, class, ID, attributes, or even their position within the page.

### 1️⃣ Basic Selectors

- **Type Selector**:
  Targets all elements of a specific type, like all `<p>` tags.

  ```css
  p {
    color: blue;
  }
  ```

- **ID Selector**:
  Targets an element by its unique `id`.

  ```css
  #header {
    background-color: #333;
  }
  ```

- **Class Selector**:
  Targets all elements that have a specific class.

    ```css
    .button {
      background-color: red;
      color: white;
    }
    ```

### 2️⃣ Structural Selectors

- **`*` (Universal Selector)**:
  Selects all elements in the document.

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

- **`element1 element2` (Descendant Selector)**:
  Selects all `element2` elements that are descendants of `element1`.

  ```css
  div p {
    color: green;
  }
  ```

- **`element1 > element2` (Child Selector)**:
  Selects all `element2` elements that are direct children of `element1`.

  ```css
  div > p {
    color: orange;
  }
  ```

- **`element1 + element2` (Adjacent Sibling Selector)**:
  Selects `element2` that immediately follows `element1`.

  ```css
  h2 + p {
    font-size: 18px;
  }
  ```

- **`element1 ~ element2` (General Sibling Selector)**:
  Selects all `element2` elements that are siblings of `element1`.

    ```css
    h2 ~ p {
      font-weight: bold;
    }
    ```

### 3️⃣ Attribute Selectors

- **`[attribute]`**:
  Selects all elements with the specified attribute.

  ```css
  input[type="text"] {
    border: 2px solid blue;
  }
  ```

- **`[attribute^="value"]`**:
  Selects elements whose attribute value starts with the specified value.

  ```css
  a[href^="https://"]
  {
    color: green;
  }
  ```

- **`[attribute$="value"]`**:
  Selects elements whose attribute value ends with the specified value.

  ```css
  img[src$=".jpg"] {
    border: 1px solid black;
  }
  ```

- **`[attribute*="value"]`**:
  Selects elements whose attribute value contains the specified value.

    ```css
      a[href*="example"] {
        text-decoration: underline;
      }
    ```

### 4️⃣ Pseudo-Classes

- **`:hover`**:
  Activates when an element is hovered over.

  ```css
  a:hover {
    color: blue;
  }
  ```

- **`:active`**:
  Activates when an element is being clicked.

  ```css
  button:active {
    background-color: green;
  }
  ```

- **`:focus`**:
  Activates when an element receives focus.

  ```css
  input:focus {
    border: 2px solid red;
  }
  ```

- **`:nth-child()`**:
  Selects elements based on their position in a parent.

    ```css
    li:nth-child(odd) {
      background-color: lightgray;
    }
    ```

### 5️⃣ Pseudo-Elements

- **`::before`**:
  Inserts content before an element.

  ```css
  h1::before {
    content: "★ ";
    color: gold;
  }
  ```

- **`::after`**:
  Inserts content after an element.

    ```css
    p::after {
      content: " End.";
    }
    ```

---

## JavaScript Events – Concepts and Explanations

JavaScript events are actions or occurrences that happen in the browser, such as a user clicking on a button or pressing a key. These events can trigger JavaScript functions and enable dynamic interaction with the webpage.

### 1️⃣ Common Event Types

- **`click`**:
  Triggered when an element is clicked.

  ```javascript
  button.addEventListener("click", function () {
    alert("Button clicked");
  });
  ```

- **`mouseover`**:
  Triggered when the mouse pointer hovers over an element.

  ```javascript
  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "yellow";
  });
  ```

- **`mouseout`**:
  Triggered when the mouse pointer leaves an element.

  ```javascript
  div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "";
  });
  ```

- **`keydown`**:
  Triggered when a key is pressed down.

  ```javascript
  document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
  });
  ```

- **`keyup`**:
  Triggered when a key is released.

    ```javascript
    document.addEventListener("keyup", function (event) {
      console.log("Key released: " + event.key);
    });
    ```

### 2️⃣ Event Bubbling vs. Capturing

- **Event Bubbling**:  
  The event starts from the innermost element and bubbles up to the outer elements in the DOM.

  ```javascript
  div.addEventListener("click", function () {
    console.log("Div clicked");
  });
  ```

- **Event Capturing**:  
  The event starts from the outermost element and propagates down to the target element.

    ```javascript
    div.addEventListener(
      "click",
      function () {
        console.log("Div clicked");
      },
      true
    );
    ```

### 3️⃣ Event Delegation

Event delegation allows you to attach a single event listener to a parent element, which will handle events for child elements.

```javascript
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("Button clicked");
  }
});
```

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  הדפדפן שלך לא תומך בתגית אודיו.
</audio>

```
