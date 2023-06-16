const fixo = document.querySelector('.fixo');
const autor = document.querySelectorAll('.autor');
const toTop = document.querySelector(".to-top");
var button = document.getElementById("button-menu");
var icon = button.querySelector("i");

function header() {
    if (window.pageYOffset > 0) {
        for (let index = 0; index < autor.length; index++) {
            autor[index].classList.remove('text-white');
        }
      fixo.classList.add('bg-white','fixo-scroll');
    } else {
        if(!icon.classList.contains("fa-xmark")){
            for (let index = 0; index < autor.length; index++) {
                autor[index].classList.add('text-white');
            }
          fixo.classList.remove('bg-white','fixo-scroll');
        }
        
    }
    
}
header()
window.addEventListener('scroll', function() {
    header()
    if(window.pageYOffset > 0){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});



  button.addEventListener("click", function() {
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

      if (!fixo.classList.contains("bg-white")) {
        fixo.classList.add("bg-white");
      }

      var autorElements = document.getElementsByClassName("autor");
      for (var i = 0; i < autorElements.length; i++) {
        if (autorElements[i].classList.contains("text-white")) {
          autorElements[i].classList.remove("text-white");
        }
      }
    } else if (icon.classList.contains("fa-xmark")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

      if (fixo.classList.contains("bg-white") && window.pageYOffset == 0) {
        fixo.classList.remove('bg-white','fixo-scroll');
      }

      for (var i = 0; i < autor.length; i++) {
        if (window.pageYOffset == 0) {
            autor[i].classList.add("text-white");
        }
        
      }
    }
  });