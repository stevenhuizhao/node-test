const video = {
    director: 'abcd',
    title: "title",
    play: function() {
        console.log(this.title);
    },
    stop: setTimeout(() => {
       alert(this.director); 
    },2000),
};

video.play();

console.log(this);
console.log(video.stop);