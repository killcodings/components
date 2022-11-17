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
    }
}
