const scriptURL = "https://script.google.com/macros/s/AKfycbyNLsjyxGJyH1pyZkrLgivQUYwubexLbRT1XcNSgUC5rO7eCvX8c6i3B5o30sZemYKbEw/exec";
const form = document.forms["quantum-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

//   btnKirim.addEventListener('click', function(){
//     alert('cobabab')
//   })

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Menghilakan Tombol Kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      myAlert.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      window.addEventListener('click', function(){
          myAlert.classList.add("d-none");
      })
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});



//   document.getElementById('form-kontak').addEventListener('submit', function(e){
//     e.preventDefault();

//     // ambil data dari form
//     var nama = document.getElementsByName('nama')[0].value;
//     var email = document.getElementsByName('email')[0].value;
//     var pesan = document.getElementsByName('pesan')[0].value;

//     // format pesan untuk dikirim ke WhatsApp
//     var pesanWA = "Nama: " + nama + "%0AEmail: " + email + "%0APesan: " + pesan;

//     // buka WhatsApp dan kirim pesan
//     window.open("https://api.whatsapp.com/send?phone=089630025703&text=" + pesanWA);
//   });

// document.getElementById('contact').addEventListener('submit', function(e){
//     e.preventDefault();

//     // tampilkan button loading
//     document.getElementById('form-submit').style.display = 'none';
//     document.getElementsByClassName('btn-loading')[0].style.display = 'inline-block';

//     // ambil data dari form
//     var nama = document.getElementsByName('nama')[0].value;
//     var email = document.getElementsByName('email')[0].value;
//     var pesan = document.getElementsByName('pesan')[0].value;

//     // format pesan untuk dikirim ke WhatsApp
//     var pesanWA = "Nama: " + nama + "%0AEmail: " + email + "%0APesan: " + pesan;

//     // buka WhatsApp dan kirim pesan
//     window.open("https://api.whatsapp.com/send?phone=nomor_wa_tujuan&text=" + pesanWA);

//     // setelah 2 detik, hilangkan button loading dan tampilkan alert
//     setTimeout(function(){
//       document.getElementsByClassName('btn-loading')[0].style.display = 'none';
//       document.getElementById('form-submit').style.display = 'inline-block';
//       document.getElementsByClassName('my-alert')[0].style.display = 'block';
//     }, 2000);
//   });