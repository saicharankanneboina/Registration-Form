document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let father = document.getElementById("father").value;
    let mother = document.getElementById("mother").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let photo = document.getElementById("photo").value;
    let signature = document.getElementById("signature").value;
    let qualification = document.getElementById("qualification").value;
    let college = document.getElementById("college").value;
    let year = document.getElementById("year").value;
    let percentage = document.getElementById("percentage").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    if(fname=="" || lname=="" || father=="" || mother=="" ||
       dob=="" || email=="" || password=="" || photo=="" ||
       signature=="" || qualification=="" || college=="" ||
       year=="" || percentage=="" || gender==null){

        alert("Please fill all the fields.");
        return;
    }
    if(phone.length != 10){
        alert("Phone number must contain 10 digits.");
        return;
    }
    alert("Registration Successful");
});