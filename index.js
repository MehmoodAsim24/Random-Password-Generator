const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl =  document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click",()=>{
    createPassword();

});

copyEl.addEventListener("click",()=>{
    copyPassword();
    if (input.value) {
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
    
        },2000);
    }
    
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum,randomNum + 1);
       

    }

    inputEl.value = password;
    alertContainerEl.innerText = password + " copied! ";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}

