import '../scss/app.scss';

import All from "./all";
import PrimaryNav from "./primary-nav";



document.addEventListener('DOMContentLoaded', async () => {
    window.refs = {
        all: {
            init: () => new All()
        },
        primaryNav: {
            init: () => new PrimaryNav
        }
    }

    Object.keys(window.refs).forEach((ref) => {
        if (window.refs[ref].hasOwnProperty('init')) {
            window.refs[ref].class = window.refs[ref].init();
        }
    });
});
