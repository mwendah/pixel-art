// Select  inputs

// When size is submitted by the user, call makeGrid()

$(document).ready(() => {
  //set listener 
  $('#sizePicker').submit(event => {
    event.preventDefault();

    makeGrid();
    applyColor();
  });
});

//create grid
const makeGrid = () => {
  $('tr').remove();
  //get Grid sizes
  let gridHeight = $('#inputHeight').val();
  let gridWidth = $('#inputWeight').val();

  for (let row = 1; row <= gridHeight; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let col = 1; col <= gridWidth; col++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
}

//add color to the cell when clicked
const applyColor = () => {
  const cells = $('td');

  cells.click(function () {

    //extract the current value of the color picker
    let color = $('#colorPicker').val();

    //check for style attribute and remove or add it.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
}