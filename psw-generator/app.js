const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

let firstRectangle = document.getElementById("firstPassword")
let secondRectangle = document.getElementById("secondPassword")
let btnPassword = document.getElementById("btn-password")

function generatePassword() {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

btnPassword.addEventListener('click', () => {
    firstRectangle.textContent = generatePassword()
    secondRectangle.textContent = generatePassword()
})


