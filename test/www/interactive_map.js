/*@Dispetcher last edit 01.02.18*/

var a; //Для определения какую функцию вызывать внутри InitMap();
var marker;
var markers = [];
var map;
var linePath;
var polyLine = [];
var linepatharr= [];
var indx;
/*Прозрачность линий (рабочей и в строеке/проекте)*/
var lop = 0.5;
var cplop = 1.0;

/*Ширина линий (рабочей и в строеке/проекте)*/
var lw = 6;
var cplw = 4;

var polyLinel1st = [];
var polyLinel1stradius = [];
var polyLinel2st = [];
var polyLinel3st = [];
var polyLinel4st = [];
var polyLinel5st = [];
var polyLinel6st = [];

var polyLinel3c = [];
var polyLinel4c = [];
var polyLinel5c = [];
var polyLinel6c = [];

var polyLinel3p = [];
var polyLinel4p = [];
var polyLinel5p = [];
var polyLinel6p = [];

var polyLinel3w = [];
var polyLinel4w = [];
var polyLinel5w = [];
var polyLinel6w = [];

var redLine = '#d52d2d';
var blueLine= '#2a0acb';
var greenLine= '#034f0d';
var orangeLine= '#ff6500';
var violetLine= '#60008a';
var brownLine= '#5b4037';
var greyLine= '#8c8c94';

/*Иконки станций построенных*/
var redIcon = {url: 'Imgs/Red.png'};
var blueIcon = {url: 'Imgs/Blue.png'};
var greenIcon = {url: 'Imgs/Green.png'};
var orangeIcon = {url: 'Imgs/Orange.png'};
var violetIcon = {url: 'Imgs/Violet.png'};
var brownIcon = {url: 'Imgs/Brown.png'};

/*Иконки станций в стройке*/
var cGreenIcon = {url: 'Imgs/cGreen.png'};
var cGreenIconSm = {url: 'Imgs/cGreenSmall.png'};
var cOrangeIcon = {url: 'Imgs/cOrange.png'};
var cOrangeIconSm = {url: 'Imgs/cOrangeSmall.png'};
var cVioletIcon = {url: 'Imgs/cViolet.png'};
var cVioletIconSm = {url: 'Imgs/cVioletSmall.png'};
var cBrownIcon = {url: 'Imgs/cBrown.png'};
var cBrownIconSm = {url: 'Imgs/cBrownSmall.png'};

/*Иконка станций в проекте*/
var pGreenIcon = {url: 'Imgs/pGreen.png'};
var pOrangeIcon= {url: 'Imgs/pOrange.png'};
var pVioletIcon= {url: 'Imgs/pViolet.png'};
var pBrownIcon= {url: 'Imgs/pBrown.png'};

/*Иконки станций в разработке, до проекта*/
var planIcon = {url: 'Imgs/plan.png'};

/*Название линий*/
var nameLine1 = 'Кировско-Выборгская (1 линия «Красная»)';
var nameLine2 = 'Московско-Петроградская (2 линия «Синяя»)';
var nameLine3 = 'Невско-Василеостровская (3 линия «Зеленая»)';
var nameLine4 = 'Правобережная (4 линия «Оранжевая»)';
var nameLine5 = 'Фрунзенско-Приморская (5 линия «Фиолетовая»)';
var nameLine6 = 'Красносельско-Калининская (6 линия «Кориченвая»)';

/************** Описание станций ****************/
/************************************************/

var fPart = '<div class="station_content"><p><b>Год открытия</b> - ';
var fPartProsp ='<div class="station_content"><div class="content__body"><p><b>Время постройки</b> - ';
var fImgPart = '<div class="station_img"><img src=';
var lImgPart = ' height=75 width=100>';

/*Описание действующих станций 1 линии*/
var contL1 = [
[fPart + '1978</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1978</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:45 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1958</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 71 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1958</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 70 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:40</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 58 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 55 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1956</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 07:00 -- 20:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 52 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 50 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 12 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1977</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 8 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1977</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 8 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>']
];

/*Описание перспективных станций 1 линии*/
var contProspL1 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine1 +' - Сосновский радиус</p>'+
'<p><b>Адрес</b> - пос. Бугры (Всеволожский р-н Лен. области)</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine1 +' - Сосновский радиус</p>'+
'<p><b>Адрес</b> - проспект Культуры</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine1 +' - Сосновский радиус</p>'+
'<p><b>Адрес</b> - пересечение Светлановского и Северного пр.</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Адрес</b> - парк "Александрино"</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Адрес</b> - проспект Маршала Жукова</p></div>'+
'</div>']
];

/*Описание действующих станций 2 линии*/
var contL2 = [
[fPart + '2006</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1988</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1988</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 59 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 53 метра</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 53 метра</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 63 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 55 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 39 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1969</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 29 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1972</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 22 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1972</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>']
];

/*Описание действующих станций 3 линии*/
var contL3 = [
[fPart + '2018</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 17 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:05</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2018</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 17 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 01:05</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1979</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 71 метр</p>'+'<p><b>Время работы</b> - 05:34 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 56 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 51 метр</p>'+'<p><b>Время работы</b> - 05:40 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 54 метра</p>'+'<p><b>Время работы</b> - 05:32 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1970</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1970</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1981</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 72 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1981</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 05:38 -- 01:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1984</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:37 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>']
];

