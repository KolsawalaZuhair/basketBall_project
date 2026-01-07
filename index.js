let HomeP = document.getElementById("Hpoints")
let HP = 0
let GuestP = document.getElementById("Gpoints")
let GP = 0

function HAdd1() {
    HP += 1
    HomeP.textContent = HP
}

function HAdd2() {
    HP += 2
    HomeP.textContent = HP
}

function HAdd3() {
    HP += 3
    HomeP.textContent = HP
}

function GAdd1() {
    GP += 1
    GuestP.textContent = GP
}

function GAdd2() {
    GP += 2
    GuestP.textContent = GP
}

function GAdd3() {
    GP += 3
    GuestP.textContent = GP
}

function resetB () {
    HP = 0
    GP = 0
    HomeP.textContent = 0
    GuestP.textContent =0
}


