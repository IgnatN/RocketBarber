//// Slide container

let carousel = document.querySelector('.carousel-inner');
class Block {
    constructor(img, title, text, button) {
        this.img = img;
        this.title = title;
        this.text = text;
        this.button = button
    }
    showSlides() {
        carousel.innerHTML += ` <div class="carousel-item image">
                                <img class="image_img" src="${this.img}" class="d-block w-100" alt="...">
                                <div class="carousel-caption image_overlay">
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