let btn = document.getElementById('btn');
function fagain(){
  window.history.replaceState({},'',"../index.html");
  window.location.href = "index.html";
}
btn.addEventListener('click',fagain);