import { db }
from "./firebase-config.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const tbody =
document.getElementById("data");

const snap =
await getDocs(
collection(db,"pendaftar")
);

snap.forEach(doc=>{

const d = doc.data();

tbody.innerHTML += `

<tr>

<td>${d.nama}</td>
<td>${d.karakter}</td>
<td>${d.prodi}</td>

<td>
<a href="${d.bukti}" target="_blank">
Lihat
</a>
</td>

</tr>

`;

});