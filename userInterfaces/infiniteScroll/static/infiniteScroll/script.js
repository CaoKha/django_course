// Start with first post
let counter = 1;

// Load 20 posts at a time
const quality = 20;

// When DOM loads, render the first 20 posts
document.addEventListener('DOMContentLoaded', load);

// If scrolled to bottom, load the next 20 posts
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
};

// Load next set of posts
function load() {
    // Set start and end post numbers, and update counter
    const start = counter;
    const end = start + quality - 1;
    counter = end + 1;

    // Get new posts and add posts
    fetch(`/infiniteScroll/posts?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
            data.posts.forEach(add_post);
        })
};

function add_post(contents) {
    // Create new post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${contents} <button class='hide'>Hide</button>`;

    // Add post to DOM
    document.querySelector('#posts').append(post);
};

// If hide button is clicked, delete the post
document.addEventListener('click', event => {
    // FInd what was clicked on
    const element = event.target;

    // Check if the user clicked on a hide button
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventList;
    }
});

