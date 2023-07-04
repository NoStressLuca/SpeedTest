let start, end;
let size = "";
let image = new Image();
let bsp = document.getElementById("bits");
let ksp = document.getElementById("kbs");
let msp = document.getElementById("mbs");
let info = document.getElementById("info");
let BSampleSpeed = 0,
    KSampleSpeed = 0,
    MSampleSpeed = 0;
    //Modifying the value of this parameter ( -> number of packets sampled ) will affect the accuracy as well as the speed of this test
    testNr = 1;
    clear = 0;
window.prompt("This is a sandbox project. Prompt anything to begin and enjoy!");
console.log("User input - nubmer of test packets:", testNr);
//This function fethces sample packets
let imageApi = "https://source.unsplash.com/random?topic=Architecture&Interiors";

//Image load event
image.onload = async function() {
    end = new Date().getTime();

    //fetch image size
    await fetch(imageApi).then((response) => {
        size = response.headers.get("content-length");
        plotSpeed();
    })
}
function plotSpeed(){
    let duration = (end-start) / 1000;
    totalBits = size * 8;
    let bitspeed = totalBits / duration;
    let kbsped = bitspeed / 1024;
    let mbspeed = kbsped / 1024;

    BSampleSpeed += bitspeed;
    KSampleSpeed += kbsped;
    MSampleSpeed += mbspeed;
    clear++;

    if (clear === testNr){
        let meanBitSpeed = (BSampleSpeed / testNr).toFixed(2);
        let meanKbSpeed = (KSampleSpeed / testNr).toFixed(2);
        let meanMbSpeed = (MSampleSpeed / testNr).toFixed(2);

        bsp.innerHTML += `${meanBitSpeed}`;
        ksp.innerHTML += `${meanKbSpeed}`;
        msp.innerHTML += `${meanMbSpeed}`;
        info.innerHTML= "Test Finished";
    }
    else{
        start = new Date().getTime();
        image.src = imageApi;
    }
}

const init = async () =>{
    info.innerHTML = "Testing...";
    start = new Date().getTime();
    image.src = imageApi;
    //rotateElement(-90);
};

window.onload = () =>{
    /*var x = window.prompt ("Input: ")
    testNr = x;*/
    for(var i = 1; i<=testNr; i++){
        init();
    }
};
/*
const rotatingElement = document.getElementById("rotatingElement");
function rotateElement(rotationAngle) {
    rotatingElement.style.transform = `rotate (${rotationAngle}deg)`;

    requestAnimationFrame(rotateElement);
};*/