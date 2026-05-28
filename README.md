# ⚛️ React Composition Pattern

> **"Prefer Composition over Inheritance"** — React Official Docs

Composition is React's primary design pattern for building complex UIs from small, independent, and reusable components — like assembling **Lego blocks** 🧱

---

## 📖 Table of Contents

- [What is Composition?](#what-is-composition)
- [Pattern 1 — Containment](#pattern-1--containment-the-children-prop)
- [Pattern 2 — Specialization](#pattern-2--specialization)
- [Why Use It?](#why-use-it)
- [বাংলা সারসংক্ষেপ](#-বাংলা-সারসংক্ষেপ)

---

## What is Composition?

Instead of building **one giant component**, you create **small, focused components** and combine them to form complex UIs.

```
❌ Inheritance:   ComponentA  extends  ComponentB
✅ Composition:   ComponentA  contains ComponentB
```

---

## Pattern 1 — Containment (The `children` Prop)

Use this when a component **doesn't know its content ahead of time** — like a card, modal, or panel.

```jsx
// 1️⃣ Create a generic wrapper
function Card(props) {
  return <div className="card-box">{props.children}</div>;
}

// 2️⃣ Fill it with anything you need
function App() {
  return (
    <Card>
      <h1>Hello World</h1>
      <p>This is inside the card!</p>
    </Card>
  );
}
```

> 💡 **Key idea:** `props.children` is a slot — pass any JSX content into it from the outside.

---

## Pattern 2 — Specialization

Use this to create **specific versions** of a generic component by passing different props.

```jsx
// 🔧 Generic, reusable Button
function Button(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
}

// 🎯 Specialized versions
function DeleteButton() {
  return <Button color="red" text="Delete Item" />;
}

function SaveButton() {
  return <Button color="green" text="Save Changes" />;
}
```

> 💡 **Key idea:** Configure a generic component with props instead of rewriting it.

---

## Why Use It?

| Benefit | Description |
|---|---|
| ♻️ **Reusability** | Write once, use everywhere |
| 🔧 **Maintainability** | Fix one component, it updates everywhere |
| 🧪 **Testability** | Small components are easier to isolate and test |
| 📖 **Readability** | Declarative structure that's easy to follow |

---

## 🇧🇩 বাংলা সারসংক্ষেপ

**কম্পোজিশন** হলো রিঅ্যাক্টের একটি মূল ডিজাইন প্যাটার্ন। একটি বড় কম্পোনেন্ট না বানিয়ে, ছোট ছোট কম্পোনেন্ট তৈরি করে সেগুলো একসাথে জোড়া লাগানো হয়।

### ১. কনটেইনমেন্ট (Containment)

`props.children` ব্যবহার করে কম্পোনেন্টের ভেতরে যেকোনো কন্টেন্ট পাঠানো যায়।

```jsx
function Card(props) {
  return <div className="card-box">{props.children}</div>;
}

function App() {
  return (
    <Card>
      <h1>হ্যালো ওয়ার্ল্ড</h1>
      <p>এই লেখাটি কার্ডের ভেতরে দেখাবে!</p>
    </Card>
  );
}
```

### ২. স্পেশালাইজেশন (Specialization)

একটি সাধারণ কম্পোনেন্টকে প্রপস দিয়ে বিভিন্ন কাজে ব্যবহার করা যায়।

```jsx
function Button(props) {
  return <button style={{ backgroundColor: props.color }}>{props.text}</button>;
}

function DeleteButton() {
  return <Button color="red" text="ডিলিট করুন" />;
}

function SaveButton() {
  return <Button color="green" text="সেভ করুন" />;
}
```

---

<div align="center">

Made with ❤️ for React learners &nbsp;|&nbsp; **একবার লিখুন, বারবার ব্যবহার করুন**

</div>