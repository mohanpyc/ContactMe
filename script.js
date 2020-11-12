let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    console.log(btn.value);
    if(btn.value!="Click Meee"){
        btn.value="Click Meee";
        btn.className="btnTablet";
        let infoDivs=document.querySelectorAll(".contactInfo");
        infoDivs.forEach((i,index)=>{
            setTimeout( ()=>{i.className="contactInfo"},index*350)
        })

    }else{
        let infoDivs=document.querySelectorAll(".contactInfo");
        btn.classList.add("btnRounded");
        btn.value="^";
        infoDivs.forEach((i,index)=>{
            setTimeout( ()=>{i.classList.add("displayInfo")},index*350)
            console.log(i);
        })
    }



    

})