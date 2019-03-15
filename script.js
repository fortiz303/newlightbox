// 'use strict';

var images = ['loaferssss.jpg', 'sun.jpg',
'sky0.jpg','galaxy.jpg',
'sky1.jpg','sky2.jpg','sky3.jpg'];

$(document).ready(function(){

  // $('#basketball').click(function(){
  //
  //   $('#lightbox').css('height','100%');
  //   $('#lightbox').css('width','100%');
  //   $('#lightbox').css('background-color','grey');
  //   $('#lightbox').css('display','block');
  //
  //   console.log('hi');
  //
  // $('#lightbox').click(function(){
  //
  //   $('#lightbox').css('display','none');
  // })
  // })

  var image;

  for (let i = 0; i < images.length; i++){

    let currentImage = images[i];
    var imageID = 'image' + i;
    // image = currentImage

    // $('body').append("<img id ='" + imageID + "' class='gallery' src ='images/" + currentImage + "'alt ='Image' />");
    $('body').append(`<img id='${imageID}' class='gallery' src='images/${currentImage}' alt='images'/>`);

    $("#" + imageID).click(function () {

      $('body').append(`<div id = 'lightbox'></div>`);
      $('#lightbox').css({

        'position': 'fixed',
        'top': '0',
        'left': '0',
        'text-align': 'center',
        'width': '100%',
        'height': '100%',
        'background-color': 'red',
        'display': 'block'
      });

      $('#lightbox').append(`<img id='${imageID}' class='gallery' src='images/${currentImage}' alt='images'/>`);

      $('#lightbox img').css('height','100%');

      $('#lightbox').click(function(){

        $('#lightbox').remove();

      })


      console.log('clicked' + i);

    });


  }

$(".gallery").css('width', '200px');
$(".gallery").css('margin-right', '10px')

});
