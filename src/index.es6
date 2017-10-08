import $ from 'jquery';
// import animatedHeadline from 'animated_headline';
// import {TweenMax} from "gsap";

class Carousel_core {

    constructor(options) {

        let self = this;

        self.slides = ['slide', 'slide', 'slide', 'slide'];
        self.current_index = 0;
        self.play_interval;
        self.interval = 2;

        self.slides_count = self.slides.length;

        if (options.pagination) {
            self.pagination(options.pagination);
        }
        self.play();
    }

    pagination(pagination_el) {

        let self = this;
        let counter = 0;

        let $pagination_el = $(pagination_el);

        for (let i = 0; i <  self.slides_count; i++) {
            $pagination_el.append('<span>'+ counter++ +'</span>')
        }

        $pagination_el.on('click', 'span', function(){
           self.go_to_index($(this).index())
        });
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

    go_to_index(index) {
        let self = this;


        self.current_index = index;

        $('#current-slide').text(self.current_index);
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

let carousel_core = new Carousel_core({
    pagination: '.pagination'
});


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