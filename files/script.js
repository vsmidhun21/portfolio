var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


function send(){
    const form = document.getElementById("form");
    let nam = document.forms["form"]["name"].value;
    let mail = document.forms["form"]["mail"].value;
    let sub = document.forms["form"]["sub"].value;
    let msg = document.forms["form"]["msg"].value;
    console.log(nam);
}