// membuat navbar hamburger saat di klik hilang dan muncul dari samping
const hamburger = document.querySelector('#hamburger-menu')
const navbarNav = document.querySelector('.navbar-nav')

hamburger.addEventListener('click', function () {
   navbarNav.classList.toggle('active')
})

// klik di luar elemen
document.addEventListener('click', function (e) {
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active')
   }

   if (!search.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active')
   }

   if (!shopping.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active')
   }
})

// search form
const search = document.querySelector('#search')
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

search.addEventListener('click', function (e) {
   searchForm.classList.toggle('active')
   searchBox.focus()
   // agar aksi default tidak berfungsi
   e.preventDefault()
})

// shooping cart
const shopping = document.querySelector('#shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart')

shopping.addEventListener('click', function () {
   shoppingCart.classList.toggle('active')
})

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach((btn) => {
   btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex'
      e.preventDefault()
   }
})

itemDetailButtons.onclick = (e) => {
   itemDetailModal.style.display = 'flex'
   e.preventDefault()
}

// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
   itemDetailModal.style.display = 'none'
   e.preventDefault()
}

// klik close diluar dimana aja
window.onclick = (e) => {
   if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none'
   }
}
