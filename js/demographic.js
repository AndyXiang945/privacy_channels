function toServer(){

    $.ajax({
        url: "../php/db.php",
        type: "POST",
        async: false,
        data: {
                //ID and time
                ProlificID: localStorage.getItem("ProlificID"),
                assignedApp: localStorage.getItem("assigned_app"), 
                channelOrder: localStorage.getItem("channelOrder"),
                surveyBegin: localStorage.getItem("surveyBegin"),
                surveyEnd: localStorage.getItem("surveyEnd"),
                surveyCode: localStorage.getItem("surveyCode"), 
                scroll_ds:  localStorage.getItem("scroll_ds"), 
                scroll_pm:  localStorage.getItem("scroll_pm"), 
                scroll_pp:  localStorage.getItem("scroll_pp"), 

                //Questions A
                A1: localStorage.getItem('A1'),
                A1_other: localStorage.getItem('A1_other'),
                A2: localStorage.getItem('A2'),
                A3: localStorage.getItem('A3'),
                A4: localStorage.getItem('A4'),
                A5: localStorage.getItem('A5'),

                //Questions B
                B1: localStorage.getItem('B1'),
                B2: localStorage.getItem('B2'),
                B3: localStorage.getItem('B3'),
                B4: localStorage.getItem('B4'),
                B5: localStorage.getItem('B5'),
                B6: localStorage.getItem('B6'),
                B7: localStorage.getItem('B7'),
                B7_answer_open: localStorage.getItem('B7-open-question'),

                //Questions C -Data Safety
                DS_C1: localStorage.getItem('DS-C1'),
                DS_C2: localStorage.getItem('DS-C2'),
                DS_C3:  localStorage.getItem('DS-C3'),
                DS_C3_other: localStorage.getItem('DS-C3_other'),
                DS_C4: localStorage.getItem('DS-C4'),
                DS_C4_other: localStorage.getItem('DS-C4_other'),               
                DS_C5: localStorage.getItem('DS-C5'),
                DS_C5_other: localStorage.getItem('DS-C5_other'),
                DS_C6: localStorage.getItem('DS-C6'),
                DS_C6_other: localStorage.getItem('DS-C6_other'),
                DS_C7: localStorage.getItem('DS-C7'),
                DS_C7_other: localStorage.getItem('DS-C7_other'),
                DS_C8: localStorage.getItem('DS-C8'),
                DS_C9: localStorage.getItem('DS-C9'),
                DS_C10: localStorage.getItem('DS-C10'),
                DS_C11: localStorage.getItem('DS-C11'),
                DS_C12: localStorage.getItem('DS-C12'),
                DS_C12_answer_open: localStorage.getItem('DS-C12-open-question'),
                DS_C13: localStorage.getItem('DS-C13'),
                DS_C13_answer_open: localStorage.getItem('DS-C13-open-question'),

                //Questions C - Privacy Policy
                PP_C1: localStorage.getItem('PP-C1'),
                PP_C2: localStorage.getItem('PP-C2'),
                PP_C3:  localStorage.getItem('PP-C3'),
                PP_C3_other: localStorage.getItem('PP-C3_other'),
                PP_C4: localStorage.getItem('PP-C4'),
                PP_C4_other: localStorage.getItem('PP-C4_other'),               
                PP_C5: localStorage.getItem('PP-C5'),
                PP_C5_other: localStorage.getItem('PP-C5_other'),
                PP_C6: localStorage.getItem('PP-C6'),
                PP_C6_other: localStorage.getItem('PP-C6_other'),
                PP_C7: localStorage.getItem('PP-C7'),
                PP_C7_other: localStorage.getItem('PP-C7_other'),
                PP_C8: localStorage.getItem('PP-C8'),
                PP_C9: localStorage.getItem('PP-C9'),
                PP_C10: localStorage.getItem('PP-C10'),
                PP_C11: localStorage.getItem('PP-C11'),
                PP_C12: localStorage.getItem('PP-C12'),
                PP_C12_answer_open: localStorage.getItem('PP-C12-open-question'),
                PP_C13: localStorage.getItem('PP-C13'),
                PP_C13_answer_open: localStorage.getItem('PP-C13-open-question'),

                //Questions C -Permission
                PM_C1: localStorage.getItem('PM-C1'),
                PM_C2: localStorage.getItem('PM-C2'),
                PM_C3:  localStorage.getItem('PM-C3'),
                PM_C3_other: localStorage.getItem('PM-C3_other'),
                PM_C4: localStorage.getItem('PM-C4'),
                PM_C4_other: localStorage.getItem('PM-C4_other'),               
                PM_C5: localStorage.getItem('PM-C5'),
                PM_C5_other: localStorage.getItem('PM-C5_other'),
                PM_C6: localStorage.getItem('PM-C6'),
                PM_C6_other: localStorage.getItem('PM-C6_other'),
                PM_C7: localStorage.getItem('PM-C7'),
                PM_C7_other: localStorage.getItem('PM-C7_other'),
                PM_C8: localStorage.getItem('PM-C8'),
                PM_C9: localStorage.getItem('PM-C9'),
                PM_C10: localStorage.getItem('PM-C10'),
                PM_C11: localStorage.getItem('PM-C11'),
                PM_C12: localStorage.getItem('PM-C12'),
                PM_C12_answer_open: localStorage.getItem('PM-C12-open-question'),
                PM_C13: localStorage.getItem('PM-C13'),
                PM_C13_answer_open: localStorage.getItem('PM-C13-open-question'),

                //Questions D
                D1: localStorage.getItem('D1'),
                D1_answer_open: localStorage.getItem('D1-open-question'),
                D2: localStorage.getItem('D2'),
                D2_answer_open: localStorage.getItem('D2-open-question'),
                D3: localStorage.getItem('D3'),
                D3_answer_open: localStorage.getItem('D3-open-question'),
                D4: localStorage.getItem('D4'),
                D4_answer_open: localStorage.getItem('D4-open-question'),
                D5: localStorage.getItem('D5'),
                D5_other: localStorage.getItem('D5_other'),
                D6_answer_open: localStorage.getItem('D6-open-question'),

                //Questions E
                E1: localStorage.getItem('E1'),
                E1_other: localStorage.getItem('E1_other'),
                E2: localStorage.getItem('E2'),
                E3: localStorage.getItem('E3'),
                E3_other: localStorage.getItem('E3_other'),
                E4: localStorage.getItem('E4')
            }, //Do for all variables

        success: function(data){ // when successfully sent data and returned
            // do something with the returned data
            console.log(data);
        },
        error: function(data){
            console.log(data);
            localStorage.setItem('surveyCode', 'Failed to upload responses to server');
        }

    });

    location.replace("../html/end.html");

}

