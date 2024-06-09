function AllData(){

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let Email = document.getElementById('Email').value;
    let MyPass = document.getElementById('passWord').value;

    let chosenCourse = document.getElementsByName('course').value;

    let Age = document.getElementById('age').value;
    let Address = document.getElementById('address').value;
    let PhoneNum = document.getElementById('phoneNum').value;

    let isBenefi = document.getElementById('benefit').value;

    let bio = document.getElementById('bio').value;





    window.alert("Full Name: " + firstName + " " + lastName +"\n\nEmail: " + Email + "\n\nPassword: " + MyPass + "\n\nCourse: " + chosenCourse +"\n\nAge: " + Age +"\n\nAddress: " + Address + "\n\nPhone number: " + PhoneNum + "\n\nBeneficiaries? "+isBenefi+"\n\n\nBio:\n" +bio);

}