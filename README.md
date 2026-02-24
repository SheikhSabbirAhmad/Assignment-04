# PH-Assignment-04 Questions and Answers

This document contains important JavaScript DOM questions and answers, including element selection, DOM manipulation, and event handling.

---

## 📌 Question 01  
### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### ✅ Answer:

### 🔹 Difference between getElementById() and getElementsByClassName()

| getElementById()             | getElementsByClassName()       |
|------------------------------|--------------------------------|
| Selects one element          | Selects multiple elements      |
| Uses id                     | Uses class name                |
| Id must be unique           | Class can be repeated          |
| Returns a single element    | Returns HTMLCollection         |
| No loop needed              | Loop needed to access elements |

---

### 🔹 Difference between querySelector() and querySelectorAll()

| querySelector()                    | querySelectorAll()              |
|-----------------------------------|----------------------------------|
| Selects the first matching element| Selects all matching elements    |
| Returns a single element          | Returns a NodeList               |
| No loop required                  | Loop required to access elements |
| Return type: Element              | Return type: NodeList            |

---

## 📌 Question 02  
### How do you create and insert a new element into the DOM?

### ✅ Answer:

A new element is created in the DOM using the following method:

```javascript
document.createElement()
```

After creating the element, it is inserted using:

```javascript
appendChild()
append()
```

### 📍 Steps:

1. Create a new element using `document.createElement()`  
2. Add content or attributes to the element  
3. Insert the element into the DOM  

---

## 📌 Question 03  
### What is Event Bubbling? And how does it work?

### ✅ Answer:

Event Bubbling is a process in JavaScript where an event starts from the target element and propagates upward through its parent elements until it reaches the document.

### 📍 How it works:

1. An event is triggered on a child element  
2. The event first runs on that element  
3. Then it bubbles up to its parent elements  
4. Finally, it reaches the document level  

---

## 📌 Question 04  
### What is Event Delegation in JavaScript? Why is it useful?

### ✅ Answer:

Event Delegation is a technique where a single event listener is added to a parent element instead of multiple child elements.

It works using event bubbling.

### 📍 How it works:

1. An event listener is added to a parent element  
2. An event occurs on a child element  
3. The event bubbles up to the parent  
4. The parent handles the event using `event.target`  

---

## 📌 Question 05  
### What is the difference between preventDefault() and stopPropagation() methods?

### ✅ Answer:

| preventDefault()              | stopPropagation()               |
|------------------------------|--------------------------------|
| Stops default browser action | Stops event bubbling/capturing |
| Does NOT stop event propagation | Does NOT stop default behavior |
| Used to prevent form submit and link navigation | Used to control event flow |

---

## 🚀 Technologies Used

- JavaScript  
- HTML  

---

## 📚 Purpose

This project is created for learning and assignment purposes.

---

## 👨‍💻 Author

Sheikh Sabbir Ahmad
