function maxDataVal(data) {
  return data.reduce((prev, curr) => curr[1] > prev ? curr[1] : prev, data[0][1]);
}
function drawBarChart(data, options, element){
  let $barAxes = $("<div class='bar-chart-axes'></div>");
  $barAxes.css('width', options.width || '1000px');
  $barAxes.css('height', options.height || '500px');
  element.append($barAxes);
  for(let i = 0; i < data.length ; i++) {
    $('.bar-chart-axes').append(`<div id="dataLabel${i}" class="dataLabel"></div>`);
    const elemId = `bar${i}`;
    const calcMargin = 900 / (data.length * 2);
    const elemString = `<div id=${elemId} class='bar'><p id="value${i}" class="data-value">${data[i][1]}</p></div>`;
    $(`#dataLabel${i}`).append(elemString);
    $(`#dataLabel${i}`).append('<div class="line"></div>');
    $(`#dataLabel${i}`).append(`<div id="bar-label${i}" class="label"><p>${data[i][0]}</p><div>`);
    const elemIDSelector = `#${elemId}`;
    $(elemIDSelector).css("width", `${calcMargin}px`);
    $(elemIDSelector).css("height", `${(data[i][1] / maxDataVal(data)) * 90}%`);
    $(elemIDSelector).css("margin-left", `${calcMargin}px`);
    $(`#bar-label${i}`).css("width", `${calcMargin}px`);
    $(`#bar-label${i}`).css("margin-left", `${calcMargin}px`);
  }
  let pos = "center";
  switch(options["data-position"]){
  case "top":
    pos = "flex-start";
    break;
  case "center":
    pos = "center";
    break;
  case "bottom":
    pos = "flex-end";
    break;
  }
  $('.bar').css("align-items", pos);
}

$(document).ready(function () {
  const data = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7], ['h', 8], ['i', 9], ['j', 10]];
  const options = {width: '1200px', height: '1200px', "data-position": "bottom"};
  const barChartDiv = $('#bar-chart');
  drawBarChart(data, options, barChartDiv);
});

