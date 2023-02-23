let des = document.getElementById("des");
let sel = document.getElementById("sel");
let due = document.getElementById("due");
document.addEventListener('keydown',function(e){
    if(document.activeElement!=sel&&document.activeElement!=due){
        des.focus();
    }
})
