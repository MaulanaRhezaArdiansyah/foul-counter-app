let numberA = document.getElementById("numberA");
let numberB = document.getElementById("numberB");
let tambahButtonTeamA = document.getElementById("tambah-a");
let tambahButtonTeamB = document.getElementById("tambah-b");
let simpanButtonTeamA = document.getElementById("simpan-a");
let simpanButtonTeamB = document.getElementById("simpan-b");
let foulA = document.getElementById("foul-a");
let foulB = document.getElementById("foul-b");
let hitungA = 0;
let hitungB = 0;

function tambahA() {
  hitungA += 1;
  numberA.textContent = hitungA;
}

function tambahB() {
  hitungB += 1;
  numberB.textContent = hitungB;
}

function simpanA() {
  foulA.textContent += " " + hitungA + " - ";
  hitungA = 0;
  numberA.textContent = hitungA;
}

function simpanB() {
  foulB.textContent += " " + hitungB + " - ";
  hitungB = 0;
  numberB.textContent = hitungB;
}
