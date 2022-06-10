//Gallery Page
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name");

                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }

}


//Newsletter
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("Product Interest").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("Birthday").value;


    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Your Product Interest";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 8) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(birthday) || birthday.length != 6) {
        text = "Please Follow The Birthday Format";
        error_message.innerHTML = text;
        return false;
    }
    alert("Thank you for signing up for the Sun and Moon Cafe weekly Newsletter! We have added the following information to our files regarding your interests!");
    return true;
}