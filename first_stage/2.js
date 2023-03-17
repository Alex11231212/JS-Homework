function ultimateCalculator() {

  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  this.calculate = function(expression) {

    let separated_components = expression.split(' ');
    
    let a = BigInt(separated_components[0]);
    let b = BigInt(separated_components[2]);
    let operator = separated_components[1];

    return (operator in this.methods) ? this.methods[operator](a, b): NaN
  };
}

let powerCalc = new ultimateCalculator();

console.log(powerCalc.calculate('1234567890123456789012345678901234567890 + 1234567890123456789012345678901234567890'));
console.log(powerCalc.calculate('1234567890123456789012345678901234567890 * 2'));
console.log(powerCalc.calculate('1234567890123456789012345678901234567890 - 123456789012345678901234567890123456'));
console.log(powerCalc.calculate('123456789012345678901234567890123456789098656 + 123'));
