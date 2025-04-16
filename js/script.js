// let nama = prompt("what is your name?", " ");
// document.getElementById("user-wlc").innerHTML = nama;

// validasi form
function ValidateForm(){
    const name = document.forms["contact-form"]["namaku"].value;
    const birthDate = document.forms["contact-form"]["tanggalku"].value;
    const gender = document.forms["contact-form"]["gender"].value;
    const messages = document.forms["contact-form"]["messages"].value;
// error jika kosong
    if (name == " " || birthDate == " " || gender == " " || messages == " "){
        alert("tidak boleh kosong");
        return false;
    }

    setSenderUI(name,birthDate,gender,messages);

    return false;
}
// mengirimkan ke senderUI
function setSenderUI(name, birthDate, gender, messages) {

    // menampilkan waktu real
    var dt = new Date ();
    document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString();
    //menampilkan apa yang kita isi di form
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}