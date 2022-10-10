// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("grid-item");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// for (var i = 0; i < imgs.length; i++) {

//   imgs.item(i).onclick = function(){
//     modal.style.display = "block";
//     var imgsrc = this.src;
//     imgsrc.replace('/thumbs/', '/images/');
//     imgsrc.replace('_thumb.png', '.png');
//     console.log(imgsrc);
//     modalImg.src = imgsrc;
//     captionText.innerHTML = this.alt;
//   }

// }

function openModal(src) {
  modal.style.display = "block";

  var gridContainer = src.parentNode.parentNode;

  var firstElement = console.log(gridContainer.firstElementChild.firstElementChild);

  // var swiperSlideItems = [];

  swiper.virtual.removeAllSlides()

  var slideIndex = 0;

  var imgsrcArray = [];

  for (var i = 1; i < gridContainer.childElementCount * 2; i += 2) {

    if (gridContainer.childNodes[i].firstElementChild == src) {
      slideIndex = (i - 1) / 2
      // console.log(slideIndex)
    }

    // swiperSlideItems.push(gridContainer.childNodes[i]);
    var imgsrc = gridContainer.childNodes[i].firstElementChild.src
    imgsrc = imgsrc.replace('/thumbs/', '/images/');
    imgsrc = imgsrc.replace('_thumb.png', '.png');
    imgsrc = imgsrc.replace('_thumb.jpg', '.jpg');
    imgsrcArray.push('<div class="swiper-slide"><img loading="lazy" class="easeload-gallery" onload="this.style.opacity=1" src=' + imgsrc + '></div>');
    // console.log(imgsrc)

  }

  swiper.virtual.appendSlide(imgsrcArray)

  // for (var i = 1; i < imgsrcArray.length; i ++) {

  //   swiper.virtual.appendSlide('<div class="swiper-slide"><img loading="lazy" class="easeload-gallery" onload="this.style.opacity=1" src=' + imgsrcArray[i] + '></div>')

  // }

  swiper.slideTo(slideIndex, 0, false);

  // console.log(swiperSlideItems)


  // var swiperSlideItem = document.createElement("div");
  // swiperSlideItem.className = "swiper-slide"
  // document.getElementsByClassName("swiper-wrapper")[0].appendChild(swiperSlideItem);

  // var imgsrc = src;
  // imgsrc = imgsrc.replace('/thumbs/', '/images/');
  // imgsrc = imgsrc.replace('_thumb.png', '.png');
  // imgsrc = imgsrc.replace('_thumb.jpg', '.jpg');
  // console.log(imgsrc);
  // modalImg.src = imgsrc;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

modal.onclick = function () {
  modal.style.display = "none";
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  virtual: {
    enabled: true
  }
});
