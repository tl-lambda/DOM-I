const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.querySelector('nav')
let item1 = document.createElement('a')
let item0 = document.createElement('a')
item1.innerText = 'Info'
item0.innerText = 'Get Started'
nav.appendChild(item1)
nav.prepend(item0)
let navA = document.querySelectorAll('a')
navA[1].innerText = 'Services'
navA[2].innerText = 'Product'
navA[3].innerText = 'Vision'
navA[4].innerText = 'Features'
navA[5].innerText = 'About'
navA[6].innerText = 'Contact'
for (let i = 0; i < navA.length; i++){
  navA[i].style.color = 'green'
}
let h1 = document.querySelector('h1')
h1.innerHTML = "DOM<br/>Is<br/>Awesome"
let img1 = document.getElementById('cta-img')
img1.src = './img/header-img.png'
let btn = document.querySelector('button')
btn.innerText = "Get Started"
let h4s = document.querySelectorAll('h4')
h4s[0].innerText = "Features"
h4s[1].innerText = "About"
h4s[2].innerText = "Services"
h4s[3].innerText = "Product"
h4s[4].innerText = "Vision"
h4s[5].innerText = "Contact"
let ps = document.getElementsByTagName('p')
ps[0].innerText = siteContent["main-content"]['features-content']
ps[1].innerText = siteContent["main-content"]['about-content']
ps[2].innerText = siteContent["main-content"]['services-content']
ps[3].innerText = siteContent["main-content"]['product-content']
ps[4].innerText = siteContent["main-content"]['vision-content']
ps[5].innerText = siteContent["contact"]['address']
ps[6].innerText = siteContent["contact"]['phone']
ps[7].innerText = siteContent["contact"]['email']
ps[8].innerText = siteContent["footer"]['copyright']
let middle = document.getElementById('middle-img')
middle.src = './img/mid-page-accent.jpg'