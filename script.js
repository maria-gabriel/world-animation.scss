/*time = setTimeout(cero, 2000);
  var sec = document.querySelector('html');
     sec.style.setProperty('--sec', '1s');
  var sec1 = document.querySelector('html');
     sec1.style.setProperty('--sec1', '1s');
     var sec2 = document.querySelector('html');
     sec2.style.setProperty('--sec2', '1s');
     var sec3 = document.querySelector('html');
     sec3.style.setProperty('--sec3', '1s');
     var sec4 = document.querySelector('html');
     sec4.style.setProperty('--sec4', '1s');
     var sec5 = document.querySelector('html');
     sec5.style.setProperty('--sec5', '1s');*/

document.getElementById('pantalla').title =
  'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
document.getElementById('pantalla').style.display = 'none';

/*function cero() {
     sec.style.setProperty('--sec', '20s');
     sec1.style.setProperty('--sec1', '1000ms');
     sec2.style.setProperty('--sec2', '5000ms');
     sec2.style.setProperty('--sec3', '9000ms');
     sec4.style.setProperty('--sec4', '13000ms');
     sec5.style.setProperty('--sec5', '17000ms');
     
}*/

document.getElementById('mirot').onmouseover = function () {
  mouseOver();
};
document.getElementById('mirot').onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  var x = document.getElementsByClassName('rot');
  for (i = 0; i < x.length; i++) {
    x[i].style.animationPlayState = 'paused';
  }
  var y = document.getElementsByClassName('roti');
  for (i = 0; i < y.length; i++) {
    y[i].style.animationPlayState = 'paused';
  }
  var z = document.getElementsByClassName('text');
  for (i = 0; i < z.length; i++) {
    z[i].style.animationPlayState = 'paused';
  }
}

function mouseOut() {
  var x = document.getElementsByClassName('rot');
  for (i = 0; i < x.length; i++) {
    x[i].style.animationPlayState = 'running';
  }
  var y = document.getElementsByClassName('roti');
  for (i = 0; i < y.length; i++) {
    y[i].style.animationPlayState = 'running';
  }
  var z = document.getElementsByClassName('text');
  for (i = 0; i < z.length; i++) {
    z[i].style.animationPlayState = 'running';
  }
}

document.getElementById('r1').onclick = function () {
  window.location = 'https://www.xborder.co/logistics/';
};
document.getElementById('r2').onclick = function () {
  window.location = 'https://www.xborder.co/ecommerce-operations/';
};
document.getElementById('r3').onclick = function () {
  window.location = 'https://www.xborder.co/management/';
};
document.getElementById('r4').onclick = function () {
  window.location = 'https://www.xborder.co/marketing/';
};
document.getElementById('r5').onclick = function () {
  window.location = 'https://www.xborder.co/technology/';
};

document.getElementById('r1').onmouseover = function () {
  mouseOverR1();
};
document.getElementById('r1').onmouseout = function () {
  mouseOutR1();
};
function mouseOverR1() {
  document.getElementById('pantalla').title =
    'Fast and flexible logistic and supply chain solutions for ecommerce companies.';
  document.getElementById('pantalla').style.display = 'table-cell';
}
function mouseOutR1() {
  document.getElementById('pantalla').title =
    'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
  document.getElementById('pantalla').style.display = 'none';
}

document.getElementById('r2').onmouseover = function () {
  mouseOverR2();
};
document.getElementById('r2').onmouseout = function () {
  mouseOutR2();
};
function mouseOverR2() {
  document.getElementById('pantalla').title =
    'We manage daily eCommerce operations to provide the best customer service.';
  document.getElementById('pantalla').style.display = 'table-cell';
}
function mouseOutR2() {
  document.getElementById('pantalla').title =
    'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
  document.getElementById('pantalla').style.display = 'none';
}

document.getElementById('r3').onmouseover = function () {
  mouseOverR3();
};
document.getElementById('r3').onmouseout = function () {
  mouseOutR3();
};
function mouseOverR3() {
  document.getElementById('pantalla').title =
    'Creation, implementation and monitoring strategic management services.';
  document.getElementById('pantalla').style.display = 'table-cell';
}
function mouseOutR3() {
  document.getElementById('pantalla').title =
    'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
  document.getElementById('pantalla').style.display = 'none';
}

document.getElementById('r4').onmouseover = function () {
  mouseOverR4();
};
document.getElementById('r4').onmouseout = function () {
  mouseOutR4();
};
function mouseOverR4() {
  document.getElementById('pantalla').title =
    'We persuade potential customers to buy through digital marketing and business strategies.';
  document.getElementById('pantalla').style.display = 'table-cell';
}
function mouseOutR4() {
  document.getElementById('pantalla').title =
    'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
  document.getElementById('pantalla').style.display = 'none';
}

document.getElementById('r5').onmouseover = function () {
  mouseOverR5();
};
document.getElementById('r5').onmouseout = function () {
  mouseOutR5();
};
function mouseOverR5() {
  document.getElementById('pantalla').title =
    'We have a range of technology services designed to facilitate your eCommerce operations.';
  document.getElementById('pantalla').style.display = 'table-cell';
}
function mouseOutR5() {
  document.getElementById('pantalla').title =
    'Boost your eCommerce sales in Latin America by using our cross-border solutions.';
  document.getElementById('pantalla').style.display = 'none';
}