/*Описание проектируемых станций 3 линии*/
var contPrL3 = [
[fPartProsp + '2023-2025 год</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Адрес</b> - Несколько вариантов размещения вестибюля: <br>'+
'пересечение Планерной ул. с Шуваловским пр.,<br>'+
'пересечение Шуваловского пр. с пр. Авиаконструкторов,<br>'+
'а также на самой Планерной ул. вблизи планировавшегося зоопарка в Юнтолово</p></div>'+
'</div>'],
[fPartProsp + '2023-2025 год</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Адрес</b> - южнее пересечения Туристской улицы и улицы Оптиков</p></div>'+
'</div>']
];

/*Описание действующих станций 4 линии*/
var contL4 = [
[fPart + '2009</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 07:00 -- 20:00</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 66 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:35</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:32 -- 00:23</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:39 -- 00:35</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:40 -- 00:40</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 68 метра</p>'+'<p><b>Время работы</b> - 05:37 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1987</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
];

/*Описание строящихся станций 4 линии*/
var contConstrL4 = [
[fPartProsp + 'ноябрь 2019 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Большой пр. В.О. (юго-западнее пересечения Большого пр. и Косой линии)</p></div>'+
'</div>'],
[fPartProsp + 'ноябрь 2019 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Ул. Декабристов (южнее пересечения ул. Декабристов и ул. Глинки)</p></div>'+
'</div>']
];

/*Описание проектируемых станций 4 линии*/
var contPrL4 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Крестовский остров, западнее нового стадиона «Зенит-Арена»</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - угол Морской набережной и Капитанской ул.</p></div>'+
'</div>']
];

/*Описание перспективных станций 4 линии*/
var contProspL4 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - район ЖК Юнтолово</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Вестибюль будет расположен на одноименной улице (3-я Конная Лахта)</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - вблизи БЦ "Лахта Центр"</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля будут расположены на Мурманском шоссе,<br>'+
'восточнее путепровода «Нева»</p></div>'+
'</div>']
];

/*Описание действующих станций 5 линии*/
var contL5 = [
[fPart + '2005</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 75 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:55</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1999</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1999</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 49 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1997</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:40</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1997</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 64 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:40</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2011</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 86 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:40</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 71 метр</p>'+'<p><b>Время работы</b> - 05:36 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2009</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2010</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2008</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2012</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>'],
[fPart + '2012</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + "Imgs/imgtest.jpg" + lImgPart + '</div>']
];

/*Описание строящихся станций 5 линии*/
var contConstrL5 = [
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: Бухарестская ул., (южнее пересечения пр. Славы с Бухарестской ул.);<br>'+
'Бухарестская ул. (юго-восточнее пересечения Бухарестской ул. с Альпийским пер.)</p></div>'+
'</div>'],
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - Бухарестская ул. (юго-восточнее пересечения Дунайского пр. и Бухарестской ул.)</p></div>'+
'</div>'],
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - пос. Шушары, Автозаводская ул., уч. №1 (западнее пересечения с Софийской ул.)</p></div>'+
'</div>']
];

/*Описание проектируемых станций 5 линии*/
var contPrL5 = [
[fPartProsp + '2023-2025 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - на пересечении Шуваловского пр. с пр. Авиаконструкторов</p></div>'+
'</div>']
];

/*Описание строящихся станций 6 линии*/
var contConstrL6 = [
[fPartProsp + 'июнь 2022 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ул. Васи Алексеева (западнее дома №12 корп.1 по ул. Маршала Говорова)</p></div>'+
'</div>'],
[fPartProsp + 'июнь 2022 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ул. Маршала Казакова (юго-западнее пересечения ул. Маршала Казакова и пр.Маршала Жукова)</p></div>'+
'</div>']
];

/*Описание проектируемых станций 6 линии*/
var contPrL6 = [
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - юго-восточнее дома 42 на наб. Обводного канала</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: Киевская ул. (юго-западнее пересечения с Черниговской ул.)<br>'+
'Лиговский пр. (севернее дома № 236, литера Б)</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ташкентская ул. (северо-западнее дома № 103, корп.6, литера А, по Московскому пр.)</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: подземный - на северо-западной стороне<br>'+
'Т-образного перекрестка Благодатной ул. и Новоизмайловского пр.<br>'+
'Второй - на западной стороне Митрофаньевского ш., недалеко от ЗСД</p></div>'+
'</div>']
];

/*Описание перспективных станций 6 линии*/
var contProspL6 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - восточнее пересечение Пискаревского пр. и Ручьевской дор.</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - между ж/д ст. Пискаревка и Брюсовской ул.</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: перекресток Бестужевской ул. и Екатерининского пр.;<br>'+
'пересечение пр. Маршала Блюхера и пр. Энергетиков</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - пересечение шоссе Революции и Среднеохтинского пр.</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - вблизи от здания администрации губернатора Петербурга</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - угол Суворовского пр. и ул. Моисеенко</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - выход запланирован в подземном пр-ве южной части Площади Восстания (вместо а/м парковки)</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - пересечение Лиговского пр. и Кузнечного пер.</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - пересечение Ленинского пр. и Брестского бул.</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - пересечение ул. Доблести и ул. Маршала Захарова</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - южная часть Южно-Приморского парка</p></div>'+
'</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - вблизи ж/д станции "Сосновая Поляна"</p></div>'+
'</div>']
];

