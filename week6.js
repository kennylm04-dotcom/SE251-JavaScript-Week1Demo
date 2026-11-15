const posts = document.getElementById('posts');
const input = document.getElementById('post-input');


if (localStorage.getItem('posts')) {
    JSON.parse(localStorage.getItem('posts')).forEach(function (html) {
        posts.innerHTML += html;
    });
}

function savePosts() {
    let array = Array.from(document.querySelectorAll('.post')).map(function (p) {
        return p.outerHTML;
    });
    localStorage.setItem('posts', JSON.stringify(array));
}

// Add a post
document.getElementById('add-btn').addEventListener('click', function () {
    if (input.value.trim() === '') return;

    let post = document.createElement('div');
    post.setAttribute('class', 'post');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    let time = document.createElement('time');
    time.textContent = new Date().toLocaleString();

    let p = document.createElement('p');
    p.textContent = input.value;

    post.append(checkbox, time, p);
    posts.append(post);

    input.value = '';
    savePosts();
});

// Select all
document.getElementById('select-all').addEventListener('change', function () {
    document.querySelectorAll('.post input').forEach(function (box) {
        box.checked = document.getElementById('select-all').checked;
    });
});

// Delete
document.getElementById('delete-btn').addEventListener('click', function () {
    if (posts.classList.contains('deleting')) {
        document.querySelectorAll('.post input').forEach(function (box) {
            if (box.checked) box.parentElement.remove();
        });
        posts.classList.remove('deleting');
        document.getElementById('select-all').checked = false;
        savePosts();
    } else {
        posts.classList.add('deleting');
    }
});