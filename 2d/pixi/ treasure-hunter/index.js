let app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});
app.renderer.backgroundColor = 0xfffff;
document.body.appendChild(app.view);

// 将图片数据都直接以json的方式进行的导入
// 然后将图片都绘制到桌面上