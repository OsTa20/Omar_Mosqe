var offdiv = document.getElementsByClassName('offdiv');
var ondiv = document.getElementsByClassName('ondiv');
var myonline2;
var myonline = setInterval(fmyonline,3000);
function fmyonline(){
  if(window.navigator.onLine == true){
    if(localStorage.pageupdate == 'n'){
      ondiv[0].style.display = 'block';
      clearInterval(myonline);
      myonline2 = setTimeout(function(){
        window.location.href = 'ifream.html';
      },2000);
    }
    else {
      clearInterval(myonline);
    }
  }
  else {
    offdiv[0].style.display = 'block';
    clearInterval(myonline);
  }
}
let pageupdate = document.getElementById('pageupdate');
pageupdate.onclick = function(){
  window.location.reload();
}
let alldoc = document.getElementsByClassName('alldoc');
let stud = document.getElementsByClassName('stud');
let studdiv = document.getElementsByClassName('studdiv');
let singout = document.getElementsByClassName('singout');
let closestu = document.getElementsByClassName('closestu');
let dialog = document.getElementsByClassName('dialog');
let dialogdiv = document.getElementsByClassName('dialogdiv');
let closedia = document.getElementsByClassName('closedia');
let myname = localStorage.lmyname.split(',');
stud[0].onclick = function(){
  alldoc[0].style = 'display: block;';
  studdiv[0].style = 'right: 0;';
}
singout[0].onclick = function(){
  var siout = confirm("هل تريد الخروج ؟؟");
  if(siout == true){
    window.history.replaceState({},'',"accounts.html");
    window.location.href = "accounts.html";
  }
}
closestu[0].onclick = function(){
  studdiv[0].style = 'right: -100%;';
  alldoc[0].style = 'display: none;';
}
dialog[0].onclick = function(){
  dialogdiv[0].style = 'top: 0;';
  alldoc[0].style = 'display: block;';
}
closedia[0].onclick = function(){
  dialogdiv[0].style = 'top: -100%;';
  alldoc[0].style = 'display: none;';
}
let id = localStorage.id;
let myid = localStorage.lmyid.split(',');
let indexvar2 = myid.indexOf(id);
var mysiname = myname[indexvar2];
var indexvar = -1;

if (localStorage.lstud_name != undefined){
  var indexvar3 = localStorage.lstud_name.split(',');
  indexvar = indexvar3.indexOf(mysiname);
  if(indexvar != -1){
    var newnotnum = localStorage.lnewnotnum.split(',');
    if (newnotnum[indexvar] != '0'){
      var newnot = document.getElementsByClassName('newnot');
      newnot[0].style.display = 'block';
      newnot[0].innerHTML = newnotnum[indexvar];
    }
  }
}