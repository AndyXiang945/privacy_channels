
function gotoSurvey(){



  if (document.getElementById("section1").checked && 
      document.getElementById("section2").checked &&
      document.getElementById("section3").checked &&
      document.getElementById("section4").checked && 
      document.getElementById("section5").checked) {

      var SurveyInterface = document.getElementById("SurveyContainer");

      if (SurveyInterface.style.display === "block") {
        SurveyInterface.style.display = "none";
      } else {
        SurveyInterface.style.display = "block";
      }


  } else {
    alert("You must scroll down and click on all checkboxs in order to proceed");
  }
}




function next(nextID){
  var nextInstruction = document.getElementById(nextID);
  nextInstruction.style.display = "block";
}

function nextChannel(){
  //hanel the survey questions

  const channelOrder = localStorage.getItem('channelOrder').split(",");

  var currentSequence = channelOrder.indexOf('privacy_policy');

  if (currentSequence + 1 < 3) {
    var channel = channelOrder[currentSequence+1];
    location.replace(channel + ".html");
  } else {
    location.replace('../../post.html');
  }

}

function countWords(s){
  s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
  s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
  return s.split(' ').filter(function(str){return str!="";}).length;
  //return s.split(' ').filter(String).length; - this can also be used
}

function wordCount(QuestionID){
  currentInput = document.getElementById(QuestionID + '-open-question').value;
  sink = document.getElementById(QuestionID + '-count');
  sink.innerHTML = 'Word Count: ' + countWords(currentInput);
}


function submit(){
  var C1_answer;
  var C2_answer;
  var C3_answer = [];
  var C3_others;
  var C4_answer = [];
  var C4_others;
  var C5_answer = [];
  var C5_others;
  var C6_answer = [];
  var C6_others;
  var C7_answer = [];
  var C7_others;
  var C8_answer;
  var C9_answer;

  var C10_answer;
  var C11_answer;
  var C12_answer;
  var C12_answer_open;
  var C13_answer;
  var C13_answer_open;


  try {
    C1_answer = document.querySelector('input[name="C1"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.1 before moving on!");
      return;
  }

  try {
    C2_answer = document.querySelector('input[name="C2"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.2 before moving on!");
      return;
  }


  C3_checked = document.querySelectorAll('input[name="C3"]:checked');
  if (C3_checked.length == 0) {
     window.alert("Please answer Question C.3 before moving on!");
     return;
  }
  C3_checked.forEach((types) => {
    C3_answer.push(types.value);
  });
  if(C3_answer.includes("Others")){
    C3_others = document.getElementById('C3-Specify-Others').value;
     if (C3_others == ""){
        window.alert("Please specify your answer to Question C.3 with high quality because you selected the \"Others\" option");
        return;
     }
  } 


  C4_checked = document.querySelectorAll('input[name="C4"]:checked');
  if (C4_checked.length == 0) {
     window.alert("Please answer Question C.4 before moving on!");
     return;
  }
  C4_checked.forEach((types) => {
    C4_answer.push(types.value);
  });
  if(C4_answer.includes("Others")){
    C4_others = document.getElementById('C4-Specify-Others').value;
     if (C4_others == ""){
        window.alert("Please specify your answer to Question C.4 with high quality because you selected the \"Others\" option");
        return;
     }
  } 

  C5_checked = document.querySelectorAll('input[name="C5"]:checked');
  if (C5_checked.length == 0) {
     window.alert("Please answer Question C.5 before moving on!");
     return;
  }
  C5_checked.forEach((types) => {
    C5_answer.push(types.value);
  });
  if(C5_answer.includes("Others")){
    C5_others = document.getElementById('C5-Specify-Others').value;
     if (C5_others == ""){
        window.alert("Please specify your answer to Question C.5 with high quality because you selected the \"Others\" option");
        return;
     }
  } 

  C6_checked = document.querySelectorAll('input[name="C6"]:checked');
  if (C6_checked.length == 0) {
     window.alert("Please answer Question C.6 before moving on!");
     return;
  }
  C6_checked.forEach((types) => {
    C6_answer.push(types.value);
  });
  if(C6_answer.includes("Others")){
    C6_others = document.getElementById('C6-Specify-Others').value;
     if (C6_others == ""){
        window.alert("Please specify your answer to Question C.6 with high quality because you selected the \"Others\" option");
        return;
     }
  } 

  C7_checked = document.querySelectorAll('input[name="C7"]:checked');
  if (C7_checked.length == 0) {
     window.alert("Please answer Question C.7 before moving on!");
     return;
  }
  C7_checked.forEach((types) => {
    C7_answer.push(types.value);
  });
  if(C7_answer.includes("Others")){
    C7_others = document.getElementById('C7-Specify-Others').value;
     if (C7_others == ""){
        window.alert("Please specify your answer to Question C.7 with high quality because you selected the \"Others\" option.");
        return;
     }
  } 


  try {
    C8_answer = document.querySelector('input[name="C8"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.8 before moving on!");
      return;
  }

  try {
    C9_answer = document.querySelector('input[name="C9"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.9 before moving on!");
      return;
  }


  try {
    C10_answer = document.querySelector('input[name="C10"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.10 before moving on!");
      return;
  }

  try {
    C11_answer = document.querySelector('input[name="C11"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.11 before moving on!");
      return;
  }

  try {
    C12_answer = document.querySelector('input[name="C12"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.12 before moving on!");
      return;
  }

  C12_answer_open = document.getElementById('C12-open-question').value;
  if (countWords(C12_answer_open) < 15){
     window.alert("Please explain your answer to Question C.12 with at least 15 words and with high quality before moving on!");
     return;
  } 

  try {
    C13_answer = document.querySelector('input[name="C13"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question C.13 before moving on!");
      return;
  } 

  C13_answer_open = document.getElementById('C13-open-question').value;
  if (countWords(C13_answer_open) < 15){
     window.alert("Please explain your answer to Question C.13 with at least 15 words and with high quality before moving on!");
     return;
  } 

  localStorage.setItem('PP-C1', C1_answer);
  localStorage.setItem('PP-C2', C2_answer);

  localStorage.setItem('PP-C3', JSON.stringify(C3_answer));
  if (C3_answer.includes("Others")){
     localStorage.setItem('PP-C3_other', C3_others);
  }
  localStorage.setItem('PP-C4', JSON.stringify(C4_answer));
  if (C4_answer.includes("Others")){
     localStorage.setItem('PP-C4_other', C4_others);
  }
  localStorage.setItem('PP-C5', JSON.stringify(C5_answer));
  if (C5_answer.includes("Others")){
     localStorage.setItem('PP-C5_other', C5_others);
  }
  localStorage.setItem('PP-C6', JSON.stringify(C6_answer));
  if (C6_answer.includes("Others")){
     localStorage.setItem('PP-C6_other', C6_others);
  }
  localStorage.setItem('PP-C7', JSON.stringify(C7_answer));
  if (C7_answer.includes("Others")){
     localStorage.setItem('PP-C7_other', C7_others);
  }



  localStorage.setItem('PP-C8', C8_answer);
  localStorage.setItem('PP-C9', C9_answer);
  localStorage.setItem('PP-C10', C10_answer);
  localStorage.setItem('PP-C11', C11_answer);
  localStorage.setItem('PP-C12', C12_answer);
  localStorage.setItem('PP-C12-open-question', C12_answer_open);
  localStorage.setItem('PP-C13', C13_answer);
  localStorage.setItem('PP-C13-open-question', C13_answer_open);

  nextChannel()
}