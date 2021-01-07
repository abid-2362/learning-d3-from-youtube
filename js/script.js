/*
d3.select('h1').style('color', 'red')
  .attr('class', 'heading')
  .text('Updated H1 Tag');
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');
d3.selectAll('p').style('color', 'blue');
*/

/*
// Data Loading and Binding
var array1 = [1, 2, 3, 4, 5];
d3.select('body')
  .selectAll('p')
  .data(array1)
  .enter()
  .append('p') // appends paragraph for each data element
  // .text('D3 is awesome!');
  .text(function (d) { return d; });
//*/

//*

//*/