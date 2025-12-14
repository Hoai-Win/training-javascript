 // document.getElementById('') // 
 // login username = win, password = 123456 
 // -> lấy value input username -> so sánh nếu nó sai // -> show alert là đã sai username // 
 //-> lấy value input password -> so sánh nếu nó sai -> show alert là đã sai password // 
 // đúng -> alert login thành công // lắng sự kiện click button login 
 // -> dùng form -> value 2 input username, password -> document.getbyId() để lấy ra value 2 input 




const login = document.getElementById("submit"); 
const userName = document.getElementById("username")
const passWord = document.getElementById("password") 
const acc = {username:'win', password:'123456'}; 
login.addEventListener("click", ()=>{ 
  if (userName.value === acc.username && passWord.value === acc.password) { 
  alert("thành công") 
  return;
 } 
 alert("bạn đã nhập sai") 
})