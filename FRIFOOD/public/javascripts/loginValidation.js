function validateEmail(email) {
    //var re = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
    var re = /^[a-zA-Z0-9@\^&*)(+=._-]*$/;
    return re.test(email);
}

document.getElementById('signIn').addEventListener("click", function(event){
    event.preventDefault()
});

function validate() {

    var email = $("#email").val();
    var passw = $("#passwd").val();
    let form = document.getElementById('form');
    let submit = document.getElementById('signIn');

    if (email === "") {
        alert("Vnesite email");
        return;
    } else if (passw === "") {
        alert("Vnesite geslo");
        return;
    }

    // if (validateEmail(email) && email !== "") {
    //     console.log("OK");
    //     form.action = 'http://localhost:3000/login/check';
    //     form.method = 'POST';
    //     form.submit();
    // } else {
    //     console.log("NOT OK");
    // }

    return location.href = "/";
}

//$("#signIn").on("click", validate);