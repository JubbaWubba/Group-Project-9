// taken from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL#javascript
// turns the given file into a picture
function previewFile() {
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
  $(this).parent().append('<input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_Saturation">');
  $(this).parent().append('<p> Exposure Slider </p>');
  $(this).parent().append('<input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_Exposure">');
  $(this).parent().append('<p> Contrast Slider </p>');
  $(this).parent().append('	 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_Contrast">');
  $(this).parent().append('<p> Shadow Slider </p>');
  $(this).parent().append('		 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_brightness">');
  $(this).parent().append('<p> Highlight Slider </p>');
  $(this).parent().append('		 <input type ="range" min = "-100" max="100" step ="1" value="0"  id="img_hue">');

  // randomizer button
  $(this).parent().append('	<p>	 <button id = "randomize_me"> Press me apply changes </button> </p>');



// assigns the slider inputs into Variables
// NEED TO FIND OUT HOW TO GET SLIDER VARIABLE
  var pic_saturation = $("#img_Saturation");
  var pic_exposure = $("#img_Exposure");
  var pic_contrast = $("#img_Contrast");
  var pic_brightness = $("#img_brightness");
  var pic_hue = $("#img_hue");
  console.log(pic_saturation)


// changes variables to slider
// Currently Testing since it dosen't work, thats why I just put the variables to 50 except saturation for testing purposes
  $("#randomize_me").click(function(){
    Caman("#outputimg", function () {
    this.saturation(pic_saturation.value);
    this.exposure(50);
    this.contrast(50);
    this.brightness(50);
    this.hue(50);
    this.render()
  });
});


// adds randomization button (Works!)
  $(this).parent().append('<p>	 <button id = "random_var"> Randomize </button> </p>');
  // on click, randomizes picture
  $("#random_var").click(function(){
    Caman("#outputimg", function () {
    this.saturation(Math.random() * (50 - (-50))+50);
    this.exposure(Math.random() * (10 - (-10))+10);
    this.contrast(Math.random() * (5 - (-5)) + 5);
    this.brightness(Math.random() * (10 - (-10)) + 10);
    this.hue(Math.random() * (20 - (-20)) + 20);
    this.render()
  });
});

  });