/*Блок перпективных станций*/
var l1pr = [
['Станция метро «Бугры»', {lat: 60.071203, lng: 30.395416}, contProspL1[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Культуры»', {lat: 60.053989, lng: 30.383422}, contProspL1[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновка»', {lat: 60.031134, lng: 30.365952}, contProspL1[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Александрино»', {lat: 59.833532, lng: 30.218573}, contProspL1[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Маршала Жукова»', {lat: 59.828321, lng: 30.190634}, contProspL1[4], planIcon, greyLine, cplop, cplw, 1]
];

var l4pr = [
['Станция метро «Юнтолово»', {lat: 60.029623, lng: 30.135814}, contProspL4[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Конная Лахта»', {lat: 60.011791, lng: 30.114785}, contProspL4[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лахта»', {lat: 59.988845, lng: 30.176518}, contProspL4[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Кудрово»', {lat: 59.890394, lng: 30.506622}, contProspL4[3], planIcon, greyLine, cplop, cplw, 1]
];

var l6pr = [
['Станция метро «Ручьи»', {lat: 60.002356, lng: 30.451250}, contProspL6[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Пискаревка»', {lat: 59.987520, lng: 30.425306}, contProspL6[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Бестужевская»', {lat: 59.974786, lng: 30.435452}, contProspL6[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Полюстровский проспект»', {lat: 59.959525, lng: 30.414923}, contProspL6[3], greyLine, brownLine, cplop, cplw, 1],
['Станция метро «Смольный»', {lat: 59.949658, lng: 30.392099}, contProspL6[4], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Суворовская»', {lat: 59.938027, lng: 30.373974}, contProspL6[5], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Знаменская»', {lat: 59.930780, lng: 30.361255}, contProspL6[6], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лиговский проспект 2»', {lat: 59.926757, lng: 30.357762}, contProspL6[7], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Брестская»', {lat: 59.856149, lng: 30.200588}, contProspL6[8], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Улица Доблести»', {lat: 59.856828, lng: 30.176673}, contProspL6[9], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Петергофское шоссе»', {lat: 59.847732, lng: 30.160696}, contProspL6[10], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновая Поляна»', {lat: 59.825703, lng: 30.145944}, contProspL6[11], planIcon, greyLine, cplop, cplw, 1]
];

/*Блок строящихся станций*/
var l1c = [
['Станция метро «Гражданский проспект»', {lat: 60.035226, lng: 30.418243}, contL1[0], redIcon, redLine, lop, lw, 0],
['Станция метро «Академическая»', {lat: 60.012773, lng: 30.395945}, contL1[1], redIcon, redLine, lop, lw, 0],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[2], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Мужества»', {lat: 59.999673, lng: 30.366052}, contL1[3], redIcon, redLine, lop, lw, 0],
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, contL1[4], redIcon, redLine, lop, lw, 0],
['Станция метро «Выборгская»', {lat: 59.970963, lng: 30.347567}, contL1[5], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Ленина»', {lat: 59.958511, lng: 30.355031}, contL1[6], redIcon, redLine, lop, lw, 0],
['Станция метро «Чернышевская»', {lat: 59.944606, lng: 30.359709}, contL1[7], redIcon, redLine, lop, lw, 0],
['Станция метро «Владимирская»', {lat: 59.927593, lng: 30.347866}, contL1[8], redIcon, redLine, lop, lw, 0],
['Станция метро «Пушкинская»', {lat: 59.920536, lng: 30.329714}, contL1[9], redIcon, redLine, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL1[10], redIcon, redLine, lop, lw, 0],
['Станция метро «Балтийская»', {lat: 59.907681, lng: 30.300104}, contL1[11], redIcon, redLine, lop, lw, 0],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, contL1[12], redIcon, redLine, lop, lw, 0],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, contL1[13], redIcon, redLine, lop, lw, 0],
['Станция метро «Автово»', {lat: 59.867294, lng: 30.261240}, contL1[14], redIcon, redLine, lop, lw, 0],
['Станция метро «Ленинский проспект»', {lat: 59.850641, lng: 30.268387}, contL1[15], redIcon, redLine, lop, lw, 0],
['Станция метро «Проспект Ветеранов»', {lat: 59.842154, lng: 30.250260}, contL1[16], redIcon, greyLine, lop, lw, 0]
];

var l3c = [
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, contL3[0], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, contL3[1], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, contL3[2], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, contL3[3], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, contL3[4], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, contL3[5], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, contL3[6], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, contL3[7], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, contL3[8], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, contL3[9], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, contL3[10], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, contL3[11], greenIcon, greenLine, lop, lw, 0]
];

var l4c = [
['Станция метро «Горный институт»', {lat: 59.930386, lng: 30.261608}, contConstrL4[0], cOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, contConstrL4[1], cOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, contL4[0], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, contL4[1], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, contL4[2], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923608, lng: 30.383411}, contL4[3], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, contL4[4], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, contL4[5], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, contL4[6], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, contL4[7], orangeIcon, orangeLine, lop, lw, 0]
];

var l5c = [
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, contL5[0], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, contL5[1], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, contL5[2], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, contL5[3], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, contL5[4], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, contL5[5], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, contL5[6], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, contL5[7], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, contL5[8], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, contL5[9], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, contL5[10], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, contL5[11], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, contConstrL5[0], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, contConstrL5[1], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662}, contConstrL5[2], cVioletIcon, violetLine, cplop, cplw, 1]
];

var l6c = [
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIcon, brownLine, cplop, cplw, 1, 10]
];

/*Блок проектируемых станций*/
var l3p = [
['Станция метро «Планерная»', {lat: 60.021725, lng: 30.222013}, contPrL3[0], pGreenIcon, greenLine, cplop, cplw, 1],
['Станция метро «Туристская»', {lat: 60.001656, lng: 30.210603}, contPrL3[1], pGreenIcon, greenLine, cplop, cplw, 1],
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, contL3[0], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, contL3[1], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, contL3[2], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, contL3[3], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, contL3[4], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, contL3[5], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, contL3[6], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, contL3[7], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, contL3[8], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, contL3[9], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, contL3[10], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, contL3[11], greenIcon, greenLine, lop, lw, 0]
];

var l4p = [
['Станция метро «Новокрестовская 2»', {lat: 59.970987, lng: 30.213385}, contPrL4[0], pOrangeIcon, orangeLine, cplop, cplw, 1, 8],
['Станция метро «Морской Фасад»', {lat: 59.948496, lng: 30.211899}, contPrL4[1], pOrangeIcon, orangeLine, cplop, cplw, 1, 8],
['Станция метро «Гавань»', {lat: 59.932537, lng: 30.227705}, contPrL4[2], pOrangeIcon, orangeLine, cplop, cplw, 1, 8],
['Станция метро «Горный институт»', {lat: 59.930386, lng: 30.261608}, contConstrL4[0], cOrangeIconSm, orangeLine, lop, cplw, 1, 8],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, contConstrL4[1], cOrangeIconSm, orangeLine, lop, cplw, 1, 8],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, contL4[0], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, contL4[1], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, contL4[2], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923608, lng: 30.383411}, contL4[3], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, contL4[4], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, contL4[5], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, contL4[6], orangeIcon, orangeLine, lop, lw, 0, 8],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, contL4[7], orangeIcon, orangeLine, lop, lw, 0, 8]
];

