var numQues = 5;
var numChoi = 3;
var answers = new Array(3);
answers[0] = "a";
answers[1] = "a";
answers[2] = "c";
answers[3] = "b";
answers[4] = "c";
var currSelection;

function getScore(form) {
  var score = 0;
  var currElt;
  for (i = 0; i < numQues; i++) {
    currElt = i * numChoi;
    let answered = false;

    for (j = 0; j < numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        answered = true;
        if (currSelection.value == answers[i]) {
          document.getElementById(`ket-no${i}`).innerHTML = "<b style='color:green' class='benar' ></br> Jawaban Benar</b>";
          document.getElementById(`ket-no${i}`).style = "display:none ;color:green";
          score++;
        } else {
          document.getElementById(`ket-no${i}`).innerHTML = "<b style='color:red' class='salah'> </br>Jawaban Salah</b>";
          document.getElementById(`ket-no${i}`).style = "display:none; color:red";
        }
      }
    }
    if (answered === false) {
      document.getElementById("ket").innerHTML = "<b style='color:red'> Jawablah semua pertanyaan yang tersedia!</b>";
      return false;
    } else {
      document.getElementById("ket").innerHTML = "";
    }
  }

  var cek;

  for (k = 0; k < numQues * numChoi; k++) {
    if (form.elements[k].checked) {
      cek++;
    }
  }

  if (cek < numQues) {
  } else {
    for (l = 0; l < numQues; l++) {
      document.getElementById(`ket-no${l}`).style = "display:inline";
    }
  }

  document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("ket").innerHTML = "";
    document.getElementById("ket2").innerHTML = "";

    for (i = 0; i < answers.length; i++) {
      document.getElementById(`ket-no${i}`).innerHTML = "";
    }
  });
}

//Tabel Pengamatan
const benar = '<span style="color : green;">Anda Benar</span>';
const salah = '<span style="color : red;">Anda Salah</span>';

function cekBUap() {
  suap.checked = false;
  const cekUap = document.querySelector(".cekUap");
  cekUap.innerHTML = benar;
}
function cekSUap() {
  cekBUap.checked = false;
  const cekUap = document.querySelector(".cekUap");
  cekUap.innerHTML = salah;
}

function cekBSurya() {
  ssurya.checked = false;
  const cekSurya = document.querySelector(".cekSurya");
  cekSurya.innerHTML = benar;
}
function cekSGaya() {
  bsurya.checked = false;
  const cekSurya = document.querySelector(".cekSurya");
  cekSurya.innerHTML = salah;
}
function cekBAir() {
  sair.checked = false;
  const cekAir = document.querySelector(".cekAir");
  cekAir.innerHTML = benar;
}
function cekSAir() {
  cekBAir.checked = false;
  const cekAir = document.querySelector(".cekAir");
  cekAir.innerHTML = salah;
}

function cekBListrik() {
  slistrik.checked = false;
  const cekListrik = document.querySelector(".cekListrik");
  cekListrik.innerHTML = benar;
}
function cekSListrik() {
  cekBListrik.checked = false;
  const cekListrik = document.querySelector(".cekListrik");
  cekListrik.innerHTML = salah;
}
function cekBEnergi() {
  senergi.checked = false;
  const cekEnergi = document.querySelector(".cekEnergi");
  cekEnergi.innerHTML = benar;
}
function cekSEnergi() {
  benergi.checked = false;
  const cekEnergi = document.querySelector(".cekEnegi");
  cekEnergi.innerHTML = salah;
}

function cekYa() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan pilih jawaban yang benar
                        </div>`;
}

function cekTidak() {
  const jawabcs1 = document.getElementById("jawabcs1");
  jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Tidak semua bahan dapat ditarik oleh Magnet
                        </div>`;
}

//video Mengamati
var video3_3 = document.getElementById("video3_3");
function setCurTime3_3(X) {
  if (X == 1) {
    video3_3.currentTime = 1;
  } else if (X == 2) {
    video3_3.currentTime = 3;
  } else if (X == 3) {
    video3_3.currentTime = 32;
  } else if (X == 4) {
    video3_3.currentTime = 53;
  } else if (X == 5) {
    video3_3.currentTime = 157;
  } else if (X == 6) {
    video3_3.currentTime = 208;
  }
}

//video Mencoba
var video4_4 = document.getElementById("video4_4");
function setCurTime4_4(X) {
  if (X == 1) {
    video4_4.currentTime = 2;
  } else if (X == 2) {
    video4_4.currentTime = 60;
  }
}

// Menambahkan data ke tabel
var noSiswa = 0;
var latihanA = document.querySelector("latihan1");

function AddItemToTableP22(nama, p2, j2, p3, j3, p4, j4, p5, j5) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");

  td1.innerHTML = ++noSiswa;
  td2.innerHTML = nama;
  td3.innerHTML = p2;
  td4.innerHTML = j2;
  td5.innerHTML = p3;
  td6.innerHTML = j3;
  td7.innerHTML = p4;
  td8.innerHTML = j4;
  td9.innerHTML = p5;
  td10.innerHTML = j5;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tr.appendChild(td9);
  tr.appendChild(td10);

  tblP22.appendChild(tr);
}

function AddAllItemsToTableP22(latihanA) {
  latihan1.innerHTML = "";
  latihanA.forEach((element) => {
    AddItemToTableP22(element.nama, element.p2, element.j2, element.p3, element.j3, element.p4, element.j4, element.p5, element.j5);
  });
}

function GetAllDataRealtimeP22() {
  const dbRef = ref(db, "latihan1");

  onValue(dbRef, (snapshot) => {
    var latihanA = [];

    snapshot.forEach((childSnapshot) => {
      latihanA.push(childSnapshot.val());
    });
    AddAllItemsToTableP22(latihanA);
  });
}

window.onload = GetAllDataRealtimeP22;
