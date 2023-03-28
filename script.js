const modal=document.querySelector('.modal');
const overlay=document.querySelector(".overlay");
const openModal=document.querySelector('.btn');
const closeModal=document.querySelector(".btn-close");



//////////////////// removing hidden to make modal and overlay visible

openModal.addEventListener('click',function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    openModal.classList.add("blur");
});

////////////////////// adding hidden to make modal and overlay invisible

closeModal.addEventListener('click',function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    openModal.classList.remove("blur");

});


//////////////////////// ESC handler

document.addEventListener('keydown',function(ky){
    console.log(ky.key);
   if( ky.key==='Escape'){

    if(!modal.classList.contains('hidden')){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        openModal.classList.remove("blur");
        console.log("Esc pressed");
    }

   }

});

