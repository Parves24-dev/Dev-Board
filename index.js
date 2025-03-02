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



    //   clear button
        document.getElementById('clear-btn').addEventListener('click', function () {
        document.getElementById('comment-box').innerText = "";
        })