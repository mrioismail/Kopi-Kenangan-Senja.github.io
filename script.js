// membuat navbar hamburger saat di klik hilang dan muncul dari samping
const hamburger = document.querySelector('#hamburger-menu')
const navbarNav = document.querySelector('.navbar-nav')

hamburger.addEventListener('click', function () {
   navbarNav.classList.toggle('active')
})

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function (e) {
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active')
   }
})
