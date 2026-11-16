const karusell=document.querySelector(".karusell");
const bilder=document.querySelectorAll(".karusell-bilde");
const prevBtn=document.getElementById("forrige");
const nextBtn=document.getElementById("neste");

let index=0;
const antallBilder=bilder.length;
const intervallTid=10000;
let autoTimer;

function oppdaterBilde() {
    bilder.forEach((bilde,i)=>{
        if(i===index){
            bilde.classList.add("aktiv");
        }else{
            bilde.classList.remove("aktiv");
        }
    });
}

function nesteBilde() {
    index=(index+1)%antallBilder;
    oppdaterBilde();
}

function forrigeBilde() {
    index=(index-1+antallBilder)%antallBilder;
    oppdaterBilde();
}

function startAuto() {
    autoTimer=setInterval(nesteBilde,intervallTid);
}   

function stoppAuto() {
    clearInterval(autoTimer);
    startAuto();
}

prevBtn.addEventListener("click",()=>{
    forrigeBilde();
    stoppAuto();
});

nextBtn.addEventListener("click",()=>{
    nesteBilde();
    stoppAuto();
});

document.addEventListener("DOMContentLoaded",()=>{
    oppdaterBilde();
    startAuto();
});

//får å legge til bilde må du putte inn enda et bilde i html filen med class="karusell-bilde" og legge til src og alt:) hilsen Mina!