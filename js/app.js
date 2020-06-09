
/*----------------------------------------------DATA----------------------------------------------*/
/**
 * Hardcode data contains cards details.
 */
const cardData = [
    {
        id: "1",
        text: "1",
        bgColor: "#6F98A8"
    },
    {
        id: "2",
        text: "2",
        bgColor: "#2B8EAD"
    },
    {
        id: "3",
        text: "3",
        bgColor: "#2F454E"
    },
    {
        id: "4",
        text: "4",
        bgColor: "#2B8EAD"
    },
    {
        id: "5",
        text: "5",
        bgColor: "#2F454E"
    },
    {
        id: "6",
        text: "6",
        bgColor: "#BFBFBF"
    },
    {
        id: "7",
        text: "7",
        bgColor: "#BFBFBF"
    },
    {
        id: "8",
        text: "8",
        bgColor: "#6F98A8"
    },
    {
        id: "9",
        text: "9",
        bgColor: "#2F454E"
    }
];

/*-----------------------------------------------helper Lib---------------------------------------------*/

(function bindEventWrapper () {
    // Get element by CSS selector:
    window.qs = function (selector, scope) {
        return (scope || document).querySelector(selector);
    };

    // addEventListener wrapper:
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };
})();

/*-----------------------------------------------Utility---------------------------------------------*/

const util = {
    shuffle: (data) => data.sort(() => Math.random() - 0.5),
    sort: (data) => data.sort((a, b) => a.id - b.id)
}

/*-----------------------------------------------View---------------------------------------------*/

const view = {
    cardContainer: qs(".shuffle-and-Sort__cards"),
    getViewString: () => {
        let cardViews = "";
        cardData.forEach(item => {
            cardViews += `<li class="shuffle-and-Sort__card" style="background-color:${item.bgColor}">
                <span class="card-text">
                    ${item.text}
                </span>
            </li>`;
        });

        return cardViews;
    },
    render: (cardView) => {
        view.cardContainer.innerHTML =  view.getViewString();;
    },
    bind: () => {
        const suffleBtn = qs("#suffle-btn");
        const sortBtn = qs("#sort-btn");
    
        $on(suffleBtn, 'click', function () {
            util.shuffle(cardData);
            view.render();
        });
    
        $on(sortBtn, 'click', function () {
            util.sort(cardData);
            view.render();
        });
    },
    init: () => {
        view.bind();
        view.render();
    }
}

view.init();