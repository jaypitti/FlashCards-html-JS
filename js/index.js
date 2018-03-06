let questions = []
let answers = []
let i = 0;

const CreateCard = (question, answer) => {
  i++;
  questions[i] = question;
  answers[i] = answer;
  card = `${question}`
  $('#flashcards').append(`<div data-id="${i}" class="card blue-grey darken-1 col s12 m4 offset-s1">
    <div class="card-content white-text">
      <span class="card-title">${card}</span>
    </div>
    <div class="card-action">
      <a href="#" data-id="${i}" id="show-answer">Show Answer</a>
    </div>
   </div>`)

};
$(document).ready(function() {
  $(document).on('submit', '#flash-form', function(e) {
    console.log("test");
    e.preventDefault();
    CreateCard((document.getElementById('question').value),(document.getElementById('answer').value))
  });
});

$(document).on('click', '#show-answer', function(e) {
  console.log("SHIT")
  let ID = $(this).data("id")
  let li = $("#flashcards").find("[data-id='" + ID + "']");
  $(li).replaceWith(`<div data-id="${ID}" class="card blue-grey darken-1 col s12 m4 offset-s1">
    <div class="card-content white-text">
      <span class="card-title">${card}</span>
    </div>
      <p>${answers[ID]}</p>
   </div>`)
});
