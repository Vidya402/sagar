var submitBtn = document.getElementById("submitBtn");

// 1)getting the values
// 2)validating the Form
// 3)submit


submitBtn.addEventListener('click',function(e){
    e.preventDefault();

    let userName = document.getElementById("username").value;
    let contactNumber = document.getElementById("contactno").value;
    let emailName = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let confirmPassword = document.getElementById("confirmpass").value;
   
    if(userName == ""){
        document.getElementById('usernameerr').innerHTML = "**UserName should not be Empty";
        document.getElementById('usernameerr').style.color = "red";
    }

    if((userName.length<3) || (userName.length>20)){
        document.getElementById('usernameerr').innerHTML = "**UserName should not be lessthan 3char and morethan 20";
        document.getElementById('usernameerr').style.color = "red";
    }

    if(!isNaN(userName)){
        document.getElementById('usernameerr').innerHTML = "**username should not be a number";
        document.getElementById('usernameerr').style.color = "red";
    }

    //contact number

    if(contactNumber == ""){
        document.getElementById('contacterr').innerHTML = "**contact should not be Empty";
        document.getElementById('contacterr').style.color = "red";
    }

    if(contactNumber.length<10){    
        document.getElementById('contacterr').innerHTML = "**please enter a valid number";
        document.getElementById('contacterr').style.color = "red";
    }

    // EMAIL
    if(emailName == ""){
        document.getElementById('emailerr').innerHTML = "**email should not be Empty";
        document.getElementById('emailerr').style.color = "red";
    }

    // chaitanya@gmail.in

    if(emailName.indexOf('@')<=0){
        document.getElementById('emailerr').innerHTML = "**please enter a valid email";
        document.getElementById('emailerr').style.color = "red";
    }

    if((emailName.charAt(emailName.length-4)!='.') && (emailName.charAt(emailName.length-3)!='.')){
        document.getElementById('emailerr').innerHTML = "**please enter a valid email";
        document.getElementById('emailerr').style.color = "red";
    }

    //password
    if(password == ""){
        document.getElementById('passworderr').innerHTML = "**password should not be Empty";
        document.getElementById('passworderr').style.color = "red";
    }

    //confirm password
    if(confirmPassword == ""){
        document.getElementById('confirmerr').innerHTML = "**confirm password should not be Empty";
        document.getElementById('confirmerr').style.color = "red";
    }

    if(password != confirmPassword){
        document.getElementById('confirmerr').innerHTML = "**confirm password not matching with password";
        document.getElementById('confirmerr').style.color = "red";
    }
})