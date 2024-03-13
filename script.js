
document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    addComment();
  });
});

let commentList = document.getElementById("comment-list");
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let messageInput = document.getElementById("message");
let errorMessage = document.getElementById("error-message");

function getValue(){
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let messageText = messageInput.value;
  return {firstName, lastName, messageText};
}

function createComment(firstName, lastName, messageText) {
  errorMessage.style.display = "none";

 let divComment = document.createElement("div");
 divComment.className = "flex space-x-4 text-sm text-gray-500";

 let previousComment = document.querySelector(".flex-1.py-10.border-t.border-gray-200");
 let newComment = previousComment.cloneNode(true);

 let nameElement = newComment.querySelector("h3");
 nameElement.textContent = firstName + " " + lastName;

 let messageElement = newComment.querySelector("p");
 messageElement.textContent = messageText;

 divComment.appendChild(newComment);
 commentList.appendChild(divComment);
}

function reset(){
  firstNameInput.value = "";
  lastNameInput.value = "";
  messageInput.value = "";
}

function addComment(){
  
  let {firstName, lastName, messageText} = getValue();

  if(!firstName.trim()|| !lastName.trim()|| !messageText.trim()){
    errorMessage.style.display = "block";
  }
  else{
    createComment(firstName, lastName, messageText);
    reset();
  }
};