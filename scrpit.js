let generateOTP = "";
function sendotp(){
    const email = document.getElementById("email").value;
    if(email === ""){
        alert("Please Enter an Email Address")
        return;
    }
    
generateOTP=Math.floor(100000+Math.random()*900000).toString();

document.getElementById("otp-section").style.display="block";
document.getElementById("showotp").textContent=generateOTP;
document.getElementById("message").textContent=""
}
function verifyOTP(){
 let userinput =   document.getElementById("otpnum").value;
    if (userinput===""){
        alert("Please enter 6 Digit OTP")
        return;
    }
    if(userinput===generateOTP){
        document.getElementById("message").textContent="✅ OTP Verified Successfully!"
        document.getElementById("message").style.color="green"
    }
    else{
        document.getElementById("message").textContent="❌ Incorrect OTP. Try again!"
        document.getElementById("message").style.color="red"
    }
}
