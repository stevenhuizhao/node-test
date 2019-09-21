const video = {
    title: "title",
    play: function() {
        console.log(this);
    },
    stop: setTimeout(function() {
       console.log(this); 
    }),
};

video.play();

console.log(this);
console.log(video.stop);