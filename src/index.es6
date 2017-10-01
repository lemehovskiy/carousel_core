import $ from 'jquery';
// import animatedHeadline from 'animated_headline';
// import {TweenMax} from "gsap";

class Carousel_core {

    constructor() {

        let self = this;

        self.slides = ['slide', 'slide', 'slide', 'slide'];
        self.current_index = 0;
        self.play_interval;
        self.interval = 2;

        self.play();

    }


    play() {

        let self = this;

        clearInterval(self.play_interval);

        self.play_interval = setInterval(() => {

            self.go_to('forward');

        }, self.interval * 1000);
    }

    stop() {
        let self = this;

        clearInterval(self.play_interval);
    }

    next() {
        let self = this;

        self.go_to('forward');
    }

    prev() {
        let self = this;

        self.go_to('backward');
    }

    go_to(direction) {

        let self = this;

        if (direction == 'forward') {

            if (self.current_index == self.slides.length - 1) {
                self.current_index = 0;
            }

            else {
                self.current_index++;
            }
        }

        else if (direction == 'backward') {
            if (self.current_index == 0) {
                self.current_index = self.slides.length - 1;
            }

            else {
                self.current_index--;
            }
        }

        $('#current-slide').text(self.current_index);
    }
}

let carousel_core = new Carousel_core();


$('#stop-btn').on('click', () => {
    carousel_core.stop();
})

$('#play-btn').on('click', () => {
    carousel_core.play();
})

$('#next-btn').on('click', () => {
    carousel_core.next();

})

$('#prev-btn').on('click', () => {
    carousel_core.prev();
})