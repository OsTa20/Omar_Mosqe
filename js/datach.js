//   الاتصال بملف الاكسل والتأكد من كلمة المرور
let alldata;
let myid = [];
let myname = [];
let mydate = [];
let myfather = [];
let mylive = [];
let mysave = [];
let myphon = [];
let time;
let time2 = 0;
let studentnum = 0;
/* set up XMLHttpRequest */
var onel = localStorage.id[0];
if(onel == 'A'){
  //var url = "../studda1A.xlsx";
  var url = "https://docs.google.com/spreadsheets/d/10PWz9d59KSMcgEqm1G1g2-J3DCYgXdUo/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'B'){
  //var url = "../studda1B.xlsx";
  var url = "https://docs.google.com/spreadsheets/d/1G96N-s7rYYwkHAO29-JmhoOrJmIQAlMM/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'C'){
  //var url = "../studda1C.xlsx";
  var url = "https://docs.google.com/spreadsheets/d/1luJFz9X8WX9-i3CpSbf05ZsWh8n5C5Wk/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'D'){
  var url = "https://docs.google.com/spreadsheets/d/11sonZv3dHOT3Qabb3x9dDnX6WlyrH96M/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'E'){
  var url = "https://docs.google.com/spreadsheets/d/1xYHGALpejfnuIhBTxhxL8qNL-Z3GGE20/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'F'){
  var url = "https://docs.google.com/spreadsheets/d/1V-FD7iPFnxupGVl5oQsyJc7i58D6TPgd/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'G'){
  var url = "https://docs.google.com/spreadsheets/d/1rBLCOd1jsbA2hFT7FOQgxS6oIYobPeyk/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
if(onel == 'H'){
  var url = "https://docs.google.com/spreadsheets/d/1zLxWtYlSZvXQOqgSR_OuUQ9vczKzfYC7/edit?usp=drivesdk&ouid=106932678102163501422&rtpof=true&sd=true";
}
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
  var arraybuffer = oReq.response;
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");
  var workbook = XLSX.read(bstr, {type:"binary"});
  var first_sheet_name = workbook.SheetNames[0];
  var worksheet = workbook.Sheets[first_sheet_name];
  alldata = XLSX.utils.sheet_to_json(worksheet,{raw:true});
  let id = localStorage.id;
  let password = localStorage.password;
  if(localStorage.lstudentnum == undefined){
    localStorage.lstudentnum = 0;
  }
  else {
    studentnum = Number(localStorage.lstudentnum);
  }
  for (let i in alldata){
    if((id == alldata[i].A) && (password == alldata[i].B)){
      if(localStorage.lstudentnum == '0'){
        myid.push(id);
        localStorage.lmyid = myid;
        myname.push(alldata[i].C);
        localStorage.lmyname = myname;
        mydate.push(alldata[i].D);
        localStorage.lmydate = mydate;
        myfather.push(alldata[i].E);
        localStorage.lmyfather = myfather;
        mylive.push(alldata[i].F);
        localStorage.lmylive = mylive;
        mysave.push(alldata[i].G);
        localStorage.lmysave = mysave;
        myphon.push(alldata[i].H);
        localStorage.lmyphon = myphon;
        localStorage.lstudentnum = '1';
        if(window.navigator.onLine == true){  
          time = setInterval(ftime,1000);
        }
        else  
          alert("يجب الاتصال بالانترنت");
        break;
      }
      else {
        myid = localStorage.lmyid.split(',');
        if(myid.indexOf(id) == -1){
          myid.push(id);
          localStorage.lmyid = myid;
          myname = localStorage.lmyname.split(',');
          myname.push(alldata[i].C);
          localStorage.lmyname = myname;
          mydate = localStorage.lmydate.split(',');
          mydate.push(alldata[i].D);
          localStorage.lmydate = mydate;
          myfather = localStorage.lmyfather.split(',');
          myfather.push(alldata[i].E);
          localStorage.lmyfather = myfather;
          mylive = localStorage.lmylive.split(',');
          mylive.push(alldata[i].F);
          localStorage.lmylive = mylive;
          mysave = localStorage.lmysave.split(',');
          mysave.push(alldata[i].G);
          localStorage.lmysave = mysave;
          myphon = localStorage.lmyphon.split(',');
          myphon.push(alldata[i].H);
          localStorage.lmyphon = myphon;
          localStorage.lstudentnum = studentnum+1;
          if(window.navigator.onLine == true){     
            time = setInterval(ftime,1000);
          }
          else  
            alert("يجب الاتصال بالانترنت");
          break;
        }
        else {
          alert("الاسم موجود");
          window.history.replaceState({},'',"accounts.html");
          window.location.href = "accounts.html";
          break;
        }
      }
    }
  }
  if(localStorage.length == 3){
    alert('يرجى التأكد من المعلومات');
    window.history.replaceState({},'',"singin_on.html");
    window.location.href = "singin_on.html";
  }
  if ((studentnum == Number(localStorage.lstudentnum)) && (localStorage.length != 3)){
    alert('يرجى التأكد من المعلومات');
    window.history.replaceState({},'',"singin_on.html");
    window.location.href = "singin_on.html";
  }
  function ftime(){
    time2++;
    if(time2 == 3){
      clearInterval(time);
      window.history.replaceState({},'',"accounts.html");
      window.location.href = "accounts.html";
    }
  }
}
oReq.send();