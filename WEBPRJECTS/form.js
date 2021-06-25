function animatedForm(){
    const arrows=document.querySelector(".fa-arrow-down")
    arrows.forEach(arrow=>{
        arrow.addEventListener("click",()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            
            //check for the validation
           if(input.type==="text" && validateUser(input)){
               console.log("Everything is okay!");
           }
        });
    });
    function validateUser(user){
        if(user.value.length<6){
            console.log("not enough characters");
            error("rgb(189,87,87");
        }
        else {
            error("rgb(87,189,130");
            return true;


        }
    }
}
animatedForm();