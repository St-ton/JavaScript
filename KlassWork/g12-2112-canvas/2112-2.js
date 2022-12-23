const cvs = document.querySelector('#cvs');
const range = document.querySelector('#plot_size');

const ctx = cvs.getContext('2d'); //получение контекста визуализации, который будет рендерится на страницу
cvs.width = 500;
cvs.height = 500;

range.addEventListener('input', event => {
  const value = event.target.value;
  Plot.change_size(ctx, value);
});

class Plot {
  static size = 50;
  static plots = [];

  //выносим масштаб в динамическое свойство

  static change_size(ctx, value = 1) {
    this.size = value;
    ctx.clearRect(0, 0, 500, 500);
    this.plots.forEach(plot => plot.render(ctx));
  }

  constructor(x_list, func, lineColor = '#000000') {
    this.x_list = x_list;
    this.strokeStyle = lineColor;
    this._func = func;
    Plot.plots.push(this);
  }
  //функция которая будет рисовать
  render(ctx) {
    ctx.lineWidth = 2; //ширина линии
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    this.x_list.forEach(elem => {
      const y = this._func(elem);
      // ctx.lineTo(this.scale * elem * 50 + 250, this.scale * y * 50 + 250);
      ctx.lineTo(Plot.size * elem + 250, Plot.size * y + 250);
    });
    ctx.stroke();
  }
}
const x = [...new Array(10000)].map((_, index) => index * 0.01 - 50);

const tan = new Plot(x, x => -(x ** 2), 'red');
tan.render(ctx);

const sin = new Plot(x, Math.sin, '#3498db');
sin.render(ctx);
