
//var audio = document.getElementById('easyAudio');
var radios = document.querySelectorAll(".radio-btn");
radios.forEach(function(rad) {
   rad.addEventListener("click", function() {
      radios.forEach(function(el) {el.classList.remove('active')});
      this.classList.add('active');
   });
})

var btn = document.getElementById('easyButton');
btn.addEventListener("click", function () {
    var audio = document.querySelector(".radio-btn.active audio");
    audio.play();
});