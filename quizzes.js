var quiz1 = [
    {
        question:"Remote data access, storage, software access, and collaboration techniques are all aspects of __________ computing.",
        answers: {
            a: "Cloud",
            b: "Physical",
            c: "Variable"
        },
        correctAnswer: "a"
    },
    {
        question: "A(n) _________ provides a secure, encrypted connection between remote users and local area networks.",
        answers: {
            a: "Remote desktop connection",
            b: "Virtual private network",
            c: "SSL encryption",
            d: "Virtual machine"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these is done by FTP",
        answers: {
            a: "Encyrption over transit",
            b: "Uploading and downloading files",
            c: "Monitoring network activity",
            d: "Connecting to web servers"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a common markup language that uses codes called tags to define the format and organization of web pages",
        answers: {
            a: "CSS",
            b: "js",
            c: "HTML",
            d: "PHP"
        },
        correctAnswer: "c"   
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(quiz1, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');
}


  function showResults(questions, quizContainer, resultsContainer){
    
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    
    var userAnswer = '';
    var numCorrect = 0;
    
    
    for(var i=0; i<questions.length; i++){

      
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      
      if(userAnswer===questions[i].correctAnswer){
        
        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '\n' + "Thank you for your participation!";
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}