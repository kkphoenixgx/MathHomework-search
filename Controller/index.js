google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Turmas', 'Pessoas por turma'],
    ['Turma: 3003',    13],
    ['Turma: 3002',    7],
    ['Turma: 3001',    6],
  ]);

  var options = {
    title: 'Pessoas que bebem por turma',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

function drawChart2() {
    var data2 = google.visualization.arrayToDataTable([
      ['Turmas', 'Pessoas por turma'],
      ['Que bebem',    6],
      ['Pessoas que não bebem',   22],
    ]);
  
    var options2 = {
      title: 'Pessoas que bebem da 3001',
      is3D: true,
    };
  
    var chart2 = new google.visualization.PieChart(document.getElementById('Turma-3001'));
    chart2.draw(data2, options2);
}
function drawChart3() {
    var data3 = google.visualization.arrayToDataTable([
      ['Turmas', 'Pessoas por turma'],
      ['Que bebem',    7],
      ['Pessoas que não bebem',   21],
    ]);
  
    var options3 = {
      title: 'Pessoas que bebem da 3002',
      is3D: true,
    };
  
    var chart3 = new google.visualization.PieChart(document.getElementById('Turma-3002'));
    chart3.draw(data3, options3);
}
function drawChart4() {
    var data2 = google.visualization.arrayToDataTable([
      ['Turmas', 'Pessoas por turma'],
      ['Que bebem',    13],
      ['Pessoas que não bebem',   19],
    ]);
  
    var options2 = {
      title: 'Pessoas que bebem da 3003',
      is3D: true,
    };
  
    var chart2 = new google.visualization.PieChart(document.getElementById('Turma-3003'));
    chart2.draw(data2, options2);
}

window,addEventListener("resize", function(){
  window.location.reload();
})
