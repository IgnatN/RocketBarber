//// Slide container

let carousel = document.querySelector('.carousel-inner');
class Block {
    constructor(img, title, text, button) {
        this.img = img;
        this.title = title;
        this.text = text;
        this.button = button;
    }
    showSlides() {
        carousel.innerHTML += ` <div id="home" class="carousel-item">
                                <img class="image_img" src="${this.img}" class="d-block w-100" alt="...">
                                <div class="carousel-caption image">
                                <h1>${this.title}</h1>
                                <p>${this.text}</p>
                                <button>${this.button}</button>
                           </div>
                         </div>`
    }
};

let slide1 = new Block('./images/mainblockimg.png', 'Мужская территория', 'Клиенты для нас не просто гости, а хорошие друзья! Поэтому мы делаем всё для того, чтобы такие обыденные процедуры как стрижка,оформление бороды, мужской маникюр или спа уход приносили вам максимум комфорта и удовольствия!', 'Записаться');
slide1.showSlides();
let slide2 = new Block('./images/mainblockimg2.png', 'Крутой сервис', 'Клиенты для нас не просто гости, а хорошие друзья! Поэтому мы делаем всё для того, чтобы такие обыденные процедуры как стрижка,оформление бороды, мужской маникюр или спа уход приносили вам максимум комфорта и удовольствия!', 'Записаться');
slide2.showSlides();
let slide3 = new Block('./images/mainblockimg3.png', 'Индивидуальный подход', 'Клиенты для нас не просто гости, а хорошие друзья! Поэтому мы делаем всё для того, чтобы такие обыденные процедуры как стрижка,оформление бороды, мужской маникюр или спа уход приносили вам максимум комфорта и удовольствия!', 'Записаться');
slide3.showSlides();

let caroueslItem = document.querySelector('.carousel-item').classList.add('active')

///// Button style

let buton = document.querySelectorAll('button');
buton.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.background = 'white';
        btn.style.color = 'black'
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.width = '200px';
        btn.style.height = '60px';
        btn.style.border = '1px solid #FFFFFF';
        btn.style.background = 'rgba(0, 0, 0, 0.07)';
        btn.style.color = "white";
    })
    btn.style.width = '200px';
    btn.style.height = '60px';
    // btn.style.marginTop = '2%';
    btn.style.border = '1px solid #FFFFFF';
    btn.style.background = 'rgba(0, 0, 0, 0.07)';
    btn.style.color = "white";
    btn.style.fontSize = "20px";
    btn.style.fontWeight = '700';
    btn.style.fontSize = '20px';
    btn.style.letterSpacing = '0.03em'
})

///// Second block , big numbers 

let numbers = document.querySelector('.bigNumbers');
class Numbers {
    constructor(number, numberTitle, numberText) {
        this.number = number;
        this.numberTitle = numberTitle;
        this.numberText = numberText
    }
    showNumbers() {
        numbers.innerHTML += ` <div class="numberContent">
                                 <img src="${this.number}" alt="">
                                  <h5>${this.numberTitle}</h5>
                                     <p>${this.numberText}</p>
                                </div>`
    }
};
let number1 = new Numbers('./images/number1.png', 'Почему мы?', 'Первоклассные мастера, вкусный кофеек и желаемый результат!')
number1.showNumbers();
let number2 = new Numbers('/images/number2.png', 'Забота', 'Только профессиональная машинка заиграет в руках нашего мастера.')
number2.showNumbers();
let number3 = new Numbers('/images/number3.png', 'Качество', 'Работы наших мастеров говорят сами за себя.')
number3.showNumbers();
let number4 = new Numbers('/images/number4.png', 'Современность', 'Стиль и качество только в Rocket Barbershop.')
number4.showNumbers();

//// Number Animation 

let numb = document.querySelectorAll('.numberContent');

window.addEventListener('scroll', () => {
    numb[0].classList.add('active1');
    numb[1].classList.add('active2');
    numb[2].classList.add('active3');
    numb[3].classList.add('active4');
})

////// OUR Team
let ourTeam = document.querySelector('.teamBlocks');
class Team {
    constructor(photo, name, linkInst, instIcon) {
        this.photo = photo;
        this.name = name;
        this.linkInst = linkInst;
        this.instIcon = instIcon
    }
    showOurTeam() {
        ourTeam.innerHTML += `<div class="blockTeam">
        <div class="photoTeam"><a target="blanck" href="${this.linkInst}">
        <img class="ourTeamImg" src="${this.photo}" alt="">
        <img class="instIcon" src="${this.instIcon}"> </a></div>
        <p>${this.name}</p>
        </div>`
    }
}
let empl1 = new Team('./images/ourTeam1.jpg', 'Raketa', 'https://www.instagram.com/raketa_barber', './images/inst-icon.png')
empl1.showOurTeam();
let empl2 = new Team('./images/ourTeam2.jpg', 'Raketka', 'https://www.instagram.com/anyaonoiku', './images/inst-icon.png')
empl2.showOurTeam();
let empl3 = new Team('./images/ourTeam3.jpg', 'Daria', 'https://www.instagram.com/dariaonoiku', './images/inst-icon.png')
empl3.showOurTeam();
let empl4 = new Team('./images/ourTeam4.jpg', 'Mirel', 'https://www.instagram.com/mirelpirgari', './images/inst-icon.png')
empl4.showOurTeam();

