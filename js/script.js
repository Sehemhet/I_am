
// ADD SHADOW HEADER MENU FOR SCROLL PAGE
window.addEventListener('scroll', function() {
  if (pageYOffset > 255) {
    document.querySelector('.h').classList.add('act_shadow')
  } else {
    document.querySelector('.h').classList.remove('act_shadow')
  }
});


//ANIMATION ACTIVE
function animActiv(entry1) {
  entry1.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim_active');
    } else {
    change.target.classList.remove('anim_active');
    }
  });
};
let animOpt = { threshold: [0.01] };
let animAct = new IntersectionObserver(animActiv, animOpt);
let animItems = document.querySelectorAll('.anim_left,.anim_right,.anim_scale');
for (let el1 of animItems) {
  animAct.observe(el1);
};

//add loop for img
function enlargeImageOnClick() {
  const clickLoopImages = document.querySelectorAll('.clickLoop');

  clickLoopImages.forEach((image) => {
    image.addEventListener('click', function() {
      this.classList.toggle('clickLoop__active');
    });
  });
}

enlargeImageOnClick();