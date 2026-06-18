import { db, storage }
from "./firebase-config.js";

import {
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

window.nextSlide = function(){

document
.getElementById("slide1")
.classList.remove("active");

document
.getElementById("slide2")
.classList.add("active");

}

window.prevSlide = function(){

document
.getElementById("slide2")
.classList.remove("active");

document
.getElementById("slide1")
.classList.add("active");

}

document
.getElementById("submitBtn")
.addEventListener("click", async()=>{

const file =
document.getElementById("bukti").files[0];

const storageRef =
ref(storage,"bukti/"+Date.now());

await uploadBytes(storageRef,file);

const url =
await getDownloadURL(storageRef);

await addDoc(collection(db,"pendaftar"),{

nama:
document.getElementById("nama").value,

karakter:
document.getElementById("karakter").value,

karakterNama:
document.getElementById("karakterNama").value,

ttl:
document.getElementById("ttl").value,

telepon:
document.getElementById("telepon").value,

prodi:
document.getElementById("prodi").value,

jawaban1:
document.getElementById("jawaban1").value,

jawaban2:
document.getElementById("jawaban2").value,

bukti:url,

waktu:new Date()

});

alert("Pendaftaran berhasil!");

location.reload();

});