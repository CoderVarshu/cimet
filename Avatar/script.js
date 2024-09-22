 const addAvtar = document.querySelector('.add-avatar')
 const modal = document.getElementById("nameModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const closeBtn = document.querySelector(".close")
const input = document.getElementById('nameInput')
const avtarContainer = document.querySelector('.avatar-container')

const lightColors = ['#FFC300', '#DAF7A6', '#F7DC6F', '#AED6F1', '#ABEBC6'];
const darkColors = ['#581845', '#1F618D', '#196F3D', '#C70039', '#34495E'];


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
        const FirstInput = nameInput.charAt(0).toUpperCase();
        createAvatar(FirstInput)
        CloseModal()
     }
})

function createAvatar(letter) {

    avtarContainer.innerHTML += ''
    const avatar = document.createElement('div')
    avatar.classList.add("avatar");
    avatar.textContent = letter
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
        avatar.remove();
    });
}


window.onclick = function(event) {
    if (event.target === modal) {
      CloseModal();
    }
  }
