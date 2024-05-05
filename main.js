let navmenu=document.querySelector("nav ul");
let loginform=document.querySelector(".loginform");
    document.querySelector("#menuicon").onclick=()=>{
    navmenu.classList.toggle("active");
    loginform.classList.remove("activated")
    }
    document.querySelector("#crossmark").onclick=()=>{
    navmenu.classList.remove("active")
    }
    document.querySelector("#loginimg").onclick=()=>{
    loginform.classList.toggle("activated");
    navmenu.classList.remove("active");
    }
const text=document.querySelector(".sec-text");
    const textload=()=>{
        setTimeout(()=>{
            text.textContent="programmer"
        },0)
        setTimeout(()=>{
            text.textContent="Front-end dev.."
        },4000)
        setTimeout(()=>{
            text.textContent="React.js dev.."
        },8000)
        setTimeout(()=>{
            text.textContent="Designer"
        },12000)
    }
    textload();
    setInterval(textload,16000);
    var activeContext=document.getElementsByClassName("bio");
    var activeBio=document.getElementsByClassName("context");
    
     function opentab(tabname){
            for(tabs of activeContext){
                    tabs.classList.remove("active-bio");
            }
            for(table of activeBio){
                    table.classList.remove("activeContext");
            }
            event.currentTarget.classList.add("active-bio");
            document.getElementById(tabname).classList.add("activeContext");
    
     }


     const accortion =  document.querySelectorAll(".Accortional");
     accortion.forEach((item,index)=>{
     let header=item.querySelector("header");
     header.addEventListener("click",()=>{
     item.classList.toggle("open");
     let contet=item.querySelector(".AccorContent");
     if(item.classList.contains("open")){
         contet.style.height=`${contet.scrollHeight}px`
          item.querySelector("i").classList.replace("fa-plus","fa-minus")
     }else{
         contet.style.height=`0px`;
         item.querySelector("i").classList.replace("fa-minus","fa-plus")
     }
     })
     })
     var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      const scriptURL = 'https://script.google.com/macros/s/AKfycbxhVlqTAxSJx8VTcdjbbcGdP_6_6P9IXuKYHhI988wR6O2asrQZn5pXL2OE-cF-mcD3/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg=document.getElementById("msg");
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => 
        msg.innerHTML="msg sent succesfully",
        setTimeout(function(){
          msg.innerHTML="";
        },8000),
        form.reset()
        )
          .catch(error => console.error('Error!', error.message))
      })