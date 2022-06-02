const slides = document.querySelectorAll('.c-testimonials__content');
const nextBtn = document.querySelectorAll('.next-btn');
const prevBtn = document.querySelectorAll('.prev-btn');


slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;


nextBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        counter++;
        carousel();
    })
})

prevBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        counter--;
        carousel();
    })
})

function carousel(){

    if(counter == slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}