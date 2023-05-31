let flag = 0 ; 

function slideShow(num){
    let slide = document.getElementsByClassName("slide"); 
    for( let i =0 ; i < slide.length ; i++){
        slide[i].style.display = "none" ; 
    }
    slide[num].style.display = "block"; 
}

let arrowleft = document.querySelector(".prev");
console.log(arrowleft);

let arrowRight = document.querySelector(".next");
console.log(arrowRight);

arrowleft.addEventListener("click" , e => {
    if( flag > 0){
        flag = flag -1 ; 
        slideShow(flag); 
    }else{
        flag = 3;
        slideShow(flag); 
    }
})

arrowRight.addEventListener("click" , e => {
    if(flag < 3){
        flag = flag + 1 ; 
        slideShow(flag);
    }else {
        flag = 0 ; 
        slideShow(flag); 
    }
})
  