function submit(){
    var E1_answer;
    var E1_others;
    var E2_answer;
    var E3_answer;
    var E3_others;
    var E4_answer_open;

    try {
        E1_answer = document.querySelector('input[name="E1"]:checked').value;
    } catch(err) {
        window.alert("Please answer Question E.1 before moving on!");
        return;
    }

    if (E1_answer == 'Other'){
        E1_others = document.getElementById('E1-Specify-Others').value;
        if (E1_others == ""){
            window.alert("Please specify your answer to Question E.1 with high quality because you selected the \"Others\" option");
            return;
        }
    }

    try {
        E2_answer = document.querySelector('input[name="E2"]:checked').value;
    } catch(err) {
        window.alert("Please answer Question E.2 before moving on!");
        return;
    }


    try {
        E3_answer = document.querySelector('input[name="E3"]:checked').value;
    } catch(err) {
        window.alert("Please answer Question E.3 before moving on!");
        return;
    }

    if (E3_answer == 'Other'){
        E3_others = document.getElementById('E3-Specify-Others').value;
        if (E3_others == ""){
            window.alert("Please specify your answer to Question E.3 with high quality because you selected the \"Others\" option");
            return;
        }
    }

    E4_answer_open = document.getElementById('E4-open-question').value;
    if (E4_answer_open == ""){
        window.alert("Please answer Question E.4 with high quality responses before moving on!");
        return;
    }

    localStorage.setItem('E1', E1_answer);
    if (E1_answer == 'Other'){
        localStorage.setItem('E1_other', E1_others);
    }
    localStorage.setItem('E2', E2_answer);

    localStorage.setItem('E3', E3_answer);
    if (E3_answer == 'Other'){
        localStorage.setItem('E3_other', E3_others);
    }
    localStorage.setItem('E4', E4_answer_open);


    localStorage.setItem('surveyEnd', Date.now());
    
    surveyCode = "xxxx";
    localStorage.setItem('surveyCode', surveyCode);

    toServer()
}

function wordCount(QuestionID){
    currentInput = document.getElementById(QuestionID + '-open-question').value;
    sink = document.getElementById(QuestionID + '-count');
    sink.innerHTML = 'Word Count: ' + countWords(currentInput);
}