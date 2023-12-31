const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})


// Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header')
    const toTop = document.querySelector('#to-top')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
        header
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}


window.addEventListener('click', function(a){
    if(a.target != navMenu && a.target != hamburger){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})


const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})


// Toggle Mode
if(localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches) ){
    darkToggle.checked = true
  }else{
    darkToggle.checked = false
  }

