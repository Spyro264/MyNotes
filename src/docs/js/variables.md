---
title: Variables
category: Fundamentals
order: 1
---

# Variables

A variable is a named box that holds a value. JavaScript gives you three ways to declare one: `let`, `const` and `var`.

## let

Use `let` when the value will change later.

```js
let count = 0
count = count + 1 // 1
```

## const

Use `const` when the variable should never be reassigned. This should be your default.

```js
const name = 'Nagaraj'
name = 'Someone else' // TypeError: Assignment to constant variable
```

`const` stops reassignment, not mutation. An object declared with `const` can still have its properties changed:

```js
const user = { name: 'Nagaraj' }
user.name = 'Raj' // allowed
```

## var

`var` is the old way. Avoid it in new code: it is function-scoped instead of block-scoped, and it is hoisted in a way that causes bugs.

```js
if (true) {
  var a = 1
  let b = 2
}
console.log(a) // 1  (leaks out of the block)
console.log(b) // ReferenceError
```

## Quick rule

| Keyword | Reassign? | Scope    | Use it?          |
| ------- | --------- | -------- | ---------------- |
| `const` | No        | Block    | By default       |
| `let`   | Yes       | Block    | When it changes  |
| `var`   | Yes       | Function | Avoid            |
