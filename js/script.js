let userName = prompt("Siapakah nama anda?", "");
document.getElementById("name").innerHTML = userName;

function validateForm() {
    let inputUsername = document.getElementById("input-username").value;
    let inputGender = document.querySelector('input[name="gender"]:checked');
    let message = document.querySelector('textarea[name="message"]').value;

    // Validate username
    if (inputUsername === "") {
        alert("Input anda kosong. Silakan masukkan username.");
        return;
    }

    // Validate gender
    if (!inputGender) {
        alert("Pilih jenis kelamin.");
        return;
    }

    // Validate message
    if (message === "") {
        alert("Pesan tidak boleh kosong.");
        return;
    }

    // Display the result
    document.getElementById("result").innerHTML = `Username: ${inputUsername}<br>Gender: ${inputGender.value}<br>Message: ${message}`;
    
    // Clear inputs after submission
    document.getElementById("input-username").value = "";
    document.querySelector('textarea[name="message"]').value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;

    console.log(`Username: ${inputUsername}, Gender: ${inputGender.value}, Message: ${message}`);
}



function showInitialSlide() {
    let listImage = document.getElementsByClassName("photo-banner");
    if (listImage.length > 0) {
        listImage[0].style.display = "block";
    }
}

let indexSlide = 0;

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName("photo-banner");

    if (n >= listImage.length) {
        indexSlide = 0;
    } else if (n < 0) {
        indexSlide = listImage.length - 1;
    }

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexSlide].style.display = "block";
}

setInterval(() => nextSlide(1), 2000);


showInitialSlide();
