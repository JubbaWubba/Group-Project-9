// taken from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL#javascript
// turns the given file into a picture
function previewFile() {
  console.log("hi")
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}




// A function added to the randomizer button that adds all the randomized elements
$("#randomizer_img").click(function(){

    // sets the img into a canvas that can now be used to be editing, as well as resize the image keeping the original ratio

    Caman("#outputimg", function () {
    // resize the img
    this.resize({
      height: (this.height / 4),
      width: (this.width /4)
    });
    this.render()
});
// appends the rest of the randomizer sliders
  $(this).parent().append("<p> Saturation Slider </p>");
  $(this).parent().append("<input type ='range' min = ''-100' max='100' step ='1' value='0'  id='img_Saturation'>");
  $(this).parent().append('<p> Exposure Slider </p>');
  $(this).parent().append('<input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_Exposure">');
  $(this).parent().append('<p> Contrast Slider </p>');
  $(this).parent().append('	 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_Contrast">');
  $(this).parent().append('<p> Shadow Slider </p>');
  $(this).parent().append('		 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_brightness">');
  $(this).parent().append('<p> Highlight Slider </p>');
  $(this).parent().append('		 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_hue">');


// assigns the slider inputs into Variables
// NEED TO FIND OUT HOW TO GET SLIDER VARIABLE
  console.log($("#img_saturation").val());
  var pic_saturation = $("#img_saturation");
  var pic_exposure = $("#img_Exposure");
  var pic_contrast = $("#img_Contrast");
  var pic_brightness = $("#img_brightness");
  var pic_hue = $("#img_hue");


// changes variables to slider
// Currently Testing since it dosen't work, thats why I added temp values of 50
//   Caman("#outputimg", function () {
//   this.saturation(pic_saturation);
//   this.exposure(50);
//   this.contrast(50);
//   this.brightness(50);
//   this.hue(50);
//   this.render()
// });


// adds randomization button
  $(this).parent().append('<p>	 <button id = "random_var"> Press me once you have your image </button> </p>');
  // on click, randomizes picture
  $("#random_var").click(function(){
    Caman("#outputimg", function () {
    this.saturation(Math.random() * (50 - (-50))+50);
    this.exposure(Math.random() * (50 - (-50))+50);
    this.contrast(Math.random() * (50 - (-50)) + 50);
    this.brightness(Math.random() * (50 - (-50)) + 50);
    this.hue(Math.random() * (50 - (-50)) + 50);
    this.render()
  });
});

  });
