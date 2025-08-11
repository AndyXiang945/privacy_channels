

function assignApp() {
   $.ajax({
      url: "../php/assignApp.php",
      type: "GET",
      success: function(response){ // when successfully sent data and returned
        console.log('assigned app: ' + response);
        localStorage.setItem('assigned_app', response);
        if (response == 'USA TODAY'){
         response = 'usa_today';
        }
        location.replace('../html/apps/' + response.toLowerCase() + '/apps.html');
      },
      error: function (request, status, error) {
         alert('Something went wrong when assign an app');
      }
    })

}

function submit(){
   var A1_answer_set = [];
   var A1_other_data_types;
   var A2_answer;
   var A3_answer;
   var A4_answer;
   var A5_answer;

   A1_sensitive_data_types = document.querySelectorAll('input[name="A1"]:checked');
   if (A1_sensitive_data_types.length == 0) {
      window.alert("Please answer Question A.1 before moving on!");
      return;
   }
   
   A1_sensitive_data_types.forEach((data_types) => {
      A1_answer_set.push(data_types.value);
   });

   if(A1_answer_set.includes("Others")){
      A1_other_data_types = document.getElementById('A1-Specify-Others').value;
      if (A1_other_data_types == ""){
         window.alert("Please specify your answer to Question A.1 with high quality because you selected the \"Others\" option");
         return;
      }
   } 

   try {
      A2_answer = document.querySelector('input[name="A2"]:checked').value;
   } catch(err) {
      window.alert("Please answer Question A.2 before moving on!");
      return;
   }

   try {
      A3_answer = document.querySelector('input[name="A3"]:checked').value;
   } catch(err) {
      window.alert("Please answer Question A.3 before moving on!");
      return;
   }

   try {
      A4_answer = document.querySelector('input[name="A4"]:checked').value;
   } catch(err) {
      window.alert("Please answer Question A.4 before moving on!");
      return;
   }

   try {
      A5_answer = document.querySelector('input[name="A5"]:checked').value;
   } catch(err) {
      window.alert("Please answer Question A.5 before moving on!");
      return;
   }

   localStorage.setItem('A1', JSON.stringify(A1_answer_set));
   if (A1_answer_set.includes("Others")){
      localStorage.setItem('A1_other', A1_other_data_types);
   }
   localStorage.setItem('A2', A2_answer);
   localStorage.setItem('A3', A3_answer);
   localStorage.setItem('A4', A4_answer);
   localStorage.setItem('A5', A5_answer);
   assignApp()
}