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
    btn.style.marginTop = '2%';
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
    h1.style.marginTop = '4%'
    h1.style.color = '#E6E6E6'
});

/////// Gallery
let gallery = document.querySelector('.galleryBlocks');

