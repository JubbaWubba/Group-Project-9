// taken from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL#javascript
// turns the given file into a picture
function previewFile() {
  const preview = document.getElementById('outputimg');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    // convert image file to base64 string
    //After Image
    preview.src = reader.result;
    //Before Image
    //creates img elelment
    var beforeImgElement = document.createElement('img');
    //changes the src of the element to uploaded file src
    beforeImgElement.src = reader.result;
    //appends new img element to before div
    document.getElementById('before').appendChild(beforeImgElement);
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}

//before image diplay


// A function added to the randomizer button that adds all the randomized elements
$("#imageInput").on("input", (function(){

    // sets the img into a canvas that can now be used to be editing, as well as resize the image keeping the original ratio

    Caman("#outputimg", function () {
    // resize the img
    this.resize({
      width: 600
    });
    this.render()
});



// assigns the slider inputs into Variables
// NEED TO FIND OUT HOW TO GET SLIDER VARIABLE
  var pic_saturation = $("#img_Saturation");
  var pic_exposure = $("#img_Exposure");
  var pic_contrast = $("#img_Contrast");
  var pic_brightness = $("#img_brightness");
  var pic_hue = $("#img_hue");
  console.log(pic_saturation)

 $("#img_Saturation").on("input", function(){
  $("#Saturation_val").html(pic_saturation.val());
 });

 $("#img_Exposure").on("input", function(){
  $("#Exposure_val").html(pic_exposure.val());
 });

 $("#img_brightness").on("input", function(){
  $("#Brightness_Val").html(pic_brightness.val());
 });

 $("#img_Contrast").on("input", function(){
  $("#Contrast_Val").html(pic_contrast.val());
 });

 $("#img_hue").on("input", function(){
  $("#Hue_Val").html(pic_hue.val());
 });

// changes variables to slider
// Currently Testing since it dosen't work, thats why I just put the variables to 50 except saturation for testing purposes
  $("#randomize_me").click(function(){
    Caman("#outputimg", function () {
    this.saturation(pic_saturation.val());
    this.exposure(pic_exposure.val());
    this.contrast(pic_contrast.val());
    this.brightness(pic_brightness.val());
    this.hue(pic_hue.val());
    this.render()
  });
});


// adds randomization button (Works!)
  // on click, randomizes picture
  $("#random_var").click(function(){
    Caman("#outputimg", function () {
    this.saturation(Math.random() * (50 - (-50))+(-50));
    this.exposure(Math.random() * (10 - (-10))+(-10));
    this.contrast(Math.random() * (5 - (-5)) + (-5));
    this.brightness(Math.random() * (10 - (-10)) + (-10));
    this.hue(Math.random() * (20 - (-20)) + (-20));
    this.render()
  });
});

}));
