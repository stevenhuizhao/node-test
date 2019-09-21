const video = {
    director: 'abcd',
    title: "title",
    play: function() {
        console.log(this.title);
    },
    stop: setTimeout(function() {
       console.log(this.director); 
    }),
};

video.play();

console.log(this);
console.log(video.stop);