function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Thêm từng ký tự vào chuỗi mới từ cuối lên đầu
  }
  return reversed;
}

console.log(reverseStringLoop("JavaScript")); // Kết quả: "tpircSavaJ"
