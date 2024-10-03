const addAvtar = document.querySelector('.add-avatar')
const modal = document.getElementById("nameModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const closeBtn = document.querySelector(".close")
const input = document.getElementById('nameInput')
const avtarContainer = document.querySelector('.avatar-container')

const lightColors = ['#FFC300', '#DAF7A6', '#F7DC6F', '#AED6F1', '#ABEBC6'];
const darkColors = ['#581845', '#1F618D', '#196F3D', '#C70039', '#34495E'];

let nameInputs = localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : []

function OpenModal () {
   modal.style.display = 'block'
}

function CloseModal () {
   modal.style.display = 'none'
   input.value = ''
}


addAvtar.addEventListener('click', OpenModal)

cancelBtn.addEventListener('click', CloseModal)

closeBtn.addEventListener('click', CloseModal)

confirmBtn.addEventListener('click', ()=>{
   const nameInput = input.value.trim();
   if(nameInput) {
       createAvatar(nameInput)
       CloseModal()
    }
})

function createAvatar(name) {

    saveNameToLocalStorage(name)
     displayAvatar();
}
// 
function displayAvatar() {

    avtarContainer.innerHTML = ''
    console.log("Array", nameInputs, avtarContainer)
    
    if (nameInputs.length === 0) {
        return;
    }
    
    nameInputs.forEach((name, index) => {
        const avatar = document.createElement('div')
        avatar.classList.add("avatar");
        avatar.textContent = name.charAt(0).toUpperCase()
        const isLightBackground = Math.random() < 0.5;
     
        let randomColor;
        if (isLightBackground) {
            randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
            avatar.style.color = "#000000";
        } else {
            randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
            avatar.style.color = "#FFFFFF";
        }
        
        avatar.style.backgroundColor = randomColor;
     
        const closeIcon = document.createElement('i');
        closeIcon.classList.add("close-icon");
        closeIcon.classList.add('fa-solid')
        closeIcon.classList.add('fa-x');
        avatar.appendChild(closeIcon)
        avtarContainer.append(avatar)
        closeIcon.addEventListener('click', () => {
            removeNameFromLocalStorage(index);
        });
        
        
        console.log("Conatiner", avtarContainer)
    });

}


window.onclick = function(event) {
   if (event.target === modal) {
     CloseModal();
   }
 }

 function saveNameToLocalStorage(name) {
   if (!nameInputs.includes(name)) {
       nameInputs.push(name);
       localStorage.setItem("nameInputs", JSON.stringify(nameInputs));
      console.log("HII")
   }
}

function removeNameFromLocalStorage(index) {
    nameInputs.splice(index, 1)
   localStorage.setItem("nameInputs", JSON.stringify(nameInputs));
   displayAvatar()
}