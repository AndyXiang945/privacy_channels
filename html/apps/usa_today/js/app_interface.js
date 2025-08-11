
function next(nextID){
  var nextInstruction = document.getElementById(nextID);
  nextInstruction.style.display = "block";
}


function gotoSurvey(){
    
    var SurveyInterface = document.getElementById("SurveyContainer");

    if (SurveyInterface.style.display === "block") {
      SurveyInterface.style.display = "none";
    } else {
      SurveyInterface.style.display = "block";
    }
}

function randomPickChannels(){

  var pick = Math.floor(Math.random() * 2);

  if (pick == 0){
    localStorage.setItem('channelOrder', ['data_safety', 'privacy_policy', 'permission']);
    location.replace("data_safety.html");
  } else {
    localStorage.setItem('channelOrder', ['permission', 'data_safety', 'privacy_policy']);
    location.replace("permission.html");
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
  var B1_answer;
  var B2_answer;
  var B3_answer;
  var B4_answer;
  var B5_answer;
  var B6_answer;
  var B7_answer;
  var B7_answer_open;

  try {
    B1_answer = document.querySelector('input[name="B1"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.1 before moving on!");
      return;
  }

  try {
    B2_answer = document.querySelector('input[name="B2"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.2 before moving on!");
      return;
  }

  try {
    B3_answer = document.querySelector('input[name="B3"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.3 before moving on!");
      return;
  }

  try {
    B4_answer = document.querySelector('input[name="B4"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.4 before moving on!");
      return;
  }

  try {
    B5_answer = document.querySelector('input[name="B5"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.5 before moving on!");
      return;
  }


  try {
    B6_answer = document.querySelector('input[name="B6"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.6 before moving on!");
      return;
  }

  try {
    B7_answer = document.querySelector('input[name="B7"]:checked').value;
  } catch(err) {
      window.alert("Please answer Question B.7 before moving on!");
      return;
  }
  B7_answer_open = document.getElementById('B7-open-question').value;
  if (countWords(B7_answer_open) < 15){
    window.alert("Please explain your answer to Question B.7 with at least 15 words and with high quality before moving on!");
    return;
  }

  localStorage.setItem('B1', B1_answer);
  localStorage.setItem('B2', B2_answer);
  localStorage.setItem('B3', B3_answer);
  localStorage.setItem('B4', B4_answer);
  localStorage.setItem('B5', B5_answer);
  localStorage.setItem('B6', B6_answer);
  localStorage.setItem('B7', B7_answer);
  localStorage.setItem('B7-open-question', B7_answer_open);

  randomPickChannels()
}


 