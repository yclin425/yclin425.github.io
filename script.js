// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#0095DD";
let x1 = 600, y1 = 0, dx1 = -10, dy1 = 10, r1 = 20, color1 = "#3bdd00";
let ct=0;


// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
  
    x1 = x1 + dx1;
    y1 = y1 + dy1;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
  if(x > canvas.width || x  < 0)
    dx=-dx;
  if(y > canvas.height || y  < 0)
    dy=-dy;
  
  if(x1 > canvas.width || x1  < 0)
    dx1=-dx1;
  if(y1 > canvas.height || y1  < 0)
    dy1=-dy1;
  
 if((x-x1)*(x-x1)+(y-y1)*(y-y1)<(r+r1)*(r+r1))
  {
    [tx, ty]=[(-2*dx1+8*dx)/6 , (-2*dy+8*dy)/6];
    [dx, dy]=[(2*dx+4*dx1)/6, (2*dy+4*dy1)/6];
    [dx1, dy1]=[tx, ty];
    ct+=1
  }

  if(ct%3==1)
  {
    color="#5298ba";
    color1="#509c35";
  }
  if(ct%3==2)
  {
    color="#8ac1db";
    color1="#85bf71";
  }
  if(ct%3==0)
  {
    color="#0095DD";
    color1="#3bdd00";
  }
  
    drawBall(x, y, r, color);
    drawBall(x1, y1, r1, color1);
    requestAnimationFrame(draw);
}
draw();