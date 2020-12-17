let overview = document.getElementById('overview');
let charts = document.getElementById('charts');
let news = document.getElementById('news');
let data_overview_wrapper = document.getElementById('data_overview_wrapper');
let data_news_wrapper = document.getElementById('data_news_wrapper');
let data_charts_wrapper = document.getElementById('data_charts_wrapper');
overview.onclick = function() {
    data_overview_wrapper.style.display = "flex";
    if (overview.classList.contains("selected") == false) {
        overview.classList.add("selected");
    }
    data_charts_wrapper.style.display = "none";
    if (charts.classList.contains("selected") == true) {
        charts.classList.remove("selected");
    }
    data_news_wrapper.style.display = "none";
    if (news.classList.contains("selected") == true) {
        news.classList.remove("selected");
    }
    createChart();
};
news.onclick = function() {
    data_news_wrapper.style.display = "flex";
    if (news.classList.contains("selected") == false) {
        news.classList.add("selected");
    }
    data_charts_wrapper.style.display = "none";
    if (charts.classList.contains("selected") == true) {
        charts.classList.remove("selected");
    }
     data_overview_wrapper.style.display = "none";
    if (overview.classList.contains("selected") == true) {
        overview.classList.remove("selected");
    }
};
charts.onclick = function() {
    data_overview_wrapper.style.display = "none";
    if (overview.classList.contains("selected") == true) {
        overview.classList.remove("selected");
    }
    data_charts_wrapper.style.display = "flex";
    if (charts.classList.contains("selected") == false) {
        charts.classList.add("selected");
    }
    data_news_wrapper.style.display = "none";
    if (news.classList.contains("selected") == true) {
        news.classList.remove("selected");
    }
};

function createChart() {
    var chartWidth = data_overview_wrapper.offsetWidth;
    var chartHeight = chartWidth / 1.618;
    data_overview_wrapper.style.height = Math.floor(chartHeight).toString() + "px";
}
var mql = window.matchMedia('(min-width: 1280px)');
var mq2 = window.matchMedia('(max-width: 1280px)');
var mq3 = window.matchMedia('(max-width: 1040px)');
var mq4 = window.matchMedia('(max-width: 760px)');
var mq5 = window.matchMedia('(max-width: 680px)');

function screenTest(e) {
    if (e.matches) {
        createChart();
    }
}   
mql.addListener(screenTest);
mq2.addListener(screenTest);
mq3.addListener(screenTest);
mq4.addListener(screenTest);
mq5.addListener(screenTest);