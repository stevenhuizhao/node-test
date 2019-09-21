const video = {
    director: 'abcd',
    title: "title",
    play: function() {
        console.log(this.title);
    },
    stop: setTimeout(function() {
       alert(this.director); 
    },3000),
};

video.play();

console.log(this);
console.log(video.stop);