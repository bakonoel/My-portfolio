const sections = document.querySelectorAll(".section");
const sectBtns =document.querySelectorAll(".controlls");
const sectBtn =document.querySelector(".control");
const allSelections =document.querySelector(".main-content");

function pageTransition(){

    for(let i =0;i<sectBtns.length;i++)
    sectBtn[i].addEventListener('click',function(){
        let currentBtn=document.querySelectorAll('.active-Btn');
        currentBtn[0].className=current[0].className.replace('active-btn',"");
        this.className  += 'active-btn'
    })
        
    }

    // section active class
    allSelections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id
        if(id){
         // remove selected from the other btn
           sectBtns.forEach((btn)  =>{
               btn.classList.remove('active')
           })
           e.target.classList.add('active')

        //    hide other sections
        sections.forEach((section) =>{
            section.classList.remove('active')
        })

        const element= document.getElementById(id)
        element.classList.add('active') 
        }
    })
 
        // TOGGLE THEME
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click',() =>{
        let element = document.body;
         element.classList.toggle('.light-mode')   
        })
            console.log(light-mode)
    pageTransition






// const sections = document.querySelectorAll('.section')
// const secbtns = document.querySelectorAll('.controlls')
// const sectbtn = document.querySelectorAll('.control')
// const allsections = document.querySelectorAll('.main-content')


// function pageTransitions(){
//     // button click active class
//     for(let i =0; i< secbtns.length; i++){
//         sectbtn[i].addEventListener('click', function() {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             thhis.className += 'active-btn';
//         })
//     }
//     // section active
//     allsections.addEventListener('click', [e] )
//     const id = e.target.dataset.id;
//     if(id){
//         // remove selected from the btn
//         sectBtns.forEach((btn) => {
//             btn.classlist.remove('active')
//         });
//         e.target.classlist.add('active')

//         // hide other sections
//         sections.forEach((section) => {
//             section.classList.remove('active')
//         })
        
//         const element = document.getElementById(id);
//         element.classLis.add('active');
        
//     }
// }
//     pageTransitions();
