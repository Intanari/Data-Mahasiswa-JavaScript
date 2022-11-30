const Kirim            = document.querySelector('.Kirim');
const Output           = document.querySelector('.OutputIntan');


function Form(){

    var NIM                = (document.FormIntan.InputNim.value);
    var NamaMahasiswa      = (document.FormIntan.InputNamaMahasiswa.value);
    var JenisKelamin       = (document.FormIntan.InputJenisKelamin.value);
    var Agama              = (document.FormIntan.InputAgama.value);
    var Jurusan            = (document.FormIntan.InputJurusan.value);
    var Saran              = (document.FormIntan.InputSaran.value);
    var Status='';         if(FormIntan.InputStatus.checked==true){ Status='Kawin';}else{ Status='Belum Kawin'; }

    const br1 = document.createElement ('br');
    Output.appendChild(br1)
    const br2 = document.createElement ('br');
    Output.appendChild(br2)
    const br3 = document.createElement ('br');
    Output.appendChild(br3)
    const br4 = document.createElement ('br');
    Output.appendChild(br4)

    const tr1 = document.createElement ('tr');
    Output.appendChild(tr1)

    const tr1td1 = document.createElement ('td');
    tr1td1.textContent = 'NIM';
    tr1.appendChild(tr1td1)

    const tr1td2 = document.createElement ('td');
    tr1td2.textContent = ': '+NIM;
    tr1.appendChild(tr1td2)

    const tr2 = document.createElement ('tr');
    Output.appendChild(tr2)

    const tr2td1 = document.createElement ('td');
    tr2td1.textContent = 'NAMA MAHASISWA';
    tr2.appendChild(tr2td1)

    const tr2td2 = document.createElement ('td');
    tr2td2.textContent = ': '+NamaMahasiswa;
    tr2.appendChild(tr2td2)

    const tr3 = document.createElement ('tr');
    Output.appendChild(tr3)

    const tr3td1 = document.createElement ('td');
    tr3td1.textContent = 'JENIS KELAMIN';
    tr3.appendChild(tr3td1)

    const tr3td2 = document.createElement ('td');
    tr3td2.textContent = ': '+JenisKelamin;
    tr3.appendChild(tr3td2)

    const tr4 = document.createElement ('tr');
    Output.appendChild(tr4)

    const tr4td1 = document.createElement ('td');
    tr4td1.textContent = 'AGAMA';
    tr4.appendChild(tr4td1)

    const tr4td2 = document.createElement ('td');
    tr4td2.textContent = ': '+Agama;
    tr4.appendChild(tr4td2)

    const tr5 = document.createElement ('tr');
    Output.appendChild(tr5)

    const tr5td1 = document.createElement ('td');
    tr5td1.textContent = 'STATUS';
    tr5.appendChild(tr5td1)

    const tr5td2 = document.createElement ('td');
    tr5td2.textContent = ': '+Status;
    tr5.appendChild(tr5td2)

    const tr6 = document.createElement ('tr');
    Output.appendChild(tr6)

    const tr6td1 = document.createElement ('td');
    tr6td1.textContent = 'JURUSAN DI POLTEKAM';
    tr6.appendChild(tr6td1)

    const tr6td2 = document.createElement ('td');
    tr6td2.textContent = ': '+Jurusan;
    tr6.appendChild(tr6td2)

    const tr7 = document.createElement ('tr');
    Output.appendChild(tr7)

    const tr7td1 = document.createElement ('td');
    tr7td1.textContent = 'SARAN';
    tr7.appendChild(tr7td1)

    const tr7td2 = document.createElement ('td');
    tr7td2.textContent = ':' +Saran;
    tr7.appendChild(tr7td2)

 

}

Kirim.addEventListener('click', Form)