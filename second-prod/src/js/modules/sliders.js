const sliders = (slides, dir, prev, next ) => {
    let slideIndex = 1,
        paused = false
    const items = document.querySelectorAll(slides)
     
    
    function showSlides(n) { // Если приходит 6 слайдов, а у нас 5 то будем показывать опять 1
        if (n > items.length) {
            slideIndex = 1
        }

        if (n < 1) { 
            slideIndex = items.length
        }

        items.forEach(item => {
            item.classList.add('animated')
            item.style.display = 'none'
        })

        items[slideIndex - 1].style.display = 'block'
    }

    showSlides(slideIndex)

    function plusSlide(n) {
        showSlides(slideIndex += n)
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next)
        
        prevBtn.addEventListener('click', () => {
            plusSlide(-1)
            items[slideIndex - 1].classList.remove('slideInLeft')
            items[slideIndex - 1].classList.add('slideInRight')
        })

        nextBtn.addEventListener('click', () => {
            plusSlide(1)
            items[slideIndex - 1].classList.remove('slideInRight')
            items[slideIndex - 1].classList.add('slideInLeft')
        })
    } catch(e) {

    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function () {
                plusSlide(1)
                items[slideIndex - 1].classList.add('slideInDown')
            }, 3000)
        } else {
            paused = setInterval(function () {
                plusSlide(1)
                items[slideIndex - 1].classList.remove('slideInRight')
                items[slideIndex - 1].classList.add('slideInLeft')
            }, 3000)
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });


}

export default sliders