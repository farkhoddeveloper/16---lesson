const input = document.querySelector("#message");
const select = document.querySelector("#tanlash");
const ol = document.querySelector("#notes");


input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const div = document.createElement("div");
        div.innerText = event.target.value;   
        ol.appendChild(div)
        input.value = ""   

    }
})
