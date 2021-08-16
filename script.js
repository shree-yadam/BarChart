function drawBarChart(data, options, element){
  let $barAxes = $("<div class='bar-chart-axes'></div>");
  $barAxes.css('width', options.width || '1000px');
  $barAxes.css('height', options.height || '500px');
  element.append($barAxes);
  for(let i = 0; i < data.length ; i++) {
    const elemId = `bar${i}`;
    const calcMargin = 900 / (data.length * 2);
    const elemString = `<div id=${elemId} class='bar'></div>`;
    $('.bar-chart-axes').append(elemString);
    const elemIDSelector = `#${elemId}`;
    $(elemIDSelector).css("width", `${calcMargin}px`);
    $(elemIDSelector).css("height", `${(data[i] / Math.max(...data)) * 90}%`);
    $(elemIDSelector).css("margin-left", `${calcMargin}px`);
    $(elemIDSelector).append(`<p class="data-value">${data[i]}</p>`);
    console.log(element);
  }
  console.log(element);
}

$(document).ready(function () {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const options = {width: '1200px', height: '1200px'};
  const barChartDiv = $('#bar-chart');
  drawBarChart(data, options, barChartDiv);
});

