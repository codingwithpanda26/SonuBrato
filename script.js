$(document).ready(function() {
  $(window).on('scroll', function() {
    $('.fade-in-on-scroll1').each(function() {
      var elementTop = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();

      if (elementTop < windowBottom) {
        $(this).addClass('in-view');
      }
    });
  });
});

$(document).ready(function() {
  $(window).on('scroll', function() {
    $('.fade-in-on-scroll').each(function() {
      var elementTop = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();

      if (elementTop < windowBottom) {
        $(this).addClass('in-view');
      }
    });
  });
});

$(document).ready(function() {
  $(window).on('scroll', function() {
    $('.fade-in-on-scroll0').each(function() {
      var elementTop = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();

      if (elementTop < windowBottom) {
        $(this).addClass('in-view');
      }
    });
  });
});

function flipImage() {
  const image = document.getElementById("myImage");
  const canvas = document.getElementById("myCanvas");
  img.src = 'E:\CODING\ADITYA PANDA CODING\neon\MAIN\PANDA_CREATION-removebg-preview.png';
  
  let isFlipped = false;
  
  img.onload = function() {
    canvas.addEventListener('click', function() {
      if (!isFlipped) {
        ctx.save();
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.restore();
        isFlipped = true;
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        isFlipped = false;
      }
    });
  }
};