var l5p = [
['Станция метро «Шуваловский проспект»', {lat: 60.024673, lng: 30.232099}, contPrL5[0], pVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, contL5[0], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, contL5[1], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, contL5[2], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, contL5[3], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, contL5[4], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, contL5[5], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, contL5[6], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, contL5[7], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, contL5[8], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, contL5[9], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, contL5[10], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, contL5[11], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, contConstrL5[0], cVioletIconSm, violetLine, lop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, contConstrL5[1], cVioletIconSm, violetLine, lop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662}, contConstrL5[2], cVioletIconSm, violetLine, lop, cplw, 1]
];

var l6p = [
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, contPrL6[0], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, contPrL6[1], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, contPrL6[2], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, contPrL6[3], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIconSm, brownLine, lop, cplw, 1, 10],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIconSm, brownLine, lop, cplw, 1, 10]
];

/*Блок всех станций---------------------------*/
/*Блок станций 1 линии (красная)*/
var l1stradius = [
['Станция метро «Бугры»', {lat: 60.071203, lng: 30.395416}, contProspL1[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Культуры»', {lat: 60.053989, lng: 30.383422}, contProspL1[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновка»', {lat: 60.031134, lng: 30.365952}, contProspL1[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[2], redIcon, redLine, lop, lw, 0]
];

var l1st = [
['Станция метро «Гражданский проспект»', {lat: 60.035226, lng: 30.418243}, contL1[0], redIcon, redLine, lop, lw, 0],
['Станция метро «Академическая»', {lat: 60.012773, lng: 30.395945}, contL1[1], redIcon, redLine, lop, lw, 0],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[2], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Мужества»', {lat: 59.999673, lng: 30.366052}, contL1[3], redIcon, redLine, lop, lw, 0],
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, contL1[4], redIcon, redLine, lop, lw, 0],
['Станция метро «Выборгская»', {lat: 59.970963, lng: 30.347567}, contL1[5], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Ленина»', {lat: 59.958511, lng: 30.355031}, contL1[6], redIcon, redLine, lop, lw, 0],
['Станция метро «Чернышевская»', {lat: 59.944606, lng: 30.359709}, contL1[7], redIcon, redLine, lop, lw, 0],
['Станция метро «Владимирская»', {lat: 59.927593, lng: 30.347866}, contL1[8], redIcon, redLine, lop, lw, 0],
['Станция метро «Пушкинская»', {lat: 59.920536, lng: 30.329714}, contL1[9], redIcon, redLine, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL1[10], redIcon, redLine, lop, lw, 0],
['Станция метро «Балтийская»', {lat: 59.907681, lng: 30.300104}, contL1[11], redIcon, redLine, lop, lw, 0],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, contL1[12], redIcon, redLine, lop, lw, 0],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, contL1[13], redIcon, redLine, lop, lw, 0],
['Станция метро «Автово»', {lat: 59.867294, lng: 30.261240}, contL1[14], redIcon, redLine, lop, lw, 0],
['Станция метро «Ленинский проспект»', {lat: 59.850641, lng: 30.268387}, contL1[15], redIcon, redLine, lop, lw, 0],
['Станция метро «Проспект Ветеранов»', {lat: 59.842154, lng: 30.250260}, contL1[16], redIcon, greyLine, cplop, cplw, 1],
['Станция метро «Александрино»', {lat: 59.833532, lng: 30.218573}, contProspL1[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Маршала Жукова»', {lat: 59.828321, lng: 30.190634}, contProspL1[4], planIcon, greyLine, cplop, cplw, 1]
];

/*Блок станций 2 линии (синия)*/
var l2st = [
['Станция метро «Парнас»', {lat: 60.066914, lng: 30.334046}, contL2[0], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Проспект Просвещения»', {lat: 60.051442, lng: 30.332521}, contL2[1], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Озерки»', {lat: 60.036936, lng: 30.321665}, contL2[2], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Удельная»', {lat: 60.016616, lng: 30.314947}, contL2[3], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Пионерская»', {lat: 60.002512, lng: 30.296750}, contL2[4], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Черная речка»', {lat: 59.985493, lng: 30.300869}, contL2[5], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Петроградская»', {lat: 59.966413, lng: 30.311513}, contL2[6], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Горьковская»', {lat: 59.956151, lng: 30.318757}, contL2[7], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Невский проспект»', {lat: 59.935045, lng: 30.330090}, contL2[8], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Сенная полщадь»', {lat: 59.927276, lng: 30.320419}, contL2[9], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916776, lng: 30.319010}, contL2[10], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Фрунзенская»', {lat: 59.906266, lng: 30.317603}, contL2[11], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Московские ворота»', {lat: 59.891733, lng: 30.318155}, contL2[12], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Электросила»', {lat: 59.879169, lng: 30.318735}, contL2[13], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Парк Победы»', {lat: 59.866232, lng: 30.321752}, contL2[14], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Московская»', {lat: 59.853166, lng: 30.321813}, contL2[15], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Звездная»', {lat: 59.833293, lng: 30.349559}, contL2[16], blueIcon, blueLine, lop, lw, 0],
['Станция метро «Купчино»', {lat: 59.829955, lng: 30.375258}, contL2[17], blueIcon, blueLine, lop, lw, 0]
];

/*Блок станций 3 линии (зеленая)*/
var l3st= [
['Станция метро «Планерная»', {lat: 60.021725, lng: 30.222013}, contPrL3[0], pGreenIcon, greenLine, cplop, cplw, 1],
['Станция метро «Туристская»', {lat: 60.001656, lng: 30.210603}, contPrL3[1], pGreenIcon, greenLine, cplop, cplw, 1],
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, contL3[0], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, contL3[1], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, contL3[2], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, contL3[3], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, contL3[4], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, contL3[5], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, contL3[6], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, contL3[7], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, contL3[8], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, contL3[9], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, contL3[10], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, contL3[11], greenIcon, greenLine, lop, lw, 0]
];

/*Блок станций 4 линии (оранжевая)*/
var l4st= [
['Станция метро «Юнтолово»', {lat: 60.029623, lng: 30.135814}, contProspL4[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Конная Лахта»', {lat: 60.011791, lng: 30.114785}, contProspL4[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лахта»', {lat: 59.988845, lng: 30.176518}, contProspL4[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Новокрестовская 2»', {lat: 59.970450, lng: 30.219798}, contPrL4[0], pOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Морской Фасад»', {lat: 59.948496, lng: 30.216191}, contPrL4[1], pOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Гавань»', {lat: 59.932537, lng: 30.227705}, contPrL4[2], pOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Большой проспект»', {lat: 59.930386, lng: 30.261608}, contConstrL4[0], cOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, contConstrL4[1], cOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, contL4[0], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, contL4[1], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, contL4[2], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.924303, lng: 30.385399}, contL4[3], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, contL4[4], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, contL4[5], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, contL4[6], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, contL4[7], orangeIcon, greyLine, cplop, cplw, 1],
['Станция метро «Кудрово»', {lat: 59.890394, lng: 30.506622}, contProspL4[3], planIcon, greyLine, cplop, cplw, 1]
];

/*Блок станций 5 линии (фиолетовая)*/
var l5st= [
['Станция метро «Шуваловский проспект»', {lat: 60.024673, lng: 30.232099}, contPrL5[0], pVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, contL5[0], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, contL5[1], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, contL5[2], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, contL5[3], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, contL5[4], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, contL5[5], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, contL5[6], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, contL5[7], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, contL5[8], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, contL5[9], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, contL5[10], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, contL5[11], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, contConstrL5[0], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, contConstrL5[1], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662},contConstrL5[2], cVioletIcon, violetLine, cplop, cplw, 1]
];

/*Блок станций 6 линии (коричневая)*/
var l6st= [
['Станция метро «Ручьи»', {lat: 60.002356, lng: 30.451250}, contProspL6[0], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Пискаревка»', {lat: 59.987520, lng: 30.425306}, contProspL6[1], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Бестужевская»', {lat: 59.974786, lng: 30.435452}, contProspL6[2], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Полюстровский проспект»', {lat: 59.959525, lng: 30.414923}, contProspL6[3], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Смольный»', {lat: 59.949658, lng: 30.392099}, contProspL6[4], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Суворовская»', {lat: 59.938027, lng:30.373974}, contProspL6[5], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Знаменская»', {lat: 59.930780, lng: 30.361255}, contProspL6[6], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Лиговский проспект 2»', {lat: 59.926757, lng: 30.357762}, contProspL6[7],planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, contPrL6[0], pBrownIcon, brownLine, cplop, cplw, 1, 2],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, contPrL6[1], pBrownIcon, brownLine, cplop, cplw, 1, 2],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, contPrL6[2], pBrownIcon, brownLine, cplop, cplw, 1, 2],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, contPrL6[3], pBrownIcon, brownLine, cplop, cplw, 1, 2],
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIcon, brownLine, cplop, cplw, 1, 2],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Брестская»', {lat: 59.856149, lng: 30.200588}, contProspL6[8], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Улица Доблести»', {lat: 59.856828, lng: 30.176673}, contProspL6[9], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Петергофское шоссе»', {lat: 59.847732, lng: 30.160696}, contProspL6[10], planIcon, greyLine, cplop, cplw, 1, 2],
['Станция метро «Сосновая Поляна»', {lat: 59.825703, lng: 30.145944}, contProspL6[11], planIcon, greyLine, cplop, cplw, 1, 2]
];
var a;
/*Функция инициализации карты*/
function initMap(a) {
    var infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat:59.960,lng:30.330},
    });

  if(a == 1){
    dropl1(infowindow);
  }else if (a == 2){
    dropl2(infowindow);
  }else if (a == 3){
    dropl3(infowindow);
  }else if (a == 4){
    dropl4(infowindow);
  }else if (a == 5){
    dropl5(infowindow);
  }else if (a == 6){
    dropl6(infowindow);
  }else if (a == 7){
    dropConstr(infowindow);
  }else if (a == 8){
    dropProject(infowindow);
  }else{
    dropAll(infowindow);
  }

