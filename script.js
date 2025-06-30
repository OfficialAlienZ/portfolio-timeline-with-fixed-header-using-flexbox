// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("grid-item");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

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

  swiper.slideTo(slideIndex, 0, false);

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

function toggleTimeline() {
  const toggleBtn = document.getElementById('toggleViewBtn');
  const timeline = document.getElementById("timeline");
  const projects = document.getElementById("projects");

  const subtitleTimeline = document.getElementById('subtitle-timeline');
  const subtitleProject = document.getElementById('subtitle-project');

  const isCurrentlyTimeline = !toggleBtn.classList.contains('projects');

  if (isCurrentlyTimeline) {
    // Switch to project view
    toggleBtn.classList.add('projects');
    timeline.style.display = "none";
    projects.style.display = "flex";
    subtitleTimeline.style.display = "none";
    subtitleProject.style.display = "block";
  } else {
    // Switch to timeline view
    toggleBtn.classList.remove('projects');
    timeline.style.display = "table";
    projects.style.display = "none";
    subtitleTimeline.style.display = "block";
    subtitleProject.style.display = "none";
  }

  document.querySelector('.left').classList.toggle('active', isCurrentlyTimeline);
  document.querySelector('.right').classList.toggle('active', !isCurrentlyTimeline);

}