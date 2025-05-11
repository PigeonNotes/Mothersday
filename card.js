function showSurprise(){
    const gif = document.getElementById("gif");
    gif.style.display = "block";

    document.getElementById("main-title").innerText = "You are the best mom ever!";
    document.getElementById("subtext").innerText = "💖THANK YOU FOR EVERYTHING, WE LOVE YOU! FROM CHARRIE, CLYDE, CHAENNA💖";

    for(let i=0; i<20; i++){
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.innerText="🌸";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = (Math.random()*2+2)+"s";
        document.body.appendChild(flower);

        setTimeout(()=> {
            flower.remove();
        },3000);
    }
}
