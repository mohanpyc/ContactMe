let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let infoDivs=document.querySelectorAll(".contactInfo");
    btn.classList.add("btnRounded");
    btn.textContent="^";
    infoDivs.forEach((i,index)=>{
        setTimeout( ()=>{i.classList.add("displayInfo")},index*350)
        console.log(i);
    })

})