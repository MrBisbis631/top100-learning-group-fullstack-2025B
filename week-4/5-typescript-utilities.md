# 🔧 TypeScript Utilities: A Practical Guide

---

## 🌍 What are TypeScript Utilities?

TypeScript comes with **utility types**: built-in helpers that allow you to transform, manipulate, and fine-tune types easily.

They are incredibly useful for creating more flexible, reusable, and scalable code.

---

## 🔍 Why Use Utility Types?

- **Avoid duplication**
- **Increase type safety**
- **DRY (Don't Repeat Yourself)** principle
- **Write cleaner, more readable types**

---

## 🔹 Common Utility Types

## 1. `Partial<Type>`

**Makes all properties optional.**

```ts
interface User {
  id: number;
  name: string;
}

const updateUser = (user: Partial<User>) => {
  // User with optional fields
};
```

---

## 2. `Required<Type>`

**Makes all properties required.**

```ts
interface Profile {
  username?: string;
  email?: string;
}

const fullProfile: Required<Profile> = {
  username: "john",
  email: "john@example.com"
};
```

---

## 3. `Readonly<Type>`

**Makes all properties immutable.**

```ts
interface Config {
  apiKey: string;
}

const settings: Readonly<Config> = {
  apiKey: "1234",
};

// settings.apiKey = "4321"; // Error: Cannot assign to 'apiKey'
```

---

## 4. `Pick<Type, Keys>`

**Creates a new type by picking specific properties.**

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const item: Pick<Product, "id" | "name"> = {
  id: 1,
  name: "Laptop",
};
```

---

## 5. `Omit<Type, Keys>`

**Creates a new type by omitting specific properties.**

```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

const carInfo: Omit<Car, "year"> = {
  brand: "Toyota",
  model: "Corolla",
};
```

---

## 6. `Record<Keys, Type>`

**Creates an object type with specific keys and values of a given type.**

```ts
const phoneBook: Record<string, number> = {
  "Alice": 12345,
  "Bob": 67890,
};
```

You can also use unions:

```ts
const userRoles: Record<"admin" | "editor" | "viewer", boolean> = {
  admin: true,
  editor: false,
  viewer: true,
};
```

---

## 7. `Exclude<UnionType, ExcludedMembers>`

**Removes types from a union.**

```ts
type Role = "admin" | "editor" | "viewer";

type LimitedRole = Exclude<Role, "admin">; // "editor" | "viewer"
```

---

## 8. `Extract<Type, Union>`

**Extracts types that are assignable to a union.**

```ts
type Status = "pending" | "success" | "error";

type SuccessStatus = Extract<Status, "success" | "error">; // "success" | "error"
```

---

## 9. `NonNullable<Type>`

**Removes `null` and `undefined` from a type.**

```ts
type MaybeString = string | null | undefined;

type DefiniteString = NonNullable<MaybeString>; // string
```

---

## 🔹 Advanced Utility Types

## `ReturnType<Type>`

**Get the return type of a function.**

```ts
function getUser() {
  return { id: 1, name: "Alice" };
}

type UserReturn = ReturnType<typeof getUser>; // { id: number; name: string; }
```

---

## `Parameters<Type>`

**Get the parameter types of a function as a tuple.**

```ts
function greet(name: string, age: number) {}

type GreetParams = Parameters<typeof greet>; // [string, number]
```

---

## 📅 Custom Utility Types

You can also create your own utility types!

Example:

```ts
type Nullable<T> = T | null;

type NullableString = Nullable<string>; // string | null
```

---

## 🏆 Best Practices

- Use `Pick` and `Omit` to create focused, minimal types.
- Use `Partial` for update scenarios (like PATCH APIs).
- Use `Readonly` to protect against unintended mutations.
- Prefer `Record` when mapping keys to consistent types.
- Combine utilities for powerful, flexible types.

---

## 🌟 Conclusion

Utility types are a powerful part of TypeScript that make your code **more flexible**, **more concise**, and **more robust**.

Mastering them will save you time and help you create **more reusable**, **type-safe** components and functions.

**Next:** We'll see real-world use cases combining multiple utilities! 🚀

---

## 📍 Bonus: Quick Reference Table

| Utility Type | What It Does |
| ------------ | ------------- |
| Partial      | Make all properties optional |
| Required     | Make all properties required |
| Readonly     | Make all properties immutable |
| Pick         | Select certain properties |
| Omit         | Exclude certain properties |
| Record       | Map keys to a type |
| Exclude      | Remove types from a union |
| Extract      | Extract types from a union |
| NonNullable  | Remove null/undefined |
| ReturnType   | Get return type of function |
| Parameters   | Get parameters of function |
