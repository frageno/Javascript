const postContainer = document.querySelector('.post-container-posts');
const postSpinner = document.querySelector('.post-spinner-container');

let limit = 5;
let page = 1;

async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}

async function showPosts(){
    const posts = await getPosts();

    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post-body');
        postEl.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-content">
                <p>${post.body}</p>  
            </div>
            <a class="post-read-more">Read more &Gt;</a>
        `;

        postContainer.append(postEl);
    })
}

function showSpinner() {
    postSpinner.classList.add('active');

    setTimeout(() => {
        postSpinner.classList.add('active');
        setTimeout(() => {
            page++;
            showPosts();
        }, 500);
    }, 1000);
}

showPosts();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 5){
        showSpinner();  
    }
})