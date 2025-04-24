let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("Clicou no botão 1")
}) 

btn1.addEventListener("mouseup", function(){    
    console.log("Soltou o botão 1")
})

btn2.addEventListener("dblclick", function(){
    console.log("Clicou duas vezes no botão 2")
})

btn2.addEventListener("contextmenu", function(e){   
    e.preventDefault(); // previne o menu de contexto do botão direito do mouse
    console.log("Clicou com o botão direito no botão 2")
})