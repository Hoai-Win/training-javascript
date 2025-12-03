function formatCurrency(num) {
  let numStr = num.toString();

  let [integerPart, decimalPart] = numStr.split(".");

  let formattedInteger = "";
  while (integerPart.length > 3) {

    formattedInteger = "," + integerPart.slice(-3) + formattedInteger;
    
    integerPart = integerPart.slice(0, integerPart.length - 3);
  }

  formattedInteger = integerPart + formattedInteger;


  if (decimalPart) {
    return formattedInteger + "." + decimalPart;
  }

  return formattedInteger;
}

console.log(formatCurrency(1234567)); 
console.log(formatCurrency(1234567.89)); 
