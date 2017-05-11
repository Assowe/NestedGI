function validForm(form1)
  {
	var first = document.getElementById("fname").value;
	var last = document.getElementById("lname").value;
	var pass = document.getElementById("pass").value;
	var repass = document.getElementById("repass").value;
	
	//First and Last name SECTION
    if(first == "" && last == "") {
      alert("Error: first and last name cannot be empty!");
      form.username.focus();
      return false;
    }
	var checkName = /^[a-zA-Z'-]+$/;
	if(!checkName.test(frist) && !checkName.test(last)){
		alert("Error: first and last name must contain only letters, apostrophe, hyphen and aleast 1 alphabetic character!");
		return false;
	}
	//PASSWORD SECTION
	var pTest = /[0-9]/;
      if(!pTest.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        document.getElementById("pass").focus();
        return false;
      }
	   pTest = /[a-z]/;
      if(!pTest.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        document.getElementById("pass").focus();
        return false;
      }
      pTest = /[A-Z]/;
      if(!pTest.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        document.getElementById("pass").focus();
        return false;
      }
	  if(pass.length < 8){
		  alert("Error: password must be al least 8 characters long");
		  document.getElementById("pass").focus();
		  return false;
	  }
	  if(pass != repass){
		  alert("Error: password must be identical");
		  document.getElementById("pass").focus();
		  document.getElementById("repass").focus();
		  return false;
	  }


  }
