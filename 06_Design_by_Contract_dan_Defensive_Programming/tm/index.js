function is_not_fizzbuzz(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("Input harus berupa bilangan bulat");
  }

  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}

console.log(is_not_fizzbuzz(1));  
console.log(is_not_fizzbuzz(3));  
console.log(is_not_fizzbuzz(5));  
console.log(is_not_fizzbuzz(30));
console.log(is_not_fizzbuzz(7));  

try {
  console.log(is_not_fizzbuzz(null)); 
} catch (e) {
  console.error(e.name + ": " + e.message); 
}

try {
  console.log(is_not_fizzbuzz(NaN)); 
} catch (e) {
  console.error(e.name + ": " + e.message);
}

try {
  console.log(is_not_fizzbuzz(Infinity)); 
} catch (e) {
  console.error(e.name + ": " + e.message); 
}