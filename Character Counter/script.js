const charVal=document.getElementById("textarea");
let totalCount= document.getElementById("total-counter");
let remCount= document.getElementById("rem-counter");

let userChar=0;

const updateCounter =()=>{
    userChar=charVal.value.length;

    totalCount.innerHTML=userChar;

    remCount.innerHTML=150-userChar;

};


charVal.addEventListener('keyup', ()=> updateCounter());

const copytext=()=>{
    charVal.select();
    charVal.setSelectionRange(0,9999);
    navigator.clipboard.writeText(charVal.value);
};