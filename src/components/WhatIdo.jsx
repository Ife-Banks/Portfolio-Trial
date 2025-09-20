import { useEffect } from "react";

const Job = () => {
  useEffect(() => {
    // Load ElectricBlaze script
    const script = document.createElement("script");
    script.src = "https://s.electricblaze.com/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    // --- Hack: Force infinite loop behavior ---
    const observer = new MutationObserver(() => {
      const widget = document.querySelector(".electricblaze-id-2UhxFqu");

      if (widget) {
        // Example hack: detect "rewind" class/state and skip back to first frame
        // (Adjust selectors if ElectricBlaze uses different structure)
        const slides = widget.querySelectorAll(".eb-slide");
        if (slides.length > 0) {
          const lastSlide = slides[slides.length - 1];

          // Watch when the last slide becomes active
          if (lastSlide.classList.contains("active")) {
            setTimeout(() => {
              slides[0].scrollIntoView({ behavior: "smooth", inline: "start" });
            }, 500); // wait a little for transition
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  return <div className="electricblaze-id-2UhxFqu"></div>;
};

export default Job;
//  