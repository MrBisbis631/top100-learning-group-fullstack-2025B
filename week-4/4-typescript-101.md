# 🔸 TypeScript: A Practical Guide

---

## 🔮 Setting Up a TypeScript Project

### 1. Install TypeScript Globally

```bash
npm install -g typescript
```

Check version:

```bash
tsc --version
```

### 2. Initialize a New Project

```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y
```

### 3. Install TypeScript Locally

```bash
npm install --save-dev typescript
```

### 4. Create `tsconfig.json`

```bash
tsc --init
```

Example `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

---

## 📚 Basic Example

### Create Files

```bash
mkdir src
cd src
touch index.ts
```

### Write TypeScript Code

```ts
// src/index.ts

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

### Compile and Run

Compile TypeScript to JavaScript:

```bash
tsc
```

Run the output:

```bash
node dist/index.js
```

---

## 🔹 Interfaces and Types

### Using an Interface

```ts
interface User {
  id: number;
  username: string;
}

const user: User = {
  id: 1,
  username: "Alice",
};
```

### Using a Type Alias

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 101,
  name: "Book",
  price: 29.99,
};
```

---

## 📊 Functions with Types

### Function with Typed Parameters and Return Type

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result); // 8
```

### Optional Parameters

```ts
function log(message: string, userId?: number) {
  console.log(`[${userId ?? 'Guest'}]: ${message}`);
}

log("Hello!");
log("Hi there!", 42);
```

---

## 🧬 Classes

```ts
class Person {
  constructor(public name: string, private age: number) {}

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("Bob", 25);
person.greet();
```

---

## 📖 Generics

### Basic Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));
```

### Generic Interface

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const response: ApiResponse<string> = {
  data: "Success",
};
```

---

## 🏰 Modules

### Exporting

```ts
// src/utils.ts
export function multiply(x: number, y: number): number {
  return x * y;
}
```

### Importing

```ts
// src/index.ts
import { multiply } from "./utils";

console.log(multiply(4, 5));
```

---

## 🔹 Using ts-node for Instant Feedback

Install `ts-node`:

```bash
npm install -D ts-node
```

Run TypeScript directly without compiling manually:

```bash
npx ts-node src/index.ts
```

---

## 🔍 Setting up ESLint with TypeScript

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create `.eslintrc.json`:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {}
}
```

Lint your project:

```bash
npx eslint src/**/*.ts
```

---

## 📚 Summary Cheat Sheet

| Concept         | Example |
| --------------- | ------- |
| Static Typing   | `let x: number = 10;` |
| Interface       | `interface User {}` |
| Type Alias      | `type Product = {}` |
| Function Types  | `function greet(name: string): string {}` |
| Generics        | `function identity<T>(value: T): T {}` |
| Classes         | `class Person {}` |
| Modules         | `import { x } from './file'` |

---

## 🎉 Conclusion

TypeScript brings **type safety**, **better tooling**, and **scalability** to JavaScript development.

Starting small — with simple types and interfaces — and gradually expanding your use of TypeScript is the best way to improve both your code quality and your productivity.

**Practice is key**: The more you use it, the more natural it becomes.

In future sections, we will cover advanced patterns, best practices, and real-world project setups! 🚀
