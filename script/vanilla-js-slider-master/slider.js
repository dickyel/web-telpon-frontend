const btns = document.querySelector('.slider-buttons');
const images = document.querySelector('.slider-images');
const imageWidth = images.clientWidth;
const IMAGE_CHANGE_DELAY = 3000;
let imageIndex = 0;

for (let i = 0; i < btns.children.length; i++) {
    const btn = btns.children[i];
    btn.addEventListener('click', function () {
        unCheckAllBtns();
        btn.classList.add('active');
        changeImage(i);
    });
}

function unCheckAllBtns() {
    for (const btn of btns.children) {
        btn.classList.remove('active');
    }
}

function changeImage(index) {
    let pos = imageWidth * imageIndex;
    const interval = setInterval(slide, 1);

    function slide() {
        if (pos === imageWidth * index) {
            imageIndex = index;
            clearInterval(interval);
        } else {
            if (index > imageIndex) {
                pos += 10;
            } else if (index < imageIndex) {
                pos -= 10;
            }
            images.style.left = '-' + pos + 'px';
        }
    }
}

function nextSlide() {
    unCheckAllBtns();

    let index = imageIndex + 1;

    if (index === btns.children.length) {
        index = 0;
    }

    btns.children[index].classList.add('active');
    changeImage(index);
}

setInterval(() => !document.hidden && nextSlide(), IMAGE_CHANGE_DELAY);