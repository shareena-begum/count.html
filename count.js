let saveEl = document.getElementById("save-el")
let countEl = document.getElementById ("count-el")

let count = 0

function increment () {
    count += 1
    countEl.textContent= count
    console.log(`count is => ${count}`)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

// suppose count= 0
// increment
// count= count+1
// count= 0+1 = 1

// suppose count= 1
// increment
// count= count+1
// count= 1+1 = 2

// suppose count= 2
// increment
// count= count+1
// count= 2+1 = 3


// suppose count= 0
// save
// countStr= count+ " - "
// countStr= "0 - "

// suppose count= 1
// save
// countStr= count+ " - "
// countStr= "0 - 1 - "

// suppose count= 2
// save
// countStr= count+ " - "
// countStr= "0 - 1 - 2 - "


