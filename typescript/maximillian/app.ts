const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
  return a + b;
} 
// concersions: .toString, .parseInt
// void means: doesnt have a return statement

function printResult(result: number): void {
  console.log(result);
}

// TYPE INFERENCE: no need to re-assign a type if it is infered by typescript
// const result: number = add(5, 6); ❌ : no need to assign a type to result variable
// const result: number = add(5, 6);
// console.log(result);

buttonElement?.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  printResult(result);
});
