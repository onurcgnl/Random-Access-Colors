

window.onload = () => {
    main()
}
const root = document.getElementById("root")
const output = document.getElementById("output")
const body = document.body;
const changeBtn = document.getElementById("change-btn")
const copyBtn = document.getElementById("copy-btn")
const choose = document.querySelector(".choose")
const copyCompleted = document.querySelector(".copy-completed")

function main() {
    changeBtn.addEventListener("click", function () {
        const bgColor = colorRGB()
        body.style.backgroundColor = bgColor
        output.value = bgColor
        choose.classList.add("hidden")
        copyCompleted.classList.add("hidden")
      
        
    })
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("change-btn")) {
            main()
        }
    })
    copyBtn.addEventListener("click", function (){
        navigator.clipboard.writeText(output.value)
        copyCompleted.classList.remove("hidden")
        
    })


}

function colorRGB() {
    
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    // return `rgb( ${red}, ${green}, ${blue})`
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}



