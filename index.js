document.getElementById("move").onclick = function() {
    window.location.href = "explore.html";
};

const currentDate = new Date();
const changingDate = currentDate.toDateString(); 
document.getElementById("date").textContent = changingDate;





var completeButtons = document.querySelectorAll('#amarBtn');
var clearHistorySection = document.querySelector('#comment-box');

for (var i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', function() {
        
        var cardTitle = this.closest('.bg-sky-50').querySelector('h1').textContent;
    
        comment.classList.add('comment', 'p-3', 'border-b', 'border-dashed', 'border-gray-300');
        
        comment.innerHTML = '<strong>Completed Task:</strong> ' + cardTitle + ' <br> <span>Comment: Task completed successfully!</span>';
        
        clearHistorySection.appendChild(comment);
    });
}

const cardTitle = event.target.parentNode.parentNode.parentNode.querySelector('.card-title').innerText;

      const commentContainer = document.getElementById('comment-box');
      let commentDiv = document.createElement('div');
      commentDiv.style.marginTop = '10px'
      commentDiv.style.backgroundColor = 'lightgray'
      commentDiv.style.borderRadius = '10px'
      commentDiv.innerText = cardTitle + ' task complated at 1:32:34 AM';

      commentContainer.appendChild(commentDiv);


    //   clear button
        document.getElementById('clear-btn').addEventListener('click', function () {
        document.getElementById('comment-box').innerText = "";
        })