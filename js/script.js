let UserName = prompt("siapakah nama anda", " ");
document.getElementById("user-name").innerHTML = UserName


function validateform(){
    const name = document.forms["message-form"]["namaku"].value;
    const birthDate = document.forms["message-form"]["Tanggalku"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == " " || birthDate == " " || gender == " " || messages == " "){
        alert("tidak boleh kosong");
        return false;
    }

    setSenderUI(name,birthDate,gender,messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}