if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
});

// Klik di luar hamburger

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

$("#dark-toggle").on("click", function(){
  if ($(this)[0].checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
  
})


// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


// link
$(".ig-link").attr("href","https://www.instagram.com/f.13_xyz/");
$(".yt-link").attr("href","#");
$(".twitter-link").attr("href","#");
$(".tiktok-link").attr("href","#");
$(".linkedin-link").attr("href","#");


// contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbx76eAMvYuSwGjzG15OMNxbmnin53QObUqrs6dc-961V4MhZZntuQhp5d_dYVzGtSvZ-w/exec'
const form = document.forms['contact']
const btnSend = document.querySelector(".btn-send")
const btnSendInner = document.querySelector(".btn-send").innerHTML
const alertForm = document.querySelector(".alert-form")
form.addEventListener('submit', e => {
  e.preventDefault()
  btnSend.innerHTML = "loading .."
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnSend.innerHTML = btnSendInner
      alertForm.classList.toggle("hidden")
      form.reset();
      console.log('Success!', response)
      setTimeout(function() {
        alertForm.classList.toggle("hidden")
      }, 1500);
     })
    .catch(error => console.error('Error!', error.message))
})