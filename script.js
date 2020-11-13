let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    if(btn.value!="Click Meee"){
        let contact=document.querySelector('.contact');
        contact.classList.remove("contactBorder");
        let contactMe=document.querySelector(".contactMe");
        contactMe.classList.remove("contactMeTrans")
        btn.value="Click Meee";
        btn.className="btnTablet";
        let infoDivs=document.querySelectorAll(".contactInfo");
        infoDivs.forEach((i,index)=>{
            setTimeout( ()=>{i.className="contactInfo"},index*350)
        })

    }else{
        let contact=document.querySelector('.contact');
        contact.classList.add("contactBorder");
        let contactMe=document.querySelector(".contactMe");
        contactMe.classList.add("contactMeTrans")
        let infoDivs=document.querySelectorAll(".contactInfo");
        btn.classList.add("btnRounded");
        btn.value="^";
        infoDivs.forEach((i,index)=>{
            setTimeout( ()=>{i.classList.add("displayInfo")},index*350)
            console.log(i);
        })
    }



    

})