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



    
       
    let completeButtons = document.querySelectorAll('.coco-card');
    let clearHistorySection = document.querySelector('.comment-aside');
    const button = document.getElementById("amarBtn");


    for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', function(){
        
        alert("Completed the task?");


        button.disabled = true;
        button.style.backgroundColor = 'gray';
    

    

        const reCounterElement = document.getElementById("rCounter");
        

        let reCounter = parseInt(reCounterElement.innerText);
        reCounter--;
        reCounterElement.textContent = '0'+reCounter;

        
        
        const counterElement = document.getElementById("counter");
        let counter = parseInt(counterElement.innerText);
        counter++;
        counterElement.textContent = counter;



        
    
        var cardTitle = this.closest('.get-title').querySelector('h1').textContent;
        
        let comment = document.createElement('div');
        comment.id='newDiv';
        comment.classList.add('comment', 'p-3', 'border-b', 'border-dashed', 'border-gray-300');
    
        comment.innerHTML = cardTitle + ' Task completed successfully at ' + currentDate.toLocaleTimeString();
       
        let father= clearHistorySection.appendChild(comment);
        const parent=document.getElementById('holeComment')
        parent.appendChild(father);
        

    });
}

//   clear button
    document.getElementById('clear-btn').addEventListener('click', function () {
    
    document.getElementById('holeComment').innerText = "";
    })
