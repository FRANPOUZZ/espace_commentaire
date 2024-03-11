
document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    test();
  });
});

function addComment (){

  let commentList = document.getElementById("comment-list");
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let messageInput = document.getElementById("message");
  let errorMessage = document.getElementById("error-message");
  
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let messageText = messageInput.value;

  if(!firstName, !lastName, !messageText){
    errorMessage.style.display = "block";
  }
  else{
    errorMessage.style.display = "none";

    let divComment = document.createElement("div");
    divComment.className = "flex space-x-4 text-sm text-gray-500";
    let divComment2 = document.createElement("div");
    divComment2.className = "flex-1 py-10 border-t border-gray-200";
    let nameComment = document.createElement("h3");
    nameComment.className = "font-medium text-gray-900";
    let divCommentMessage = document.createElement("div");
    divCommentMessage.className = "prose prose-sm mt-4 max-w-none text-gray-500";
    let p = document.createElement("p");
    let nameMessage = document.createTextNode(firstName + " " + lastName);
    let messageTextNode = document.createTextNode(messageText);
    
    nameComment.appendChild(nameMessage);
    p.appendChild(messageTextNode);
    divCommentMessage.appendChild(p);
    divComment.appendChild(nameComment);
    divComment.appendChild(divCommentMessage);
    commentList.appendChild(divComment);

    firstNameInput.value = "";
    lastNameInput.value = "";
    messageInput.value = "";
  }
}
