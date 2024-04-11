
const password = document.querySelector('#newPassword')
const generateBtn = document.querySelector('.generate')

const copyIcon = document.querySelector('img')
console.log(copyIcon);

let newPassword = "";
function randomPassowrd(){
      const alphabet = ('qwertyuiopasdfghjklzxcvbnm-_@*&#$0123456789')
     
    //   let randomNumber = Math.round((Math.random()*10)+1);
      for (let i = 0; i < 8; i++) {
        newPassword += alphabet[Math.floor((Math.random()*43))]
        
      }
   password.innerHTML = newPassword 
   console.log(newPassword);
   return newPassword
}



 generateBtn.addEventListener('click' , () => {
   console.log("hi");
   randomPassowrd()
   newPassword =""
})

copyIcon.addEventListener('click', () => {
    if (password.innerHTML==="Password") {
         alert("Please generate the password")        
    }
    else{
        alert("Copied")
    }

})







// randomPassowrd()
// console.log(newPassword);
// password.innerHTML = newPassword