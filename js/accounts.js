localStorage.removeItem('password');
let myid = [];
let myname = [];
let mydate = [];
let myfather = [];
let mylive = [];
let mysave = [];
let myphon = [];
let maindiv = document.getElementsByClassName('maindiv');
let newacc = document.getElementsByClassName('newacc');

window.history.pushState(null, null, 'accounts.html');
window.history.pushState(null, null, 'accounts.html');

myid = localStorage.lmyid.split(',');
myname = localStorage.lmyname.split(',');
mydate = localStorage.lmydate.split(',');
myfather = localStorage.lmyfather.split(',');
mylive = localStorage.lmylive.split(',');
mysave = localStorage.lmysave.split(',');
myphon = localStorage.lmyphon.split(',');
  
for(var n=0; n<myid.length; n++){
  var myacc = document.createElement('div');
  myacc.classList.add('myacc');
  var myico = document.createElement('img');
  myico.classList.add('myico');
  var myna = document.createElement('p');
  myna.classList.add('myna'); //  name
  myna.classList.add(myid[n]);
  var myop = document.createElement('button');
  myop.classList.add('myop');
  myop.classList.add(myid[n])
    
  myico.src = "../img/muslim.png";
  myna.textContent = myname[n];
  myop.textContent = '...'; // button
    
  myacc.appendChild(myico);
  myacc.appendChild(myna);
  myacc.appendChild(myop);
  maindiv[0].insertBefore(myacc,maindiv[0].children[0]);
 
  myna.addEventListener('click', function(){
    localStorage.id = this.classList[1];
    if(window.navigator.onLine == true){ 
      window.history.replaceState({},'',"stmain_of.html");
      window.location.href = "stmain_of.html";
    }
    else {
      window.history.replaceState({},'',"stmain_of.html");  
      window.location.href = "stmain_of.html";  
      //}
    }
  });
  myop.addEventListener('click', function(){
    var deletacc = confirm("هل تريد إزالة الحساب ؟؟؟\n عند العودة يجب إدخال كلمة السر من جديد");
    if(deletacc == true){
      var delst = this.classList[1];
      var delst2 = myid.indexOf(delst);
      if(myid.length == 1){
        localStorage.clear();
        window.history.replaceState({},'',"singin_on.html");
        window.location.href = "singin_on.html";
      }
      else {
        myid.splice(delst2,1);
        mydate.splice(delst2,1);
        myfather.splice(delst2,1);
        mylive.splice(delst2,1);
        mysave.splice(delst2,1);
        myphon.splice(delst2,1);
        if(localStorage.lbigarr != undefined){
          var stud_name = [];
          stud_name = localStorage.lstud_name.split(',');//  الحاصلين على معلواتهم
          if(stud_name.indexOf(myname[delst2]) != -1){
            if(stud_name.length != 1){
              var oldnoti = [];
              var allday = [];
              var stud_noit = [];
              var stud_pres = [];
              var stud_poin = [];
              var lstud_rate_n = [];
              var lstud_rate_p = [];
              oldnoti = localStorage.loldnoti.split(',');
              allday = localStorage.lallday.split('*');
              stud_noit = localStorage.lstud_noit.split('*');
              stud_pres = localStorage.lstud_pres.split('*');
              stud_poin = localStorage.lstud_poin.split('*');
              stud_rate_n = localStorage.lstud_rate_n.split('*');
              stud_rate_p = localStorage.lstud_rate_p.split('*');
              var bigarr = Number(localStorage.lbigarr);
              if(allday[allday.length - 1] == ''){
                allday.pop();
                stud_poin.pop();
                stud_pres.pop();
                stud_noit.pop();
                stud_rate_n.pop();
                stud_rate_p.pop();
              }
              
              var delst3 = stud_name.indexOf(myname[delst2]);
              stud_name.splice(delst3,1);
              oldnoti.splice(delst3,1);
              allday.splice(delst3,1);
              stud_noit.splice(delst3,1);
              stud_pres.splice(delst3,1);
              stud_poin.splice(delst3,1);
              stud_rate_n.splice(delst3,1);
              stud_rate_p.splice(delst3,1);
              bigarr = bigarr - 1;
              var allday2 = [];
              var stud_noit2 = [];
              var stud_pres2 = [];
              var stud_poin2 = [];
              var stud_rate_n2 = [];
              var stud_rate_p2 = [];
              allday2 = allday.join('*');
              stud_noit2 = stud_noit.join('*');
              stud_pres2 = stud_pres.join('*');
              stud_poin2 = stud_poin.join('*');
              stud_rate_n2 = stud_rate_n.join('*');
              stud_rate_p2 = stud_rate_p.join('*');
              localStorage.lstud_name = stud_name;
              localStorage.loldnoti = oldnoti;
              localStorage.lallday = allday2;
              localStorage.lstud_noit = stud_noit2;
              localStorage.lstud_pres = stud_pres2;
              localStorage.lstud_poin = stud_poin2;
              localStorage.lstud_rate_n = stud_rate_n2;
              localStorage.lstud_rate_p = stud_rate_p2;
              localStorage.lbigarr = bigarr;
            }
            else {
              localStorage.removeItem('lstud_name');
              localStorage.removeItem('loldnoti');
              localStorage.removeItem('lallday');
              localStorage.removeItem('lstud_noit');
              localStorage.removeItem('lstud_pres');
              localStorage.removeItem('lstud_poin');
              localStorage.removeItem('lstud_rate_n');
              localStorage.removeItem('lstud_rate_p');
              localStorage.removeItem('lbigarr');
              localStorage.removeItem('lnewnotnum');
            }
          }
        }
        myname.splice(delst2,1);
        localStorage.lmyid = myid;
        localStorage.lmyname = myname;
        localStorage.lmydate = mydate;
        localStorage.lmyfather = myfather;
        localStorage.lmylive = mylive;
        localStorage.lmysave = mysave;
        localStorage.lmyphon = myphon;
        var studentnum = Number(localStorage.lstudentnum);
        localStorage.lstudentnum = studentnum - 1;
        location.reload();
      }
    }
  });
}
function fnewacc(){
  window.history.replaceState({},'',"singin_on.html");
  window.location.href = "singin_on.html";
}
newacc[0].addEventListener('click',fnewacc);

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
localStorage.pageupdate = 'n';