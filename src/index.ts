let age: number = 20;
if (age < 50)
    age += 10
console.log(age);

// Use Debugger:
// Create age as a variable in teh watch pallet
// F5 for debugging
// F10 for stepping through each line

// Types
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// TypeScript is smart enough to know the type, so annotations are not required.Rewrite like this:
// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;

// Any Type
let level;
level = 1;
level = 'a';
//Should be avoided as if not initialised when created, compiler thinks its a type any.

function render(document) {
    console.log(document);
}
// We could add type any, but the point of using TS is to be strongly typed.
// In tsconfig file set no Implicity to false and this error disappears.