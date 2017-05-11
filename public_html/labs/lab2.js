if (userName())
  {
    alert("Username is Valid. \n Please enter password. ")
    if (passWord())
      alert("Congratulations! You have entered valid username and password!")
  }
 
function userName()
{
  var uname;
  uname = prompt("Enter username");
  while (uname.length <1 || uname.length >15)
    {
      uname = prompt("Username cannot be empty AND cannot exeed 15 characters. \n Please reinput.");
    }
   
  while (uname.search(/[^a-zA-Z0-9-_.]/) != -1)
    {
      uname = prompt("Username can only include alphabet letters (lower case or upper case), digit numbers, hyphen (-), underscore (_), and period punctuation (.) \n"+
                     " Please reinput.");
    }
      
  return true;
}
 
function passWord() 
{
  var pswd;
  pswd = prompt("Enter password");
  while (pswd.length <6 || pswd.length >10)
    {
      pswd = prompt("Password can consist of no less than 6 characters AND no more than 10 characters");
    }
   
  while (pswd.search(/[a-z]/) < 0 || pswd.search(/[A-Z]/) < 0 || pswd.search(/[0-9]/) < 0)
    {
      pswd = prompt("Password must include all of the following categories: alphabet lower case, upper case, digit numbers \n"+
                     " Please reinput.");
    }
  return true;
}