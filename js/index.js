let count = 0;
/*
console.log(window.location.href);
console.log(window.history);
*/
let time = setInterval(fcount,1000);
function fcount(){
  count++;
  if(count == 1){
    clearInterval(time);
    if(window.navigator.onLine == true){ //  متصل ؟؟
      if(localStorage.lstudentnum != undefined) {  // مسجل دخول؟
        window.history.replaceState({},'',"html/accounts.html");
        window.location.href = "accounts.html";
      }
      else { //  غير مسجل
        window.history.replaceState({},'',"html/singin_on.html");
        window.location.href = "singin_on.html";
      }
    }
    else {  //  غير متصل
      //  window.close();
      if(Number(localStorage.lstudentnum) >= 1) {  // مسجل دخول؟
        window.history.replaceState({},'',"html/accounts.html");// accounts
        window.location.href = "accounts.html";//accounts
      }
      else { //  غير مسجل
        window.history.replaceState({},'',"html/noacc_of.html");
        window.location.href = "noacc_of.html";
      }
    }
  }
}
