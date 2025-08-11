function checkID() {
    let ProlificID = "";
  
    ProlificID = document.getElementById("ProlificID").value;
    if (ProlificID == ''){
      alert('You must enter the Prolific ID in order to continue.')
    } else {
      localStorage.setItem('ProlificID', ProlificID);
      $.ajax({
        url: "../php/checkID.php",
        type: "POST",
        data: { ProlificID: localStorage.getItem("ProlificID")},
        success: function(response){ 
          if (response == 'accept'){
            location.replace("../html/definitions.html")
          } else{
            alert("You have taken the study! Sorry, you cannot take this study more than once!");
          }
        },
        error: function (request, status, error) {
          alert('Something went wrong when checking your ID');
        }
      })
    }
  }
  