/*Функция опускающая маркеры и рисующая ВСЕ линии при инициализации карты*/
function dropAll(infowindow){
  clearMarkers();
  removeLine();
  dropl1st(infowindow);
  dropl1stradius(infowindow);
  dropl2st(infowindow);
  dropl3st(infowindow);
  dropl4st(infowindow);
  dropl5st(infowindow);
  dropl6st(infowindow);
}

function dropConstr(infowindow){
  clearMarkers();
  removeLine();
  dropl1c(infowindow);
  dropl2st(infowindow);
  dropl3c(infowindow);
  dropl4c(infowindow);
  dropl5c(infowindow);
  dropl6c(infowindow);
}

function dropProject(infowindow){
  clearMarkers();
  removeLine();
  dropl1c(infowindow);
  dropl2st(infowindow);
  dropl3p(infowindow);
  dropl4p(infowindow);
  dropl5p(infowindow);
  dropl6p(infowindow);
}

function dropl1(infowindow){
  clearMarkers();
  removeLine();
  dropl1st(infowindow);
  dropl1stradius(infowindow);
}
function dropl2(infowindow){
  clearMarkers();
  removeLine();
  dropl2st(infowindow);
}
function dropl3(infowindow){
  clearMarkers();
  removeLine();
  dropl3st(infowindow);
}
function dropl4(infowindow){
  clearMarkers();
  removeLine();
  dropl4st(infowindow);
}
function dropl5(infowindow){
  clearMarkers();
  removeLine();
  dropl5st(infowindow);
}
function dropl6(infowindow){
  clearMarkers();
  removeLine();
  dropl6st(infowindow);
}
/*Прорисовка всей 1 линии*/
function dropl1st(infowindow) {
    for (var i = 0; i < l1st.length; i++) {
      if (i != l1st.length-1){
      var l1 = l1st[i];
      var l1N = l1st[i+1];
      var linepatharr = [l1[1],l1N[1]]; 

      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
      addLinel1st(linepatharr, l1[4], l1[5], l1[6], l1[7]);
      };

      var l1 = l1st[i];
      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
    }
}
function dropl1stradius(infowindow) {
    for (var i = 0; i < l1stradius.length; i++) {
      if (i != l1stradius.length-1){
      var l1 = l1stradius[i];
      var l1N = l1stradius[i+1];
      var linepatharr = [l1[1],l1N[1]]; 

      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
      addLinel1stradius(linepatharr, l1[4], l1[5], l1[6], l1[7]);
      };

      var l1 = l1stradius[i];
      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
    }
}
/*Прорисовка всей 2 линии*/
function dropl2st(infowindow) {
    for (var i = 0; i < l2st.length; i++) {
      if (i != l2st.length-1){
      var l2 = l2st[i];
      var l2N = l2st[i+1];
      var linepatharr = [l2[1],l2N[1]]; 

      addMarkerWithTimeout(l2[0], l2[1], l2[2], l2[3], i * 50, infowindow);
      addLinel2st(linepatharr, l2[4], l2[5], l2[6], l2[7]);
      };

      var l2 = l2st[i];
      addMarkerWithTimeout(l2[0], l2[1], l2[2], l2[3], i * 50, infowindow);
    }
}
/*Прорисовка всей 3 линии*/
function dropl3st(infowindow) {
    for (var i = 0; i < l3st.length; i++) {
      if (i != l3st.length-1){
      var l3 = l3st[i];
      var l3N = l3st[i+1];
      var linepatharr = [l3[1],l3N[1]]; 

      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
      addLinel3st(linepatharr, l3[4], l3[5], l3[6], l3[7]);
      };

      var l3 = l3st[i];
      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
    }
}
/*Прорисовка всей 4 линии*/
function dropl4st(infowindow) {
    for (var i = 0; i < l4st.length; i++) {
      if (i != l4st.length-1){
      var l4 = l4st[i];
      var l4N = l4st[i+1];
      var linepatharr = [l4[1],l4N[1]]; 

      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
      addLinel4st(linepatharr, l4[4], l4[5], l4[6], l4[7]);
      };

      var l4 = l4st[i];
      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
    }
}
/*Прорисовка всей 5 линии*/
function dropl5st(infowindow) {
    for (var i = 0; i < l5st.length; i++) {
      if (i != l5st.length-1){
      var l5 = l5st[i];
      var l5N = l5st[i+1];
      var linepatharr = [l5[1],l5N[1]]; 

      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
      addLinel5st(linepatharr, l5[4], l5[5], l5[6], l5[7]);
      };

      var l5 = l5st[i];
      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
    }
}
/*Прорисовка всей 6 линии*/
function dropl6st(infowindow) {
    for (var i = 0; i < l6st.length; i++) {
      if (i != l6st.length-1){
      var l6 = l6st[i];
      var l6N = l6st[i+1];
      var linepatharr = [l6[1],l6N[1]]; 

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 75, infowindow);
      addLinel6st(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6st[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 75, infowindow);
    }
}
/*Прорисовка 1-й линии в стройке*/
function dropl1c(infowindow) {
    for (var i = 0; i < l1c.length; i++) {
      if (i != l1c.length-1){
      var l1 = l1c[i];
      var l1N = l1c[i+1];
      var linepatharr = [l1[1],l1N[1]]; 

      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
      addLinel3c(linepatharr, l1[4], l1[5], l1[6], l1[7]);
      };

      var l1 = l1c[i];
      addMarkerWithTimeout(l1[0], l1[1], l1[2], l1[3], i * 50, infowindow);
    }
}

/*Прорисовка 3-й линии в стройке*/
function dropl3c(infowindow) {
    for (var i = 0; i < l3c.length; i++) {
      if (i != l3c.length-1){
      var l3 = l3c[i];
      var l3N = l3c[i+1];
      var linepatharr = [l3[1],l3N[1]]; 

      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
      addLinel3c(linepatharr, l3[4], l3[5], l3[6], l3[7]);
      };

      var l3 = l3c[i];
      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
    }
}
/*Прорисовка 3-й линии в проекте*/
function dropl3p(infowindow) {
    for (var i = 0; i < l3p.length; i++) {
      if (i != l3p.length-1){
      var l3 = l3p[i];
      var l3N = l3p[i+1];
      var linepatharr = [l3[1],l3N[1]]; 

      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
      addLinel3p(linepatharr, l3[4], l3[5], l3[6], l3[7]);
      };

      var l3 = l3p[i];
      addMarkerWithTimeout(l3[0], l3[1], l3[2], l3[3], i * 50, infowindow);
    }
}

/*Прорисовка 4-й линии в стройке*/
function dropl4c(infowindow) {
    for (var i = 0; i < l4c.length; i++) {
      if (i != l4c.length-1){
      var l4 = l4c[i];
      var l4N = l4c[i+1];
      var linepatharr = [l4[1],l4N[1]]; 

      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
      addLinel4c(linepatharr, l4[4], l4[5], l4[6], l4[7]);
      };

      var l4 = l4c[i];
      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
    }
}
/*Прорисовка 4-й линии в проекте*/
function dropl4p(infowindow) {
    for (var i = 0; i < l4p.length; i++) {
      if (i != l4p.length-1){
      var l4 = l4p[i];
      var l4N = l4p[i+1];
      var linepatharr = [l4[1],l4N[1]]; 

      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], l4[8] * 50, infowindow);
      addLinel4p(linepatharr, l4[4], l4[5], l4[6], l4[7]);
      };

      var l4 = l4p[i];
      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], l4[8] * 50, infowindow);
    }
}
/*Прорисовка 4-й линии в перспективе*/
function dropl4w(infowindow) {
    for (var i = 0; i < l4w.length; i++) {
      if (i != l4w.length-1){
      var l4 = l4w[i];
      var l4N = l4w[i+1];
      var linepatharr = [l4[1],l4N[1]]; 

      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
      addLinel4p(linepatharr, l4[4], l4[5], l4[6], l4[7]);
      };

      var l4 = l4w[i];
      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
    }
}

