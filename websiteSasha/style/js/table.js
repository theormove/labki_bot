var tableType = document.getElementById('table').dataset.type;
console.log(tableType);
var fileName = "table/table_"+tableType+".csv";
fetch(fileName).then(function(response) {
response.text().then(function(text) {
  load(text);
  });
});

function load(data){
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var high = document.getElementById('high');
  var low = document.getElementById('low');
  var change = document.getElementById('change');
  var netChange = document.getElementById('net_change');

  var table_body=document.getElementById('data_table_body');
  var allRows = data.split(/\r?\n|\r/);
  var table_d = "";
  var firstRow = allRows[0].split(',');
  console.log(firstRow);
  open.innerHTML = firstRow[1];
  close.innerHTML = firstRow[4];
  price.innerHTML = firstRow[4];
  low.innerHTML = firstRow[3];
  high.innerHTML = firstRow[2];
  var changeValue = parseFloat(firstRow[4])-parseFloat(firstRow[1]);
  if (changeValue >= 0){
    change.style.color = "green";
  }else change.style.color = "red";
  change.innerHTML = (changeValue).toFixed(3);
  var netChangeValue = 100*(changeValue)/parseFloat(firstRow[1]);
  if (netChangeValue >= 0){
    netChange.style.color = "green";
  }else netChange.style.color = "red";
  netChange.innerHTML = (netChangeValue).toFixed(3)+"%";
  for (var singleRow = 0; singleRow < allRows.length-1; singleRow++)
  {
    table_d += '<tr>';
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        table_d += '<td>';
        table_d += rowCells[rowCell];
        table_d += '</td>';
    }
      table_d += '</tr>';
  }
  table_body.innerHTML = table_d;
};
