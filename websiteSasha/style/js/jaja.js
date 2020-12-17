var chartType = document.getElementById('ch').dataset.type;
console.log(chartType);
var fileName = "chart_"+chartType+".csv";

fetch(fileName).then(function(response) {
response.text().then(function(text) {
  load(text);
  });
});


function load(data){
  var dat =[];
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) 
  {
  var rowCells = allRows[singleRow].split(',');
  console.log(rowCells)
  dat[singleRow]={ time: parseInt(rowCells[0]), open: parseInt(rowCells[1]), high: parseInt(rowCells[4]), low: parseInt(rowCells[3]), close: parseInt(rowCells[2])};
  }
  candleSeries.setData(dat);
}
var chartWidth = 1080;
var chartHeight =500;
var chart = LightweightCharts.createChart(document.getElementById("chart"), {
  width: chartWidth,
  height: chartHeight,
  layout: {
    backgroundColor: '#000000',
    textColor: 'rgba(255, 255, 255, 0.9)',
  },
  grid: {
    vertLines: {
      color: 'rgba(197, 203, 206, 0.5)',
    },
    horzLines: {
      color: 'rgba(197, 203, 206, 0.5)',
    },
  },
  crosshair: {
    mode: LightweightCharts.CrosshairMode.Normal,
  },
  priceScale: {
    borderColor: 'rgba(197, 203, 206, 0.8)',
  },
  timeScale: {
    borderColor: 'rgba(197, 203, 206, 0.8)',
    rightOffset: 12,
    barSpacing: 3,
    fixLeftEdge: true,
    lockVisibleTimeRangeOnResize: true,
    rightBarStaysOnScroll: true,
    borderVisible: false,
    borderColor: '#fff000',
    visible: true,
    timeVisible: true,
    secondsVisible: false,
    tickMarkFormatter: function(timePoint, tickMarkType, locale) {
        console.log(timePoint, tickMarkType, locale);
        return String(new Date(timePoint.timestamp * 1000).getUTCFullYear());
    }

  },
});

var candleSeries = chart.addCandlestickSeries({
  upColor: 'rgba(255, 144, 0, 1)',
  downColor: '#000',
  borderDownColor: 'rgba(255, 144, 0, 1)',
  borderUpColor: 'rgba(255, 144, 0, 1)',
  wickDownColor: 'rgba(255, 144, 0, 1)',
  wickUpColor: 'rgba(255, 144, 0, 1)',
});

var width = 27;
var height = 27;

var button = document.getElementById('go-btn');
button.style.left = (chartWidth - width - 60) + 'px';
button.style.top = (chartHeight - height - 30) + 'px';

var timeScale = chart.timeScale();
chart.subscribeVisibleTimeRangeChange(function() {
  var buttonVisible = timeScale.scrollPosition() < 0;
  button.style.display = buttonVisible ? 'block' : 'none';
});

button.addEventListener('click', function() {
  timeScale.scrollToRealTime();
});

button.addEventListener('mouseover', function() {
  button.style.background = 'rgba(250, 250, 250, 1)';
  button.style.color = '#000';
});

button.addEventListener('mouseout', function() {
  button.style.background = 'rgba(250, 250, 250, 0.6)';
  button.style.color = '#4c525e';
});
