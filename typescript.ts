var UserName = document.getElementById("UserNameInput");
var UPassword = document.getElementById("Password");
var MakeAcc = document.getElementById("CreateAcc");



function CreateButton() {
    let UserNameCookie =  document.cookie = "username="+UserName;
    let PasswordCookie =  document.cookie = "password="+UPassword;
    return UserNameCookie

    
};