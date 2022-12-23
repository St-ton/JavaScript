const cvs = document.querySelector('#cvs');
const range = document.querySelector('#plot_size');

const ctx = cvs.getContext('2d'); //получение контекста визуализации, который будет рендерится на страницу
cvs.width = 500;
cvs.height = 500;

range.addEventListener('input', event => {
  console.log(event.target.value);
});

//ctx.fillStyle = '#3498db'; //заполнение цветом
//ctx.fillRect(10, 10, 100, 200); //прямоугольник с заполнением цветом, первые 2 - координаты, следующие 2 - ширина и высота

//ctx.strokeStyle = '#3498db';
//ctx.strokeRect(10, 10, 200, 200); //прямоугольник без заполнения цветом

// ctx.beginPath(); // инициируем карандаш
// ctx.moveTo(50, 50); // начальная точка рисования
// ctx.lineTo(300, 300); // рисуем линии до следующих координат
// ctx.lineTo(300, 50);
// ctx.lineTo(50, 50);
// ctx.fillStyle = '#3498db';
// ctx.fill(); //заполняем

//* создаем массив, но так как не определили item они все у нас undefined. И заполняем его значениями индекс
//[...new Array(100)].map((item, index) => index);
// т.к. item нам не нужен, мы его пропускаем и вместо него используем _

// рисуем синусоиду, создав массив координат х
// const x = [...new Array(1000)].map((_, index) => index * 0.1);
// ctx.beginPath();
// x.forEach(elem => {
//   const y = Math.sin(elem);
//   ctx.lineTo(elem * 10, y * 100 + 250);
// });
// ctx.strokeStyle = 'red';
// ctx.stroke();

//_ у функции указываем для того, что эта функция для внутреннего использования. Она не будет вызываться в созданных объектах
class Plot {
  static size = 1;
  static plots = [];

  //выносим масштаб в динамическое свойство

  static change_size(ctx, value = 1) {
    if (this.size + value <= 0) {
      return;
    }
    this.size += value;
    ctx.clearRect(0, 0, 500, 500);
    this.plots.forEach(plot => plot.render(ctx));
  }

  constructor(x_list, func, lineColor = '#000000', scale = '1') {
    this.x_list = x_list;
    this.strokeStyle = lineColor;
    // this.scale = scale;
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
      ctx.lineTo(Plot.size * elem * 50 + 250, Plot.size * y * 50 + 250);
    });
    ctx.stroke();
  }
}
const x = [...new Array(10000)].map((_, index) => index * 0.01 - 50);

const tan = new Plot(x, x => -(x ** 2), 'red');
tan.render(ctx);

const sin = new Plot(x, Math.sin, '#3498db');
sin.render(ctx);
