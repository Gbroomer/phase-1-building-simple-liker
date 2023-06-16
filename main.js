// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let err = document.getElementById("modal")
let errMessage = document.getElementById("modal-message")
// Your JavaScript code goes here!
document.addEventListener("click", function(e){
  mimicServerCall()
    .then(res => {
      let eventTar = e.target
      if (eventTar.className === "like-glyph") {
        eventTar.className = "activated-heart"
        eventTar.textContent = FULL_HEART
      } else if (eventTar.className === "activated-heart") {
        eventTar.className = "like-glyph"
        eventTar.textContent = EMPTY_HEART
      }
    })
    .catch(() => {
        if (err.className === "hidden") {
          err.className = ""
          errMessage.textContent = "Error Loading Server"
          setTimeout(() => {
            err.className = "hidden"
            errMessage.textContent = ""
          }, 3000);
        }
    })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
