export default class All {
    constructor() {
        this.init();
    }

    init() {
        let widgetOpen = document.querySelector('.widget-icon');
        let widgetSubMenu = document.querySelector('.wpml-ls-sub-menu');

        widgetOpen.addEventListener('click', (evt) => {
            widgetOpen.classList.toggle('widget-icon-open');
            widgetSubMenu.classList.toggle('wpml-ls-sub-menu-active');
        })
        /*Toc*/
        const tocShowNav = document.querySelector("nav.toc");
        if (tocShowNav) {
            tocShowNav.addEventListener("click", function (e) {
                if (
                    e.target.classList.contains("toc__show") ||
                    e.target.classList.contains("toc__title") ||
                    (e.target.tagName === "SPAN" && !e.target.classList.contains("sub-arrow"))
                ) {
                    const tocList = document.querySelector(".toc__list");
                    const tocShow = document.querySelector(".toc__show");
                    tocList.classList.toggle("toc__list_showed");
                    tocShow.classList.toggle("burger_active");

                }
            });
        }
        const faqItems = document.querySelectorAll(".toc__list_columns .level-1 > ol");
        if (faqItems) {
            faqItems.forEach((item) => {
                const arrowSub = document.createElement("span");
                arrowSub.classList.add("sub-arrow");
                item.parentElement.append(arrowSub);
                item.parentElement.addEventListener("click", function (e) {
                    if (e.target.classList.contains("sub-arrow")) {
                        item.parentElement.classList.toggle("show");
                    }
                });
            });
        }

        function hideFilter() {
            if (hideFilter.isRun) {
                return false;
            }
            document.querySelector('.filters').remove();
            hideFilter.isRun = true;
        }
        window.addEventListener('scroll', function () {
            if (this.scrollY >= 4600) {
                hideFilter();
            }
        });








        /*vhjfykt*/
        const strands = document.querySelectorAll(".christmas-tree ul");
        const duration = 3000;

        strands.forEach((strand, i) => {
            strand.style.transform = `rotateY(${
                -i / (strands.length * 2.4) + 0.2
            }turn) rotateX(22deg)`;

            const bulbs = strand.querySelectorAll(".christmas-tree li");
            bulbs.forEach((bulb, j) => {
                //bulb.style.scale = 1 + j*.02
                bulb.animate(
                    [
                        { background: "var(--back)" },
                        { background: "var(--back)", offset: 0.9 },
                        { background: "var(--fore)", offset: 0.95 },
                        { background: "var(--fore)" }
                    ],
                    {
                        duration,
                        delay:
                            (j * 2.25 * (((i + 1) * 2.5) / strands.length) * duration) /
                            bulbs.length -
                            3000,
                        iterations: Infinity,
                        easing: "cubic-bezier(0,.9,.5,1)"
                    }
                );
            });
        });

    }
}