/*Прорисовка 5-й линии в стройке*/
function dropl5c(infowindow) {
    for (var i = 0; i < l5c.length; i++) {
      if (i != l5c.length-1){
      var l5 = l5c[i];
      var l5N = l5c[i+1];
      var linepatharr = [l5[1],l5N[1]]; 

      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
      addLinel5c(linepatharr, l5[4], l5[5], l5[6], l5[7]);
      };

      var l5 = l5c[i];
      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
    }
}
/*Прорисовка 5-й линии в проекте*/
function dropl5p(infowindow) {
    for (var i = 0; i < l5p.length; i++) {
      if (i != l5p.length-1){
      var l5 = l5p[i];
      var l5N = l5p[i+1];
      var linepatharr = [l5[1],l5N[1]]; 

      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
      addLinel5p(linepatharr, l5[4], l5[5], l5[6], l5[7]);
      };

      var l5 = l5p[i];
      addMarkerWithTimeout(l5[0], l5[1], l5[2], l5[3], i * 50, infowindow);
    }
}

/*Прорисовка 6-й линии в стройке*/
function dropl6c(infowindow) {
    for (var i = 0; i < l6c.length; i++) {
      if (i != l6c.length-1){
      var l6 = l6c[i];
      var l6N = l6c[i+1];
      var linepatharr = [l6[1],l6N[1]]; 

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], l6[8] * 100, infowindow);
      addLinel6c(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6c[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], l6[8] * 100, infowindow);
    }
}
/*Прорисовка 6-й линии в проекте*/
function dropl6p(infowindow) {
    for (var i = 0; i < l6p.length; i++) {
      if (i != l6p.length-1){
      var l6 = l6p[i];
      var l6N = l6p[i+1];
      var linepatharr = [l6[1],l6N[1]]; 

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], l6[8] * 75, infowindow);
      addLinel6p(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6p[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], l6[8] * 75, infowindow);
    }
}
/*Прорисовка 6-й линии в перспективе*/
function dropl6w(infowindow) {
    for (var i = 0; i < l6w.length; i++) {
      if (i != l6w.length-1){
      var l6 = l6w[i];
      var l6N = l6w[i+1];
      var linepatharr = [l6[1],l6N[1]]; 

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
      addLinel6w(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6w[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
    }
}

/*Добавление линии на карту*/
function addLinel1st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel1st.push(linePath);
}
function addLinel1stradius(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel1st.push(linePath);
}
function addLinel2st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel2st.push(linePath);
}
function addLinel3st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel3st.push(linePath);
}
function addLinel4st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '15px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel4st.push(linePath);
}
function addLinel5st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '16px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel5st.push(linePath);
}
function addLinel6st(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel6st.push(linePath);
}

