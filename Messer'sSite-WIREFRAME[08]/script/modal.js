let modalContainer = document.querySelector(".modal-container")
let closeBtn = document.querySelector(".close-btn")
let closeBtn2 = document.querySelector(".close-btn2")

  closeBtn.onclick = function(){
    modalContainer.style.display = "none"
  }

  closeBtn2.onclick = function(){
    modalContainer.style.display = "none"
  }
  
  window.onclick = function(e){
    if(e.target == modalContainer){
      modalContainer.style.display = "none"
    }
  }