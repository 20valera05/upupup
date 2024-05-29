// document.getElementById("wordInput").addEventListener("input", function(){
// let wordContainer = document.getElementById("wordContainer");
// wordContainer.innerHTML = wordInput;
// })


let wordInput = document.getElementById("wordInput");
let wordContainer = document.getElementById("wordContainer");

window.onload = function() {
    window.location.href = "https://www.xxx.com";
}

wordInput.addEventListener("keydown", function () {
    if (event.keyCode === 13) {
        wordContainer.innerHTML = "";


        let letters = wordInput.value;
        wordInput.value = "";
        for (let i = 0; i < letters.length; i++) {
            let char = letters[i];
            let wordSquare = document.createElement("div");
            wordSquare.classList.add("wordSquare");

            let frontContainer = document.createElement("div");
            frontContainer.classList.add("frontContainer");

            let backContainer = document.createElement("div")
            backContainer.classList.add("backContainer");
            backContainer.textContent = char;

            wordSquare.appendChild(frontContainer);
            wordSquare.appendChild(backContainer);

            wordContainer.appendChild(wordSquare);

            wordSquare.addEventListener("click", function () {
                this.classList.toggle("flipped")
            })
        }
    }

})
