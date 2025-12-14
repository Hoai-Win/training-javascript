const ktsoChanle = prompt("nhap so bat ky");

function checkNumber (num) {
  if(typeof num !== 'number') {
    console.log("hay nhap so")
    return
  }

  if(num % 2 == 0){
    console.log("so chan")
    return
  }
  
  console.log("so le")
}

checkNumber(ktsoChanle)