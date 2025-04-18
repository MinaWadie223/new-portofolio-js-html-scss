const sections = document.querySelectorAll('.section')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')
const ToggleBtn = document.querySelector('.toggle-btn')
const Body = document.querySelector('.main-content')
let AddActiveBtnToBtn =  function (){
    ToggleBtn.addEventListener('click',()=>{
        ToggleBtn.classList.toggle('active-btn')
        Body.classList.toggle('dark-mode')
    })
    sectBtn.forEach((Btn)=>{
        Btn.addEventListener('click',()=>{
            sectBtn.forEach((BtnRem)=>{
                BtnRem.classList.remove('active-btn')
            })
            Btn.classList.add('active-btn')         
            sections.forEach((sect)=>{
                sect.classList.remove('active')
                if (sect.id == Btn.id){
                    sect.classList.add('active')
                }
            })
        })
    })
}
AddActiveBtnToBtn()