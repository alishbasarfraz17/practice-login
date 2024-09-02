document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const content = postContent.value.trim();
        if (content) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.textContent = content;

            postList.prepend(postElement);
            postContent.value = '';
        }
    });
});
