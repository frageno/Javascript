let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');

inputBox.onkeyup = (e) => {
    let userData = e.target.value; // user entered data
    let emptyArray = [];

    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user char to lowecase and return only these woord which are comp with user typed
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        // if(e.which == 32){
        //     emptyArray = suggestions.push(inputBox.value);
        //     console.log(emptyArray);
        //     console.log(suggestions);
        //     inputBox.value = '';
        // }

        let allList = suggBox.querySelectorAll('li');
        for (let i = 0; i<  allList.length; i++){
            allList[i].setAttribute('onclick', 'select(this)');
        }
    }else {
        searchWrapper.classList.remove('active');
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove('active');
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';
    }else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}