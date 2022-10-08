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

function openModal(src){
  modal.style.display = "block";
  var imgsrc = src;
  imgsrc = imgsrc.replace('/thumbs/', '/images/');
  imgsrc = imgsrc.replace('_thumb.png', '.png');
  imgsrc = imgsrc.replace('_thumb.jpg', '.jpg');
  console.log(imgsrc);
  modalImg.src = imgsrc;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}