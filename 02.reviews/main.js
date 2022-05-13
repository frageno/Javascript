// Array of the reviews
const reviews = [
    {
        img: './img/review-img-1.jpg',
        name: 'Ana Smith',
        position: 'Web desinger',
        desc: 'Lorem ipsum dolor si amet, consectetur adipisicing elit. Nemo culpa, id reprehenderit perspiciatis'
    },
    {
        img: './img/review-img-2.jpg',
        name: 'Jessica Wick',
        position: 'Team Leader',
        desc: 'Lorem ipsum dolor sit amet, Nemo culpa, id reprehenderit perspiciatis'
    },
    {
        img: './img/review-img-3.jpg',
        name: 'Sarah',
        position: 'Manager',
        desc: 'Lorem Nemo culpa, id reprehenderit perspiciatis. Nemo culpa, id reprehenderit perspiciatis'
    }
]

// Get all the elements 
const img = document.getElementById('image');
const name = document.getElementById('name');
const position = document.getElementById('position');
const desc = document.getElementById('desc');

// Buttons
const prevBtn = document.querySelector('.review-card__prev-btn');
const nextBtn = document.querySelector('.review-card__next-btn');
const randBtn = document.querySelector('.review-card__rand-btn');

// Initial item
currentItem = 0;

// Listener on DOMContent
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

// Show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    position.textContent = item.position;
    desc.textContent = item.desc;
}

// Show next person
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// Show prev person
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

// Show random person
randBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})

