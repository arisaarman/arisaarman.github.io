const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const messageInput = document.getElementById("messageInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const numberValue = numberInput.value
    const messageValue = messageInput.value
    dataValidation(nameValue, emailValue, numberValue, messageValue)
})

function dataValidation(name, email, number, message) {
    if(name == "" || email == "" || number == "" || message == "") { 
        alert("Error")
    } else {
        alert("Success!")
    }
}

function updateUI(name) {
    const nameOutput = document.getElementById("nameOutput");
    nameInput.textContent = name
}

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 3000)
function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
} 


    


