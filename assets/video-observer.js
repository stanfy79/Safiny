      let video_f = document.querySelector("#footer-vid");
      
      // Sets auto-pausing of the video_f
      let isPaused_f = false;
      // To autoplay when visible
      let observer_f = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {

            if (entry.intersectionRatio != 1 && !video_f.paused) {
              video_f.pause();
              isPaused_f = true;
            } else if (isPaused_f) {
              video_f.play();
              isPaused_f = false;
            }
          });
        },
        { threshold: 0.3 }
      );
      observer_f.observe(video_f);