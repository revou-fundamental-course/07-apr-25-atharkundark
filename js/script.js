let nama = prompt("what is your name?", " ");
document.getElementById("user-wlc").innerHTML = nama;

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

// untuk banner slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("bannerku");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
},2000)