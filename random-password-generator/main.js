const passwordInput = document.getElementById("password_input");
const copyIcon = document.getElementById("copy");
const btn = document.getElementById("btn");
const chars =
  "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

btn.addEventListener("click", generatePassword);
let passwordGenerated = false;

function generatePassword() {
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  console.log(password);
  passwordInput.value = password;
}

const copyPassword = (password) => {
  const passwordToBeCopied = passwordInput.value;
  if (passwordToBeCopied) {
    alert(`${passwordToBeCopied} copied!`);
    navigator.clipboard.writeText(passwordToBeCopied);
  }
};
copyIcon.addEventListener("click", copyPassword);
