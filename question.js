const btns=document.querySelectorAll(".questionbtn");
const answer=document.querySelectorAll(".answer");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // to know which question is clicked.
        const question=e.currentTarget.parentElement.parentElement;//parentElement: 會顯示上一層的div,可以知道現在的element在哪一區，若想知道在上一層就再加一個parentElement.
        question.classList.toggle("showtext");
        
        setTimeout(function(){
            answer.classList.add("fade");
        },10)
    });
});
