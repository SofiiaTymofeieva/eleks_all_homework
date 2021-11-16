export const calculator = function (num1, num2, operator){
  let result;

    if((typeof(num1) !== 'number') || (typeof(num2) !== 'number')){
        return result = 'Invalid arguments. First and second arguments should be a numbers!';
    }

    switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default: result = 'Please, enter correct operator "+", "-", "*", "/".';
      }
  
    return result;
}