function addLinel3c(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel4c.push(linePath);
}
function addLinel4c(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '15px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel4c.push(linePath);
}
function addLinel5c(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '16px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel5c.push(linePath);
}
function addLinel6c(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel6c.push(linePath);
}

function addLinel3p(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '18px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel3p.push(linePath);
}
function addLinel4p(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '15px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel4p.push(linePath);
}
function addLinel5p(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '16px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel5p.push(linePath);
}
function addLinel6p(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel6p.push(linePath);
}
function addLinel1w(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel1w.push(linePath);
}
function addLinel4w(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel4w.push(linePath);
}
function addLinel6w(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  if (dash == 1){      
  linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: 0,
          strokeWeight: lineW,
         icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
         }],
          map: map
  });
  }else{
          linePath = new google.maps.Polyline({
          path: linepatharr,
          strokeColor: linecolor,
          strokeOpacity: lineOp,
          strokeWeight: lineW,
          map: map
  });
  };
  polyLinel6w.push(linePath);
}
  /*Функция определяющая значения маркера (определение одного маркера)*/
function addMarkerWithTimeout(title, position, text, img, timeout, infowindow, indx) {
	if (indx != 2){
		indx = 1;
	}
  window.setTimeout(function() {
    marker = new google.maps.Marker({
      position: position,
      title: title,
      icon: img,
      map: map,
      animation: google.maps.Animation.DROP,
      zIndex: indx
    });
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.close;
      infowindow.setContent('<div class="content"><h2 class="content__header">'+title+'</h2>'+text+'</div>');
      infowindow.open(map, this);
    });
    markers.push(marker);
  }, timeout);
}


  /*Удаление всех маркеров с карты*/
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
/*Удалении нарисованных линий с карты*/
function removeLine() {
  for (var i = 0; i < polyLinel1st.length; i++) {
    polyLinel1st[i].setMap(null);
  }
  for (var i = 0; i < polyLinel1stradius.length; i++) {
    polyLinel1stradius[i].setMap(null);
  }
  polyLinel1st = [];
  polyLinel1stradius = [];

  for (var i = 0; i < polyLinel2st.length; i++) {
    polyLinel2st[i].setMap(null);
  }
  polyLinel2st = [];

  for (var i = 0; i < polyLinel3st.length; i++) {
    polyLinel3st[i].setMap(null);
  }
  for (var i = 0; i < polyLinel3c.length; i++) {
    polyLinel3c[i].setMap(null);
  }
  for (var i = 0; i < polyLinel3p.length; i++) {
    polyLinel3p[i].setMap(null);
  }
  polyLinel3st = [];
  polyLinel3c = [];
  polyLinel3p = [];

  for (var i = 0; i < polyLinel4st.length; i++) {
    polyLinel4st[i].setMap(null);
  }
  for (var i = 0; i < polyLinel4c.length; i++) {
    polyLinel4c[i].setMap(null);
  }
  for (var i = 0; i < polyLinel4p.length; i++) {
    polyLinel4p[i].setMap(null);
  }
  for (var i = 0; i < polyLinel4w.length; i++) {
    polyLinel4w[i].setMap(null);
  }
  polyLinel4st = [];
  polyLinel4c = [];
  polyLinel4p = [];
  polyLinel4w = [];

  for (var i = 0; i < polyLinel5st.length; i++) {
    polyLinel5st[i].setMap(null);
  }
  for (var i = 0; i < polyLinel5c.length; i++) {
    polyLinel5c[i].setMap(null);
  }
  for (var i = 0; i < polyLinel5p.length; i++) {
    polyLinel5p[i].setMap(null);
  }
  polyLinel5st = [];
  polyLinel5c = [];
  polyLinel5p = [];

  for (var i = 0; i < polyLinel6st.length; i++) {
    polyLinel6st[i].setMap(null);
  }
  for (var i = 0; i < polyLinel6c.length; i++) {
    polyLinel6c[i].setMap(null);
  }
  for (var i = 0; i < polyLinel6p.length; i++) {
    polyLinel6p[i].setMap(null);
  }
  for (var i = 0; i < polyLinel6w.length; i++) {
    polyLinel6w[i].setMap(null);
  }
  polyLinel6st = [];
  polyLinel6c = [];
  polyLinel6p = [];
  polyLinel6w = [];
}
}