let title = document.querySelectorAll('h1');
title.forEach(h1 => {
    h1.style.width = 'auto';
    h1.style.height = '53px';
    h1.style.fontFamily = "Roboto Condensed";
    h1.style.fontStyle = 'bold';
    h1.style.fontWeight = '700';
    h1.style.lineHeight = '53px';
    h1.style.letterSpacing = '0.06em'
    h1.style.marginTop = '100px'
    h1.style.color = '#E6E6E6'
});

////// Gallery 

let containersFlex = document.querySelector('.containersFlex')
class Gallery {
    constructor(photo1, photo2, photo3, photo4, photo5, photo6) {
        this.photo1 = photo1;
        this.photo2 = photo2;
        this.photo3 = photo3;
        this.photo4 = photo4;
        this.photo5 = photo5;
        this.photo6 = photo6
    }
    showGallery() {
        containersFlex.innerHTML += `<div  class="containerFlex">
        <div class="div1">
            <div class="img1 ">
                <a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo1" src="${this.photo1}" alt="">
                </a>
            </div>
            <div class="img2"><a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo2" src="${this.photo2}" alt="">
                </a>
            </div>
        </div>
        <div class="div2">
            <div class="img1">
                <a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo1" src="${this.photo3}" alt="">
                </a>
            </div>
        </div>
        <div class="div3">
            <div class="img1">
                <a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo2" src="${this.photo4}" alt="">
                </a>
            </div>
            <div class="img2">
                <a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo1" src="${this.photo5}" alt="">
                </a>
            </div>
        </div>
        <div class="div4">
            <div class="img1">
                <a href="https://www.instagram.com/rocketbarber.md" target="blanck">
                    <img class="photo1" src="${this.photo6}" alt="">
                </a>
            </div>
        </div>
    </div>`
    }
}
container1 = new Gallery('./images/gallery/3.jpg', './images/gallery/4.jpg', './images/gallery/5.jpg', './images/gallery/6.jpg', './images/gallery/7.jpg', './images/gallery/8.jpg')
container1.showGallery();
container2 = new Gallery('./images/gallery/19.jpg', './images/gallery/10.jpg', './images/gallery/11.jpg', './images/gallery/13.jpg', './images/gallery/12.jpg', './images/gallery/14.jpg')
container2.showGallery();
contanier3 = new Gallery('./images/gallery/15.jpg', './images/gallery/16.jpg', './images/gallery/17.jpg', './images/gallery/18.jpg', './images/gallery/20.jpg', './images/gallery/21.jpg')
contanier3.showGallery();

//// Our Services

let ouerServices = document.querySelector('.services-grid');

class Services {
    constructor(image, vector, title, button) {
        this.image = image;
        this.vector = vector;
        this.title = title;
        this.button = button
    }
    showServices() {
        ouerServices.innerHTML += `
                                          <div class="element">
                                             <img src="${this.image}" alt="Haircut" class="cover">
                                             <img src="${this.image}" alt="Haircut" class="cover">
                                                <div class="overlay"></div>
                                             <img src="${this.vector}" alt="Haircut" class="icon">
                                                  <div class="title">${this.title}</div>
                                               <button>${this.button} </button>
                                        </div>`
    }
}
let service1 = new Services('./images/ourServices/1.png', './images/ourServices/vector1.png', 'Стрижка', 'Записаться')
service1.showServices();
let service2 = new Services('./images/ourServices/2.png', './images/ourServices/vector2.png', 'Коррекция бровей', 'Записаться')
service2.showServices();
let service3 = new Services('./images/ourServices/3.png', './images/ourServices/vector3.png', 'Мужской маникюр', 'Записаться')
service3.showServices();
let service4 = new Services('./images/ourServices/4.png', './images/ourServices/vector4.png', 'Бритье', 'Записаться')
service4.showServices();

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show')
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element');
for (let elm of elements) {
    observer.observe(elm);
}
elements[0].style.transition = '2s';
elements[1].style.transition = '3s';
elements[2].style.transition = '5s';
elements[3].style.transition = '6s';

///// Rewiews carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
