let id = document.querySelector('input[name=id]');
let password = document.querySelector('input[name=password');
let submit = document.querySelector('input[type=submit]');
submit.onclick = function(){
  if((id.value != '') && (password.value != '')){
    localStorage.id = id.value;
    localStorage.password = password.value;
    if(window.navigator.onLine == true){   //  del  
      window.history.replaceState({},'',"datach.html");
      window.location.href = 'datach.html';
    }
    else {
      alert("يجب الاتصال بالانترنت");
    }
  }
  else
    alert('يجب إدخال المعلومات كاملة');
}
if(localStorage.lupdate != undefined){
  var appup_div = document.getElementsByClassName('appupdate');
  var appimg = document.querySelector('.appupdate img');
  var updabtn = document.getElementsByClassName('updabtn');
  var updap = document.getElementsByClassName('updap');
  appup_div[0].style.display = 'block';
  appimg.src = localStorage.lappimg;
  updabtn[0].href = localStorage.lapplink;
  updap[0].textContent = localStorage.lapplink;
}