jQuery(document).ready(function(){
  var snakeCanvas = $('canvas.snake-game')[0];
      context     = snakeCanvas.getContext('2d'),
      width       = snakeCanvas.width,
      height      = snakeCanvas.height,
      snakeSize   = 10,
      direction   = 'right',
      snake = [ {'x': 1,'y': 0 },
                {'x': 2,'y': 0 },
                {'x': 3,'y': 0 },
                {'x': 4,'y': 0 },
                {'x': 5,'y': 0 },
                {'x': 6,'y': 0 }
              ];

  var gameLoop = setInterval(reDraw, 50);

  function reDraw(){
    console.log('redrawing');
    drawBg();
    drawSnake(snake);
  }

  function drawBg(){
    paint(0,0,width, height, '#228B22', 'black');
  }

  function drawSnake(snakeInput){
    updateSnake(snakeInput);
    snakeInput.forEach(function(element){
      paint(element.x * 10, element.y * 10, snakeSize, snakeSize, 'orange', 'black');
    });
  }

  function paint(x, y, w, h, bgColor, borderColor){
    context.fillStyle = bgColor;
    context.fillRect(x,y, w, h);
    context.strokeStyle = borderColor;
    context.strokeRect(x,y, w, h);
  }

  function updateSnake(snakeInput){
    snakeInput.shift();
    snakeInput.push(updateDirection(snakeInput, direction));
  };

  function updateDirection(snakeInput, direction){
    var cellX = snakeInput[snakeInput.length - 1].x;
    var cellY = snakeInput[snakeInput.length - 1].y;

    if (direction == 'left'){
      cellX = cellX - 1;
    }else if (direction == 'right') {
      cellX = cellX + 1;
    }else if (direction == 'top') {
      cellY = cellY - 1;
    }else if (direction == 'bottom') {
      cellY = cellY + 1;
    }
    return { x: cellX, y : cellY }
  }

  $(document).on('keydown', function(e){
    if(e.which == '37'){ //left down
      direction = 'left';
    }else if (e.which == '38') { //top key
      direction = 'top';
    }else if (e.which == '39') { //right keydown
      direction = 'right';
    }else if (e.which == '40') { //bottom keybottom
      direction = 'bottom';
    }
  })









});
