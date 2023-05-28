let pbs = 0;
if (locLast == "html/index.html") {
  pbs = 2;
} else if (locLast == "html/materi_a.html") {
  pbs = 5;
} else if (locLast == "/materi/sub1_2.html") {
  pbs = 10;
} else if (locLast == "/materi/sub1_3.html") {
  pbs = 15;
} else if (locLast == "/materi/sub1_4.html") {
  pbs = 20;
} else if (locLast == "/materi/index2.html") {
  pbs = 27;
} else if (locLast == "/materi/sub2_1.html") {
  pbs = 30;
} else if (locLast == "/materi/sub2_2.html") {
  pbs = 35;
} else if (locLast == "/materi/sub2_3.html") {
  pbs = 40;
} else if (locLast == "/materi/sub2_4.html") {
  pbs = 45;
} else if (locLast == "/materi/index3.html") {
  pbs = 52;
} else if (locLast == "/materi/sub3_1.html") {
  pbs = 55;
} else if (locLast == "/materi/sub3_2.html") {
  pbs = 60;
} else if (locLast == "/materi/index4.html") {
  pbs = 67;
} else if (locLast == "/materi/sub4_1.html") {
  pbs = 70;
} else if (locLast == "/materi/sub4_2.html") {
  pbs = 75;
} else if (locLast == "/materi/sub4_3.html") {
  pbs = 80;
} else if (locLast == "/materi/rangkuman.html") {
  pbs = 90;
} else if (locLast == "/materi/laporan.html") {
  pbs = 100;
}

let pb = localStorage.getItem("pbbar");

if (pb < pbs) {
  localStorage.setItem("pbbar", pbs);
}

var pbBar = document.getElementById("pb");
$(function () {
  setInterval(fpbBar, 1000);
});
function fpbBar() {
  pbBar.innerHTML = `<div class="progress" style="height: 25px;">
    <div class="progress-bar" role="progressbar" style="width: ${localStorage.getItem("pbbar")}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${localStorage.getItem("pbbar")}%</div>
    </div>`;
}
