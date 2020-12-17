var mq1 = window.matchMedia('(min-width: 680px)');
var mq2 = window.matchMedia('(max-width: 680px)');
var mq3 = window.matchMedia('(min-width: 1280px)');
var mq4 = window.matchMedia('(min-width: 1040px) and (max-width: 1280px)');
var mq5 = window.matchMedia('(min-width: 760px) and (max-width: 1040px)');

function screenTest(e) {
    if (e.matches) {
        createChart("NASDAQ:AAPL");
    }
}

function screenTestSmall(e) {
    if (e.matches) {
        for (var i = 1; i < tableRowList.length; i++) {
            tableRowList[i].getElementsByClassName("market_table_cell change")[0].dataset.newValue = tableRowList[i].getElementsByClassName("market_table_cell netchange")[0].getElementsByTagName('span')[0].innerHTML;
        }
        let hideChartHeader = document.getElementsByClassName("charts_header_wrapper")[0];
        hideChartHeader.style.display = "none";
        chartWrap.style.display = "none";
    }
}
mq2.addListener(screenTestSmall);
mq3.addListener(screenTest);
mq4.addListener(screenTest);
mq5.addListener(screenTest);
var tableRowList = document.getElementsByClassName('market_table_row');


function createChart(symbol) {
    new TradingView.widget({
        "autosize": true,
        "symbol": symbol,
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "save_image": false,
        "container_id": "tradingview_change"
    });
    currentChart.style.height = (currentChart.offsetWidth - 54) / 1.618 + "px";
}
let chartWrap = document.getElementById("ch");
let currentChart = document.getElementById("tradingview_change");
let chartTypelist = document.getElementsByClassName("chart_type");
if (mq1.matches) {
    createChart("NASDAQ:AAPL");
} else {
    let hideChartHeader = document.getElementsByClassName("charts_header_wrapper")[0];
    hideChartHeader.style.display = "none";
    chartWrap.style.display = "none";
}

for (var i = 0; i < chartTypelist.length; i++) {
    chartTypelist[i].addEventListener("click", function() {
        for (var j = 0; j < chartTypelist.length; j++) {
            if (chartTypelist[j].classList.contains("choosed") == 1) {
                chartTypelist[j].classList.remove("choosed");
            }
        }
        this.classList.add("choosed");
        chartWrap.dataset.type = this.dataset.type;
        createChart("NASDAQ:AAPL");
    });
};