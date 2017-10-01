import $ from 'jquery';
// import animatedHeadline from 'animated_headline';
// import {TweenMax} from "gsap";

class Carousel_core {

    constructor() {

        let self = this;

        self.slides = ['slide', 'slide', 'slide', 'slide'];
        self.current_index = 0;
        self.auto_play_interval;
        self.interval = 2;


        self.auto_play();

    }


    auto_play() {

        let self = this;

        clearInterval(self.auto_play_interval);

        self.auto_play_interval = setInterval(function () {


            self.update_current_index();

            $('#current-slide').text(self.current_index);

            // let item_interval = slides[current_index].settings.autoplay_speed + slides[current_index].settings.duration;

            // if (self.interval != item_interval) {
            //     run_interval(item_interval);
            // }

            // show_item({
            //     element: slides[current_index].element,
            //     duration: slides[current_index].settings.duration
            // });
            // hide_item({
            //     element: slides[get_prev_index(current_index)].element,
            //     duration: slides[current_index].settings.duration
            // });

        }, self.interval * 1000);
    }

    stop() {
        let self = this;




    }

    update_current_index() {

        let self = this;

        if (self.current_index == self.slides.length - 1) {
            self.current_index = 0;
        }

        else {
            self.current_index++;
        }
    }


}


let carousel_core = new Carousel_core();