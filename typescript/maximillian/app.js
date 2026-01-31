var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
// concersions: .toString, .parseInt
// void means: doesnt have a return statement
function printResult(result) {
    console.log(result);
}
// TYPE INFERENCE: no need to re-assign a type if it is infered by typescript
// const result: number = add(5, 6); ❌ : no need to assign a type to result variable
// const result: number = add(5, 6);
// console.log(result);
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    printResult(result);
});
