let btn=document.querySelector("#btn");
let btnTxt=document.querySelector("#btnTxt");
let buttoni=document.querySelector(".fas");
let contact=document.querySelector('#contact');
let contactMe=document.querySelector("#contactMe");
let infoDivs=Array.from( document.querySelectorAll(".contactInfo"));

btn.addEventListener("click",()=>{
    console.log(contact,contactMe);
    btn.className = btn.className==="btnTablet"?"btnTablet btnRounded":"btnTablet"
    btnTxt.className = btnTxt.className==="btnTxt"? "btnTxt btnTxtranse":"Dummy"
    if(btnTxt.className==="Dummy"){
        setTimeout(()=>{btnTxt.className="btnTxt"},300)
    }
    buttoni.className = buttoni.className==="fas"?"fas fa-angle-up":"fas";

    contact.className=contact.className==="contact"?"contact contactBorder":"contact"
    
    contactMe.className=contactMe.className==="contactMe"?"contactMe contactMeTrans":"contactMe";
    console.log(contact,contactMe.className);

    console.log(infoDivs)
    infoDivs.forEach((i,index)=>{
        setTimeout( ()=>{
            console.log(i,i.className)
            i.className=i.className==="contactInfo"?"contactInfo displayInfo":"contactInfo"
            console.log(i,i.className)
            },index*350)
        })
    infoDivs.reverse();
    console.log(infoDivs)
    
})




// let btn=document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//     if(btn.value!="Click Meee"){
//         let contact=document.querySelector('.contact');
//         contact.classList.remove("contactBorder");
//         let contactMe=document.querySelector(".contactMe");
//         contactMe.classList.remove("contactMeTrans")
//         btn.value="Click Meee";
//         btn.className="btnTablet";
//         let infoDivs=document.querySelectorAll(".contactInfo");
//         infoDivs.forEach((i,index)=>{
//             setTimeout( ()=>{i.className="contactInfo"},index*350)
//         })

//     }else{
//         let contact=document.querySelector('.contact');
//         contact.classList.add("contactBorder");
//         let contactMe=document.querySelector(".contactMe");
//         contactMe.classList.add("contactMeTrans")
//         let infoDivs=document.querySelectorAll(".contactInfo");
//         btn.classList.add("btnRounded");
//         btn.value="^";
//         infoDivs.forEach((i,index)=>{
//             setTimeout( ()=>{i.classList.add("displayInfo")},index*350)
//             console.log(i);
//         })
//     }



    

// })