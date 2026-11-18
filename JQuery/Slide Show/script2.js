$(document).ready(function(){
    
    var autoPlayInterval = null;
    var isPlaying = true;

    // Function to start automatic slideshow
    function startAutoPlay() {
        autoPlayInterval = setInterval(function(){
            nextSlide();
        }, 3000); // Transitions every 3 seconds
    }

    // Function to stop automatic slideshow
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Start auto-play when page loads
    startAutoPlay();

    // Toggle button click handler
    $("#toggle").click(function(){
        if(isPlaying) {
            stopAutoPlay();
            $(this).text("Play");
            isPlaying = false;
        } else {
            startAutoPlay();
            $(this).text("Pause");
            isPlaying = true;
        }
    });

});