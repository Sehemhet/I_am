//Увеличиваем объект с классом clickLoop присваивая к нему clickLoop__active
function enlargeImageOnClick() {
  const clickLoopImages = document.querySelectorAll('.clickLoop');

  clickLoopImages.forEach((element) => {
    element.addEventListener('click', function() {
      this.classList.toggle('clickLoop__active');
    });
  });
}

enlargeImageOnClick();