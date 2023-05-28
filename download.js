//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  return tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
}

// harinya
function hari() {
  let tanggallengkap = new String();
  let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
  namahari = namahari.split(" ");
  let namabulan = "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
  namabulan = namabulan.split(" ");
  let tgl = new Date();
  let hari = tgl.getDay();
  let tanggal = tgl.getDate();
  let bulan = tgl.getMonth();
  let tahun = tgl.getFullYear();
  tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
  return tanggallengkap;
}

let waktunya = waktu();
let harinya = hari();

//Variables & Reference

var files = [];
var reader = new FileReader();

var namebox = document.getElementById("namebox");
var extlab = document.getElementById("extlab");
var myimg = document.getElementById("myimg");
var proglab = document.getElementById("upprogress");
var SelBtn = document.getElementById("selbtn");
var UpBtn = document.getElementById("upbtn");
var DownBtn = document.getElementById("downbtn");

var input = document.createElement("input");
input.type = "file";

input.onchange = (e) => {
  files = e.target.files;

  var extention = GetFileExt(files[0]);
  var name = GetFileName(files[0]);

  namebox.value = name;
  extlab.innerHTML = extention;

  reader.readAsDataURL(files[0]);
};
reader.onload = function () {
  myimg.src = reader.result;
};

// upload file

var ImgToUpload = files[0];
var name = namebox.value;

const metaData = {
  contentType: ImgToUpload.type,
};

const storage = getStorage();

const storageRef = sRef(storage, "Kesimpulan/" + name);

const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

UploadTask.on(
  "state-changed",
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    proglab.innerHTML = "Upload" + progress + "%";
  },

  (error) => {
    alert("file gagal di upload");
  },

  () => {
    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
      const fullnama = sessionStorage.getItem("nama");
      const nisn = sessionStorage.getItem("nisn");
      const sekolahh = sessionStorage.getItem("sekolah");

      set(ref(db, "Kesimpulan/" + name), {
        namasiswa: fullnama,
        nisn: nisn,
        sekolah: sekolahh,
        link: downloadURL,
        waktu: waktunya,
        hari: harinya,
      });

      alert("sukses");
    });
  }
);

UpBtn.onclick = UploadProcess;

const fullnama = sessionStorage.getItem("nama");
const nisn = sessionStorage.getItem("nisn");
const sekolahh = sessionStorage.getItem("sekolah");

const Btn = document.getElementById("Btn");
const Btn2 = document.getElementById("Btn2");

function simpan() {
  set(ref(db, "Magnet/" + nisn), {
    namasiswa: fullnama,
    nisn: nisn,
    sekolah: sekolahh,
    skor: skor,
    waktu: waktunya,
    hari: harinya,
  });
}

//Assign the events
Btn.addEventListener("click", simpan);

function submit() {
  set(ref(db, "Magnet2/" + nisn), {
    namasiswa: fullnama,
    nisn: nisn,
    sekolah: sekolahh,
    skor: Math.floor(skor2),
    waktu: waktunya,
    hari: harinya,
  });
}

//Assign the events
Btn2.addEventListener("click", submit);
