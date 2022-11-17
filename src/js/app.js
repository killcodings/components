import '../scss/app.scss';

import All from "./all";
import PrimaryNav from "./primary-nav";
import TopButton from "./top-button";



import Swipers from "./swipers";



document.addEventListener('DOMContentLoaded', async () => {
    window.refs = {
        all: {
            init: () => new All()
        },
        primaryNav: {
            init: () => new PrimaryNav
        },
        swipers: {
            init: () => new Swipers
        },
        topButton: {
            init: () => new TopButton
        }
    }

    Object.keys(window.refs).forEach((ref) => {
        if (window.refs[ref].hasOwnProperty('init')) {
            window.refs[ref].class = window.refs[ref].init();
        }
    });
});
