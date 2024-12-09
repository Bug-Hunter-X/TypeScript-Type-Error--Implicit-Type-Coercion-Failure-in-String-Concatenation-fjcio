function combineStrings(str1: string | number, str2: string | number): string {
  return String(str1) + String(str2);
}

let combined = combineStrings(123, "hello"); // No Error, returns "123hello"
console.log(combined) 