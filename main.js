let clickbtn = document.getElementById("clickbtn")
let clickcount = document.getElementById("clickcount")


let count = 0

function setup_display() {
    clickcount.textContent = count
}

setup_display()

clickbtn.addEventListener("click", ()=>{
    count++
    setup_display()
})