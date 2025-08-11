function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function(str){return str!="";}).length;
  }


function wordCount(QuestionID){
      currentInput = document.getElementById(QuestionID + '-open-question').value;
      sink = document.getElementById(QuestionID + '-count');
      sink.innerHTML = 'Word Count: ' + countWords(currentInput);
}


function submit(){
    var D1_answer = [];
    var D1_answer_open;

    var D2_answer = [];
    var D2_answer_open;

    var D3_answer = [];
    var D3_answer_open;

    var D4_answer = [];
    var D4_answer_open;

    var D5_answer = [];
    var D5_others;

    var D6_answer_open;

    try {
        D1_Data_Safety_ranking = document.querySelector('input[name="D1-Data_Safety-ranking"]:checked').value;
        D1_Privacy_Policy_ranking = document.querySelector('input[name="D1-Privacy_Policy-ranking"]:checked').value;
        D1_Permission_Manifest_ranking = document.querySelector('input[name="D1-Permission_Manifest-ranking"]:checked').value;
        D1_answer = [D1_Data_Safety_ranking, D1_Privacy_Policy_ranking, D1_Permission_Manifest_ranking]
      } catch(err) {
          window.alert("Please answer Question D.1 before moving on!");
          return;
      }
    D1_answer_open = document.getElementById('D1-open-question').value;
    if (countWords(D1_answer_open) < 15){
        window.alert("Please explain your answer to Question D.1 with at least 15 words and with high quality before moving on!");
        return;
    }

    try {
        D2_Data_Safety_ranking = document.querySelector('input[name="D2-Data_Safety-ranking"]:checked').value;
        D2_Privacy_Policy_ranking = document.querySelector('input[name="D2-Privacy_Policy-ranking"]:checked').value;
        D2_Permission_Manifest_ranking = document.querySelector('input[name="D2-Permission_Manifest-ranking"]:checked').value;
        D2_answer = [D2_Data_Safety_ranking, D2_Privacy_Policy_ranking, D2_Permission_Manifest_ranking]
      } catch(err) {
          window.alert("Please answer Question D.2 before moving on!");
          return;
      }
    D2_answer_open = document.getElementById('D2-open-question').value;
    if ((countWords(D2_answer_open) < 15)){
        window.alert("Please explain your answer to Question D.2 with at least 15 words and with high quality before moving on!");
        return;
    }
    
    try {
        D3_Data_Safety_ranking = document.querySelector('input[name="D3-Data_Safety-ranking"]:checked').value;
        D3_Privacy_Policy_ranking = document.querySelector('input[name="D3-Privacy_Policy-ranking"]:checked').value;
        D3_Permission_Manifest_ranking = document.querySelector('input[name="D3-Permission_Manifest-ranking"]:checked').value;
        D3_answer = [D3_Data_Safety_ranking, D3_Privacy_Policy_ranking, D3_Permission_Manifest_ranking]
      } catch(err) {
          window.alert("Please answer Question D.3 before moving on!");
          return;
      }
    D3_answer_open = document.getElementById('D3-open-question').value;
    if ((countWords(D3_answer_open) < 15)){
        window.alert("Please explain your answer to Question D.3 with at least 15 words and with high quality before moving on!");
        return;
    }

    try {
        D4_Data_Safety_ranking = document.querySelector('input[name="D4-Data_Safety-ranking"]:checked').value;
        D4_Privacy_Policy_ranking = document.querySelector('input[name="D4-Privacy_Policy-ranking"]:checked').value;
        D4_Permission_Manifest_ranking = document.querySelector('input[name="D4-Permission_Manifest-ranking"]:checked').value;
        D4_answer = [D4_Data_Safety_ranking, D4_Privacy_Policy_ranking, D4_Permission_Manifest_ranking]
      } catch(err) {
          window.alert("Please answer Question D.4 before moving on!");
          return;
      }
    D4_answer_open = document.getElementById('D4-open-question').value;
    if ((countWords(D4_answer_open) < 15)){
        window.alert("Please explain your answer to Question D.4 with at least 15 words and with high quality before moving on!");
        return;
    }


    D5_checked = document.querySelectorAll('input[name="D5"]:checked');
    if (D5_checked.length == 0) {
       window.alert("Please answer Question D.5 before moving on!");
       return;
    }
    D5_checked.forEach((types) => {
        D5_answer.push(types.value);
    });
    if(D5_answer.includes("Others")){
      D5_others = document.getElementById('D5-Specify-Others').value;
       if (D5_others == ""){
          window.alert("Please specify your answer to Question D.5 with high quality because you selected the \"Others\" option");
          return;
       }
    } 

    D6_answer_open = document.getElementById('D6-open-question').value;


    localStorage.setItem('D1', JSON.stringify(D1_answer));
    localStorage.setItem('D1-open-question', D1_answer_open);

    localStorage.setItem('D2', JSON.stringify(D2_answer));
    localStorage.setItem('D2-open-question', D2_answer_open);

    localStorage.setItem('D3', JSON.stringify(D3_answer));
    localStorage.setItem('D3-open-question', D3_answer_open);

    localStorage.setItem('D4', JSON.stringify(D4_answer));
    localStorage.setItem('D4-open-question', D4_answer_open);

    localStorage.setItem('D5', JSON.stringify(D5_answer));
    if (D5_answer.includes("Others")){
        localStorage.setItem('D5_other', D5_others);
    }
    
    if (D6_answer_open != ""){
        localStorage.setItem('D6-open-question', D6_answer_open);
    }
    
    location.replace('../html/demographic.html');
}