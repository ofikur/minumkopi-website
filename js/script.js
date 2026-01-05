// Toggle Active Class (Navbar, Search, Cart, User)
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const userForm = document.querySelector('.user-form');

// Buttons
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
const ub = document.querySelector('#user-button');
const searchBox = document.querySelector('#search-box');
const closeCartBtn = document.querySelector('#close-cart-btn');

// Event Handlers
hm.onclick = (e) => { navbarNav.classList.toggle('active'); e.preventDefault(); };
sb.onclick = (e) => { searchForm.classList.toggle('active'); searchBox.focus(); e.preventDefault(); };
sc.onclick = (e) => { shoppingCart.classList.toggle('active'); e.preventDefault(); };
ub.onclick = (e) => { userForm.classList.toggle('active'); e.preventDefault(); };

// Close Cart Logic
if(closeCartBtn) {
    closeCartBtn.onclick = (e) => {
        shoppingCart.classList.remove('active');
        e.preventDefault();
    };
}

// Close when clicking outside
document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove('active');
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) searchForm.classList.remove('active');
  
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
  }
  
  if (!ub.contains(e.target) && !userForm.contains(e.target)) userForm.classList.remove('active');
});

// Switch Login <-> Register
const loginFormBox = document.querySelector('#login-form-box');
const registerFormBox = document.querySelector('#register-form-box');
const switchToRegister = document.querySelector('#switch-to-register');
const switchToLogin = document.querySelector('#switch-to-login');

if(switchToRegister && switchToLogin) {
    switchToRegister.onclick = (e) => {
        e.preventDefault();
        loginFormBox.style.display = 'none';
        registerFormBox.style.display = 'block';
    };
    switchToLogin.onclick = (e) => {
        e.preventDefault();
        registerFormBox.style.display = 'none';
        loginFormBox.style.display = 'block';
    };
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Reveal on Scroll
const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => observer.observe(el));