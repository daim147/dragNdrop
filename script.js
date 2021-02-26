const fills = document.querySelector(".fill")

const empties = document.querySelectorAll(".empty")

fills.addEventListener("dragstart", dragStart)
fills.addEventListener("dragend", dragEnd)

for (const empty of empties) {

    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)

}

function dragStart() {
    this.classList.add("hold")
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    this.className = "fill"

}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    this.classList.add("hovered")
    // this.appendChild(fills)
    e.preventDefault()
}
function dragLeave() {

    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty'

    // let a = document.createElement("div");

    // a.classList.add("fill")
    // console.log(a)
    // this.append(a)
    this.appendChild(fills)
}

