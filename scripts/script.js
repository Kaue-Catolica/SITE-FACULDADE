let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 10000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const hidemenu = document.getElementById('hidemenu');
    const navMenu = document.getElementById('navmenu');
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('hidemenu:', hidemenu);
    console.log('Nav Menu:', navMenu);
    console.log('Nav Links:', navLinks);

    function toggleMenu() {
        console.log('Toggle menu called');
        navMenu.classList.toggle('active');
        hidemenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');

        // Animate nav links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    hidemenu.addEventListener('click', function(event) {
        console.log('hidemenu clicked');
        event.stopPropagation();
        toggleMenu();
    });

    // Fechar o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Nav link clicked');
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnhidemenu = hidemenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnhidemenu && navMenu.classList.contains('active')) {
            console.log('Clicked outside menu');
            toggleMenu();
        }
    });

    console.log('All event listeners set up');
});





document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que queremos animar
    const animatedElements = document.querySelectorAll('.assuntos, .seguir');
    
    function checkElements() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Verifica se o elemento está na viewport e ainda não foi animado
            if (elementTop < window.innerHeight && elementBottom > 0 && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }
    
    // Verifica os elementos ao carregar a página
    checkElements();
    
    // Verifica os elementos ao rolar a página
    window.addEventListener('scroll', checkElements);
});





// mostrar resposta

function toggleCode1() {
    var codeContainer = document.getElementById("code1");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}

function toggleCode2() {
    var codeContainer = document.getElementById("code2");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}

function toggleCode3() {
    var codeContainer = document.getElementById("code3");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}

function toggleCode4() {
    var codeContainer = document.getElementById("code4");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}

function toggleCodeld1() {
    var codeContainer = document.getElementById("codeld1");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeld2() {
    var codeContainer = document.getElementById("codeld2");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeld3() {
    var codeContainer = document.getElementById("codeld3");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC1() {
    var codeContainer = document.getElementById("codec1");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC2() {
    var codeContainer = document.getElementById("codec2");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC3() {
    var codeContainer = document.getElementById("codec3");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC4() {
    var codeContainer = document.getElementById("codec4");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC5() {
    var codeContainer = document.getElementById("codec5");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC6() {
    var codeContainer = document.getElementById("codec6");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}
function toggleCodeC7() {
    var codeContainer = document.getElementById("codec7");
    if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
        codeContainer.style.display = "block"; // Mostra o código
    } else {
        codeContainer.style.display = "none"; // Oculta o código
    }
}

