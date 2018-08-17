//evento del teclado 
let playSound= (e)=>{
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //si la tecla no tiene asignada ningun sonido
    if(!sound) return;
    //decimos que no se tarde en repetir
    sound.currentTime = 0;
    //mandamos a reproducir 
    sound.play();
    key.classList.add("playing");

}

let removeTransition= (e)=>{
    if(e.propertyName !== "transform") return;
    let keyB = e.target;
    keyB.classList.remove("playing");
    
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);