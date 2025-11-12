// scriptlog.js
document.addEventListener('DOMContentLoaded', function () {
  const authCard = document.getElementById('authCard');
  const switchBtns = document.querySelectorAll('.switch-btn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // tombol pindah layout daftar sekarang
  function setActive(target) {
    if (target === 'right') {
      authCard.classList.add('active-right');
    } else {
      authCard.classList.remove('active-right');
    }
  }

  // tombol ganti
  switchBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-target');
      setActive(target);
    });
  });

  // submit join to the club
  loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Mohon isi email dan kata sandi.');
    return;
  }

   if (email === "frakawk@gmail.com" && password === "123456") {
    alert("Login berhasil!");
    // pindah ke halaman berikutnya
    window.location.href = "portofolio.html";  
    //alert salah 
  } else {
    alert("Email atau kata sandi salah!");
  }
});
    console.log('Login submit:', { email, password });
  });

  // submit registrasi
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pwd = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    if (!name || !email || !pwd) {
      alert('Mohon isi semua field pendaftaran.');
      return;
    }
    if (pwd.length < 6) {
      alert('Kata sandi minimal 6 karakter.');
      return;
    }
    if (pwd !== confirm) {
      alert('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    console.log('Register submit:', { name, email });
    
    setActive('left');
    alert('Pendaftaran berhasil (contoh). Silakan masuk.');
  });

  // Esc untuk balik ke login
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setActive('left');
  });

