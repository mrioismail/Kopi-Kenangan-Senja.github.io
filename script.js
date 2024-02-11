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

// detail item produk
const itemModal = document.querySelector('#item-detail-modal')
const itemDetail = document.querySelector('.item-detail')

itemDetail.onclick = (e) => {
   itemModal.style.display = 'flex'
   e.preventDefault()
}

// // tombol clos detail item
// document.querySelector('.modal .close-icon').onclick = (e) => {
//    detailItem.style.display = 'none'
//    e.preventDefault()
// }

// // klik di luar modal
// const modal = document.querySelector('#item-detail-modal');
// window.onclick = (e){
//    if (e.target === modal){
//       modal.style.display = 'none'
//    }
// }
