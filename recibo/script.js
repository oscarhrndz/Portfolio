function drawDashedLine(pattern) {
    ctx.beginPath();
    ctx.setLineDash(pattern);
    ctx.moveTo(0, y);
    ctx.lineTo(300, y);
    ctx.stroke();
    y += 20;
  }
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let y = 15;
  
  drawDashedLine([]);
  drawDashedLine([1, 1]);
  drawDashedLine([10, 10]);
  drawDashedLine([20, 5]);
  drawDashedLine([15, 3, 3, 3]);
  drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
  drawDashedLine([12, 3, 3]); // Equals [12, 3, 3, 12, 3, 3]
  