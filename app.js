let toggleBtn = document.getElementById("btn");

toggleBtn.addEventListener("click", ()=>{
    const body= document.getElementById('body');
    var x = Math.floor(Math.random() * 256); 
    var y = Math.floor(Math.random() * 256); 
    var z = Math.floor(Math.random() * 256); 
    const color = document.body.style.backgroundColor= "rgb(" + x + "," + y + "," + z + ")";
    let content = document.getElementById("bgcolor").textContent;
    document.getElementById("bgcolor").textContent = "Background Color:" + color;
});


