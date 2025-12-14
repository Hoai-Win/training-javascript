function capitalizeWords(str) {
    let result = "";
    let newWord = true; // Đánh dấu đang bắt đầu một từ mới

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === " ") {
            // Gặp dấu cách -> từ mới sẽ bắt đầu sau ký tự này
            newWord = true;
            result += char;
        } else {
            if (newWord) {
                // Ký tự đầu của từ -> viết hoa
                result += char.toUpperCase();
                newWord = false;
            } else {
                // Các ký tự khác -> giữ nguyên
                result += char;
            }
        }
    }

    return result;
}

console.log(capitalizeWords("xin chao cac ban"));
// "Xin Chao Cac Ban"
