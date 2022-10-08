
//====================== Navbar Close Start ========================

const navItems = document.querySelectorAll(".nav-item");
const navbarContent = document.querySelector(".navbar-collapse");
const navbarImg = document.querySelector(".navbar-img");

navItems.forEach((el) => {
  el.addEventListener("click", function () {
    navbarContent.classList.remove("show");
    navbarImg.classList.remove("active");
  });
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarImg.addEventListener("click", function () {
  navbarImg.classList.toggle("active");
});

//===================== Navbar Close End ==========================


//===================== Contact Us Start ==========================



document.querySelectorAll('.tab-2').forEach(el => {
  el.addEventListener('click', function() {
    document.querySelector('.content-one').classList.remove('active-tab');
    document.querySelector('.content-2').classList.add('active-tab');

  })
})


document.querySelector('.orrange-btn').addEventListener('click', function() {
    document.querySelector('.content-one').classList.remove('active-tab');
    document.querySelector('.content-2').classList.add('active-tab');
})


document.querySelector('.back').addEventListener('click', function() {
  document.querySelector('.content-one').classList.add('active-tab');
    document.querySelector('.content-2').classList.remove('active-tab');
})

//===================== Contact Us End ==========================


// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

// ====================== Help Center End =======================

/* ======================= Video Lazy Loading Start =========================== */

window.onload = function () {
  setTimeout(() => {
    var video = document.querySelector('.active-video');
   if(video.played) {
    function playVideo(videoSource, type) {
      var videoElm = document.querySelector('.active-video');
      var videoSourceElm = document.getElementById('video-sr'); 
       if (videoElm.paused) {
            videoElm.pause();
         } else {
          videoSourceElm.src = './assets/videos/desire_trip_video_2.mp4';
       videoSourceElm.type = 'video/mp4';
      
       
          videoElm.load();
        videoElm.play();
         }
        
       
      }

      playVideo()
   }

  }, 7000);
};

/* ======================= Video Lazy Loading End  =========================== */

/* ======================= Video Play Start =========================== */
//./assets/videos/desire_trip_video_2.mp4




var el = document.querySelector(".active-video");
var ppbutton = document.getElementById("play-btn");
var muted = document.getElementById("muted");
ppbutton.addEventListener("click", function () {
  if (el.paused) {
    el.play();
    ppbutton.src = './assets/images/pause-btn.svg'
  } else {
    el.pause();
    ppbutton.src = './assets/images/play.svg'
  }
});



muted.addEventListener("click", function () {
  if (el.muted === true) {
    el.muted = false;
    muted.src = './assets/images/unmute.svg'
  } else {
    el.muted = true;
    muted.src = './assets/images/muted.svg'
  }
});







fraction = 0.99;
function checkScroll() {

    
        var video = el;
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                ppbutton.src = './assets/images/play.svg'
                video.pause()
            } 

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

/* ======================= Video Play End  =========================== */
