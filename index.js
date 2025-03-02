document.getElementById("move").onclick = function() {
    window.location.href = "explore.html";
};

const currentDate = new Date();
const changingDate = currentDate.toDateString(); 
document.getElementById("date").textContent = changingDate;


document.getElementById('color').addEventListener('click', function themes() {
    const randomColor = '#' + Math.floor(Math.random() * 1234567)
   
    document.body.style.backgroundColor = randomColor;
})











// Get all the "Completed" buttons inside the cards
var completeButtons = document.querySelectorAll('.btn.bg-sky-500');

// Get the Clear History section to add the comment
var clearHistorySection = document.querySelector('.col-span-1.bg-white');

// Loop through each "Completed" button
for (var i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', function() {
        
        // Get the card title for the clicked button
        var cardTitle = this.closest('.bg-sky-50').querySelector('h1').textContent;
        
        // Create a new comment element for the Clear History section
        var comment = document.createElement('div');
        comment.classList.add('comment', 'p-3', 'border-b', 'border-dashed', 'border-gray-300');
        
        // Add some content to the comment
        comment.innerHTML = '<strong>Completed Task:</strong> ' + cardTitle + ' <br> <span>Comment: Task completed successfully!</span>';
        
        // Append the comment to the Clear History section
        clearHistorySection.appendChild(comment);
    });
}



    //   clear button
        document.getElementById('clear-btn').addEventListener('click', function () {
        document.getElementById('comment-box').innerText = "";
        })