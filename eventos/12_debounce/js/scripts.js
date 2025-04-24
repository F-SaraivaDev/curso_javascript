let timeout

window.addEventListener("mousemove", function(e){ 
    clearTimeout()  
    timeout = setTimeout(function(){
        cconsole.log(e.x)
    }, 500)
})