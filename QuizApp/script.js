const questions = [
    {
        question :"What is Largest Animal in The World?",
        answers:[
            {text:'shark',correct:false},
            {text:'Blue Whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false},
        ]
    },
    {
        question :"What is Largest Animal in The World?",
        answers:[
            {text:'shark',correct:false},
            {text:'Blue Whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false},
        ]
    },
    {
        question :"What is Largest Animal in The World?",
        answers:[
            {text:'shark',correct:false},
            {text:'Blue Whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false},
        ]
    },
    {
        question :"What is Largest Animal in The World?",
        answers:[
            {text:'shark',correct:false},
            {text:'Blue Whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false},
        ]
    }
];
let questionelement = document.getElementById('question');
let answerbtn = document.getElementById('ans');
let nextbtn = document.getElementById('next');

let currentqueindex = 0;
let score = 0;

function startQuiz(){
    reset();
    currentqueindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
let currentque = questions[currentqueindex];
let queno = currentqueindex+1;
questionelement.innerHTML = queno+"." + currentque.question ;


currentque.answers.forEach(ans=>{
    const button = document.createElement('button');
    button.innerHTML = ans.text;
    button.classList.add('btn');
    answerbtn.appendChild(button);

    
   
    console.log(button.dataset.correct);
})

}
function reset(){
    nextbtn.style.display = 'none';
    while(answerbtn.firstChild)
    {
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
startQuiz();
nextbtn.addEventListener('click',function(){
    currentqueindex++;
    
    startQuiz();
})


