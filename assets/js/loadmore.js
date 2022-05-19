$(function () {
    loadmore();

    function loadmore() {
        const btn = $(".js-loadmore-btn");
        const boxLoadEl = $(".js-loadmore-wrap");
        const arrayItemsEl = [...$(".js-data-loadmore").children()];

        // Current Index
        let currentIdex = 0;

        function load() {
            let maxResult = 3;
            for (let i = 0; i < maxResult; i++) {
                if (currentIdex + maxResult >= arrayItemsEl.length) {
                    btn.hide();
                }
                boxLoadEl.append(arrayItemsEl[i + currentIdex]);
            }
            currentIdex += maxResult;
        }
        load();

        // Event Click LoadMore
        btn.on("click", function () {
            load();
        });
    }
});