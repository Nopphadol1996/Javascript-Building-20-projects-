const count = document.querySelector(".count")
const input = document.querySelector("input")

// ดักจับ event
input.addEventListener("keyup", () =>{
    count.innerHTML=input.value.length
})