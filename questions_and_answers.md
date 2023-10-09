<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary>
<b>Answer - B: `ReferenceError: greetign is not defined`</b></summary><p>

#### Answer: ?

<i>ReferenceError means that the code uses a name (called an identifier) that is not defined. And the error itself explicitly tells you what it is: greeting is not defined. Besides incorrect definition order, there are more common typos in JavaScript, both when using a variable and when declaring it.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer - C: `"12"`</b>

</summary>
<p>

#### Answer: ?

<i>Here  1 is a number and "2" is a string . When it sum between a number and a string , the number will also count as a string. So it will be add like two strings.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer - A: `['🍕', '🍫', '🥑', '🍔']`</b>

</summary>
<p>

#### Answer: ?

<i>You cannot replace in this method. You have to use unshift or push to add a string in the array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer - - B: `Hi there, undefined`</b>

</summary>
<p>

#### Answer: ?

<i>Here name is the parameter of the function . But its value was not assigned from anywhere. So there will be no value of name. This is why output will be undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer - C : 3</b></summary>
<p>

#### Answer: ?

<i>let count = 0;: Initializes the count variable to 0.
const nums = [0, 1, 2, 3];: Creates an array called nums with values [0, 1, 2, 3].
nums.forEach((num) => {...});: Iterates over each element in the nums array using forEach</i>

</p>
</details>
