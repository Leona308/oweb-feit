function redirectToPocetna() {
    window.location.href = "pocetna.html";
}

function addComment1() {
    var commentText = document.getElementById('comment1').value;
    var commentElement = document.createElement('div');
    commentElement.className = 'comment1';
    commentElement.textContent = commentText;
    document.getElementById('comment-section1').appendChild(commentElement);
    document.getElementById('comment1').value = '';
    }

function addComment2() {
    var commentText = document.getElementById('comment2').value;
    var commentElement = document.createElement('div');
    commentElement.className = 'comment2';
    commentElement.textContent = commentText;
    document.getElementById('comment-section2').appendChild(commentElement);        document.getElementById('comment1').value = '';
    }

function addComment3() {
    var commentText = document.getElementById('comment3').value;
    var commentElement = document.createElement('div');
    commentElement.className = 'comment3';
    commentElement.textContent = commentText;
    document.getElementById('comment-section3').appendChild(commentElement);
    document.getElementById('comment1').value = '';
    }
