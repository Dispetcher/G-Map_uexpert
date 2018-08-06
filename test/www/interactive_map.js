/*@Dispetcher last edit 17.07.18*/

var a; //Для определения какую функцию вызывать внутри InitMap();
var marker;
var markers = [];
var map;
var linePath;
var polyLine = [];
var linepatharr= [];
var indx;
/*Прозрачность линий (рабочей и в строеке/проекте)*/
const lop = 0.5;
const rlop = 0.7;
const cplop = 1.0;

/*Ширина линий (рабочей и в строеке/проекте)*/
const lw = 7;
const cplw = 4;

/*Задержка отображения станций*/
const delRenL6 = 10;
const delRenL7 = 12;

var polyLine = [];
var polyLinel1st = [];
var polyLinel1stradius = [];
var polyLinel2st = [];
var polyLinel3st = [];
var polyLinel4st = [];
var polyLinel5st = [];
var polyLinel6st = [];
var polyLinel7st = [];

var polyLinel3c = [];
var polyLinel4c = [];
var polyLinel5c = [];
var polyLinel6c = [];

var polyLinel3p = [];
var polyLinel4p = [];
var polyLinel5p = [];
var polyLinel6p = [];

var polyLinel1prosp = [];
var polyLinel3prosp = [];
var polyLinel4prosp = [];
var polyLinel5prosp = [];
var polyLinel6prosp = [];
var polyLinel7prosp = [];

const redLine = '#d52d2d';
const blueLine= '#48a0c1';
const greenLine= '#034f0d';
const orangeLine= '#ff6500';
const violetLine= '#60008a';
const brownLine= '#5b4037';
const greyLine= '#8c8c94';
const ligthGrLine= '#0ad2ff';

/*Иконки станций построенных*/
const redIcon = {url: 'Imgs/Red.png'};
const blueIcon = {url: 'Imgs/Blue.png'};
const greenIcon = {url: 'Imgs/Green.png'};
const orangeIcon = {url: 'Imgs/Orange.png'};
const violetIcon = {url: 'Imgs/Violet.png'};
const brownIcon = {url: 'Imgs/Brown.png'};

/*Иконки станций в стройке*/
const cGreenIcon = {url: 'Imgs/cGreen.png'};
const cGreenIconSm = {url: 'Imgs/cGreenSmall.png'};
const cOrangeIcon = {url: 'Imgs/cOrange.png'};
const cOrangeIconSm = {url: 'Imgs/cOrangeSmall.png'};
const cVioletIcon = {url: 'Imgs/cViolet.png'};
const cVioletIconSm = {url: 'Imgs/cVioletSmall.png'};
const cBrownIcon = {url: 'Imgs/cBrown.png'};
const cBrownIconSm = {url: 'Imgs/cBrownSmall.png'};

/*Иконка станций в проекте*/
const pGreenIcon = {url: 'Imgs/pGreen.png'};
const pOrangeIcon= {url: 'Imgs/pOrange.png'};
const pVioletIcon= {url: 'Imgs/pViolet.png'};
const pBrownIcon= {url: 'Imgs/pBrown.png'};

/*Иконки пересадочных узлов*/
const redBlueIcon = {url: 'Imgs/redBlue.png'};
const redCBrownIcon = {url: 'Imgs/redCBrown.png'};
const redOrangeIcon = {url: 'Imgs/redOrange.png'};
const redVioletIcon = {url: 'Imgs/redViolet.png'};
const planRedGreenIcon = {url: 'Imgs/planRedGreen.png'};
const blueGreenIcon = {url: 'Imgs/blueGreen.png'};
const blueOrViolIcon = {url: 'Imgs/blueOrangeViolet.png'};
const bluePBrownIcon = {url: 'Imgs/bluePBrown.png'};
const greenOrIcon = {url: 'Imgs/greenOrange.png'};
const greenPOrIcon = {url: 'Imgs/greenPOrange.png'};
const pGreenPViolIcon = {url: 'Imgs/pGreenPViolet.png'};
const violPBrownIcon = {url: 'Imgs/violetPBrown.png'};

/*Иконки станций пересадки-в перспективе, до проекта*/
const planIcon = {url: 'Imgs/plan.png'};
const planRedIcon = {url: 'Imgs/planRedL7.png'};
const planBlueIcon = {url: 'Imgs/planBlueL7.png'};
const planGreenIcon = {url: 'Imgs/planGreenL7.png'};
const planOrangeIcon = {url: 'Imgs/planOrangeL7.png'};
const planVioletIcon = {url: 'Imgs/planVioletL7.png'};
const planCOrangeIcon = {url: 'Imgs/planCOrangeL7.png'};
const planPBrownIcon = {url: 'Imgs/planPBrownL7.png'};

/*Пустая иконка*/
const emptyIcon = '#fff';

/*Название линий*/
const nameLine1 = 'Кировско-Выборгская (1 линия «Красная»)';
const nameLine2 = 'Московско-Петроградская (2 линия «Синяя»)';
const nameLine3 = 'Невско-Василеостровская (3 линия «Зеленая»)';
const nameLine4 = 'Правобережная (4 линия «Оранжевая»)';
const nameLine5 = 'Фрунзенско-Приморская (5 линия «Фиолетовая»)';
const nameLine6 = 'Красносельско-Калининская (6 линия «Кориченвая»)';
const nameLine7 = 'Кольцевая (7 линия)';
/************** Описание станций ****************/
/************************************************/

const fPart = '<div class="station_content"><p><b>Год открытия</b> - ';
const fPartWorkL7 = '<div class="station_content"><p><h3 class="article_header">Действующая станция</h3></p>'+'<p><b>Год открытия</b> - ';
const fPartConstrL7 = '<div class="station_content"><p><h3 class="article_header">Строящаяся станция</h3></p>'+'<p><b>Время постройки</b> - ';
const fPartPrL7 = '<div class="station_content"><p><h3 class="article_header">Проектируемая станция</h3></p>'+'<p><b>Время постройки</b> - ';
const fPartProspL7 = '<div class="station_content"><p><h3 class="article_header">Перспективная станция - 1</h3></p>'+'<p><b>Время постройки</b> - ';
const lPartL7 = '<p><h3 class="article_header prosp_header">Перспективная станция</h3></p>'+'<p><b>Время постройки</b> - после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p></div>';
const lPartProspL7 = '<p><h3 class="article_header prosp_header">Перспективная станция - 2</h3></p>'+'<p><b>Время постройки</b> - после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p></div>';
const fPartProsp ='<div class="station_content"><p><b>Время постройки</b> - ';
const fImgPart = '<div class="station_img"><img src="https://undergroundexpert.info/wp-content/themes/shablon/Imgs/';
const lImgPart = ' height=75 width=100>';

/*Описание действующих станций 1 линии*/
const contL1 = [
[fPart + '1978</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + '1st_line/Devyatkino.png"' + lImgPart + '</div>'],
[fPart + '1978</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + '1st_line/GrajdanskyPr.png"' + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + '1st_line/Akademicheskaya.png"' + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '1st_line/Politehnicheskaya.png"' + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + '1st_line/Pl_Muzhestva.png"' + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + '1st_line/Lesnaya.png"' + lImgPart + '</div>'],
[fPart + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:45 -- 00:45</p></div>'+
fImgPart + '1st_line/Vyborgskaya.png"' + lImgPart + '</div>'],
[fPart + '1958</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 71 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + '1st_line/PlLenina.png"' + lImgPart + '</div>'],
[fPart + '1958</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 70 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:40</p></div>'+
fImgPart + '1st_line/Chernyshevskaya.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 58 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:45</p></div>'+
fImgPart + '1st_line/Pl_Vosstaniya.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 55 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + '1st_line/Vladimirskaya.png"' + lImgPart + '</div>'],
[fPart + '1956</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + '1st_line/Pushkinskaya.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 07:00 -- 20:00</p></div>'+
fImgPart + '2nd_line/TechnologicheskyIns_2.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:50</p></div>'+
fImgPart + '1st_line/Baltiyskaya.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 52 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:50</p></div>'+
fImgPart + '1st_line/Narvskaya.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 50 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 00:55</p></div>'+
fImgPart + '1st_line/Kirovsky_Zavod.png"' + lImgPart + '</div>'],
[fPart + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 12 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 00:55</p></div>'+
fImgPart + '1st_line/Avtovo.png"' + lImgPart + '</div>'],
[fPart + '1977</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 8 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 01:00</p></div>'+
fImgPart + '1st_line/Leninsky_Pr.png"' + lImgPart + '</div>'],
[fPart + '1977</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 8 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 01:00</p></div>'+
fImgPart + '1st_line/Pr_Veteranov.png"' + lImgPart + '</div>']
];

/*Описание перспективных станций 1 линии*/
const contProspL1 = [
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
const contL2 = [
[fPart + '2006</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + '2nd_line/Parnas.png"' + lImgPart + '</div>'],
[fPart + '1988</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + '2nd_line/PrProsvescheniya.png"' + lImgPart + '</div>'],
[fPart + '1988</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 59 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + '2nd_line/Ozerki.png"' + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '2nd_line/Udelnaya.png"' + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + '2nd_line/Pionerskaya.png"' + lImgPart + '</div>'],
[fPart + '1982</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 67 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + '2nd_line/Chernaya_Rechka.png"' + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 53 метра</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + '2nd_line/Petrogradskaya.png"' + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 53 метра</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + '2nd_line/Gorkovskaya.png"' + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 63 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + '2nd_line/NevskyPr.png"' + lImgPart + '</div>'],
[fPart + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 55 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '2nd_line/Sennaya_Pl.png"' + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + '2nd_line/TechnologicheskyIns_2.png"' + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 39 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + '2nd_line/Frunzenskaya.png"' + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p></div>'+
fImgPart + '2nd_line/Moskovskie_Vorota.png"' + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:00</p></div>'+
fImgPart + '2nd_line/Electrosila.png"' + lImgPart + '</div>'],
[fPart + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p></div>'+
fImgPart + '2nd_line/Park_Pobedy.png"' + lImgPart + '</div>'],
[fPart + '1969</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 29 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '2nd_line/Moskovskaya.png"' + lImgPart + '</div>'],
[fPart + '1972</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 22 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:55</p></div>'+
fImgPart + '2nd_line/Zvezdnaya.png"' + lImgPart + '</div>'],
[fPart + '1972</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p></div>'+
fImgPart + '2nd_line/Kupchino.png"' + lImgPart + '</div>']
];

/*Описание действующих станций 3 линии*/
const contL3 = [
[fPart + '2018</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 17 метров</p>'+'<p><b>Время работы</b> - 05:30 -- 01:05</p></div>'+
fImgPart + '3rd_line/Begovaya.png"' + lImgPart + '</div>'],
[fPart + '2018</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 17 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 01:05</p></div>'+
fImgPart + '3rd_line/"' + lImgPart + '</div>'],
[fPart + '1979</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 71 метр</p>'+'<p><b>Время работы</b> - 05:34 -- 01:00</p></div>'+
fImgPart + '3rd_line/Primorskaya.png"' + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + '3rd_line/Vasileostrovskaya.png"' + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 56 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:50</p></div>'+
fImgPart + '3rd_line/Gostinyi_Dvor.png"' + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 51 метр</p>'+'<p><b>Время работы</b> - 05:40 -- 00:45</p></div>'+
fImgPart + '3rd_line/Mayakovskaya.png"' + lImgPart + '</div>'],
[fPart + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 54 метра</p>'+'<p><b>Время работы</b> - 05:32 -- 00:45</p></div>'+
fImgPart + '3rd_line/PlAlNevskogo_1.png"' + lImgPart + '</div>'],
[fPart + '1970</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + '3rd_line/Elizarovskaya.png"' + lImgPart + '</div>'],
[fPart + '1970</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + '3rd_line/Lomonosovskaya.png"' + lImgPart + '</div>'],
[fPart + '1981</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 72 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:55</p></div>'+
fImgPart + '3rd_line/Proletarskaya.png"' + lImgPart + '</div>'],
[fPart + '1981</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 05:38 -- 01:00</p></div>'+
fImgPart + '3rd_line/Obuhovo.png"' + lImgPart + '</div>'],
[fPart + '1984</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 0 метров (наземная станция)</p>'+'<p><b>Время работы</b> - 05:37 -- 00:55</p></div>'+
fImgPart + '3rd_line/Rybackoe.png"' + lImgPart + '</div>']
];

/*Описание проектируемых станций 3 линии*/
const contPrL3 = [
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

/*Описание перспективных станций 3 линии*/
const contProspL3 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 20 метров</p>'+
'<p><b>Адрес</b> - пересечение Выборгского ш. и Горского ш.</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Адрес</b> - на территории пос. Парголово Выборгского р-на</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 10-15 метров</p>'+
'<p><b>Адрес</b> - район Суздальского шоссе</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+
'<p><b>Адрес</b> - Два вестибюля: пересечение Парашютной ул. и Шуваловского пр.;<br>'+
'в промзоне на Ново-Никитинской ул.</p></div>'+
'</div>']
];

/*Описание действующих станций 4 линии*/
const contL4 = [
[fPart + '2009</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p></div>'+
fImgPart + '4th_line/Spasskaya.png"' + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 07:00 -- 20:00</p></div>'+
fImgPart + '4th_line/Dostoevskaya.png"' + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 66 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:35</p></div>'+
fImgPart + '4th_line/LigovskyPr.png"' + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:32 -- 00:23</p></div>'+
fImgPart + '4th_line/PlAlNevskogo_2.png"' + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:39 -- 00:35</p></div>'+
fImgPart + '4th_line/Novocherkasskaya.png"' + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:40 -- 00:40</p></div>'+
fImgPart + '4th_line/Ladozhskaya.png"' + lImgPart + '</div>'],
[fPart + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 68 метра</p>'+'<p><b>Время работы</b> - 05:37 -- 00:45</p></div>'+
fImgPart + '4th_line/Pr_Bolshevikov.png"' + lImgPart + '</div>'],
[fPart + '1987</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + '4th_line/UlDybenko.png"' + lImgPart + '</div>'],
];

/*Описание строящихся станций 4 линии*/
const contConstrL4 = [
[fPartProsp + 'ноябрь 2019 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Большой пр. В.О. (юго-западнее пересечения Большого пр. и Косой линии)</p></div>'+
fImgPart + '4th_line/"' + lImgPart + '</div>'],
[fPartProsp + 'ноябрь 2019 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Ул. Декабристов (южнее пересечения ул. Декабристов и ул. Глинки)</p></div>'+
fImgPart + '4th_line/Teatralnaya.png"' + lImgPart + '</div>']
];

/*Описание проектируемых станций 4 линии*/
const contPrL4 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Крестовский остров, западнее нового стадиона «Зенит-Арена»</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - угол Морской набережной и Капитанской ул.</p></div>'+
fImgPart + '4th_line/Morskoy_Fasad.png"' + lImgPart +'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - пересечение Шкиперского протока и Галерного проезда</p></div>'+
fImgPart + '4th_line/Gavan.png"' + lImgPart +'</div>']
];

/*Описание перспективных станций 4 линии*/
const contProspL4 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - район ЖК Юнтолово</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Вестибюль будет расположен вблизи одноименной улицы</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - вблизи БЦ "Лахта Центр"</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля будут расположены на Мурманском ш.,<br>'+
'восточнее путепровода «Нева»</p></div>'+
'</div>']
];

/*Описание действующих станций 5 линии*/
const contL5 = [
[fPart + '2005</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 75 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:55</p></div>'+
fImgPart + '5th_line/"' + lImgPart + '</div>'],
[fPart + '1999</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '5th_line/Staraya_Derevnya.png"' + lImgPart + '</div>'],
[fPart + '1999</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 49 метров</p>'+'<p><b>Время работы</b> - 05:42 -- 00:45</p></div>'+
fImgPart + '5th_line/Krestovsky_Ostrov.png"' + lImgPart + '</div>'],
[fPart + '1997</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 60 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:40</p></div>'+
fImgPart + '5th_line/Chkalovskaya.png"' + lImgPart + '</div>'],
[fPart + '1997</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 64 метров</p>'+'<p><b>Время работы</b> - 05:36 -- 00:40</p></div>'+
fImgPart + '5th_line/Sportivnaya.png"' + lImgPart + '</div>'],
[fPart + '2011</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 86 метров</p>'+'<p><b>Время работы</b> - 05:38 -- 00:40</p></div>'+
fImgPart + '5th_line/Admiralteyskaya.png"' + lImgPart + '</div>'],
[fPart + '1991</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 71 метр</p>'+'<p><b>Время работы</b> - 05:36 -- 00:45</p></div>'+
fImgPart + '5th_line/Sadovaya.png"' + lImgPart + '</div>'],
[fPart + '2009</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 57 метров</p>'+'<p><b>Время работы</b> - 05:40 -- 00:50</p></div>'+
fImgPart + '5th_line/Zvenigorodskaya.png"' + lImgPart + '</div>'],
[fPart + '2010</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + '5th_line/Obvodnyi_Kanal.png"' + lImgPart + '</div>'],
[fPart + '2008</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:35 -- 00:45</p></div>'+
fImgPart + '5th_line/"' + lImgPart + '</div>'],
[fPart + '2012</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:37 -- 00:50</p></div>'+
fImgPart + '5th_line/"' + lImgPart + '</div>'],
[fPart + '2012</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p></div>'+
fImgPart + '5th_line/"' + lImgPart + '</div>']
];

/*Описание строящихся станций 5 линии*/
const contConstrL5 = [
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: Бухарестская ул., (южнее пересечения пр. Славы с Бухарестской ул.);<br>'+
'Бухарестская ул. (юго-восточнее пересечения Бухарестской ул. с Альпийским пер.)</p></div>'+
fImgPart + '5th_line/Pr_Slavy.png"' + lImgPart + '</div>'],
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - Бухарестская ул. (юго-восточнее пересечения Дунайского пр. и Бухарестской ул.)</p></div>'+
fImgPart + '5th_line/Dunaiskaya.png"' + lImgPart + '</div>'],
[fPartProsp + 'конец 2018 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - пос. Шушары, Автозаводская ул., уч. №1 (западнее пересечения с Софийской ул.)</p></div>'+
'</div>']
];

/*Описание проектируемых станций 5 линии*/
const contPrL5 = [
[fPartProsp + '2023-2025 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - на пересечении Шуваловского пр. с пр. Авиаконструкторов</p></div>'+
'</div>']
];

/*Описание перспективных станций 5 линии*/
const contProspL5 = [
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - пересечение Комендантского пр. и Парашютной ул.</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - вблизи пересечения дор.в Каменку и р.Каменки</p></div>'+
'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Адрес</b> - южнее пересечения магистрали №31 и продолжения Комендантского пр.</p></div>'+
'</div>']
];


/*Описание строящихся станций 6 линии*/
const contConstrL6 = [
[fPartProsp + 'июнь 2022 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ул. Васи Алексеева (западнее дома №12 корп.1 по ул. Маршала Говорова)</p></div>'+
fImgPart + '6th_line/Putilovskaya.png"' + lImgPart + '</div>'],
[fPartProsp + 'июнь 2022 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ул. Маршала Казакова (юго-западнее пересечения ул. Маршала Казакова и пр.Маршала Жукова)</p></div>'+
fImgPart + '6th_line/Yugo-zapadnaya.png"' + lImgPart + '</div>']
];

/*Описание проектируемых станций 6 линии*/
const contPrL6 = [
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - юго-восточнее дома 42 на наб. Обводного канала</p></div>'+
fImgPart + '6th_line/Karertnaya.png"' + lImgPart + '</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: Киевская ул. (юго-западнее пересечения с Черниговской ул.);<br>'+
'Лиговский пр. (севернее дома № 236, литера Б)</p></div>'+
fImgPart + '6th_line/Borovaya.png"' + lImgPart + '</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Ташкентская ул. (северо-западнее дома № 103, корп.6, литера А, по Московскому пр.)</p></div>'+
fImgPart + '6th_line/Zastavskaya.png"' + lImgPart + '</div>'],
[fPartProsp + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: подземный - на северо-западной стороне<br>'+
'Т-образного перекрестка Благодатной ул. и Новоизмайловского пр.;<br>'+
'Второй - на западной стороне Митрофаньевского ш., недалеко от ЗСД</p></div>'+
fImgPart + '6th_line/Bronevaya.png"' + lImgPart + '</div>']
];

/*Описание перспективных станций 6 линии*/
const contProspL6 = [
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

/*Блок перспектиных станций 7 линии*/
const contProspL7 = [
[fPartWorkL7 + '1975</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:42 -- 00:50</p>'+
lPartL7 + fImgPart + '1st_line/Lesnaya.png"' + lImgPart + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - пересечение Кантемировской ул. и Выборгской наб.</p></div>'+'</div>'],
[fPartWorkL7 + '1963</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 53 метра</p>'+'<p><b>Время работы</b> - 05:32 -- 01:00</p>'+
lPartL7 + fImgPart + '2nd_line/Petrogradskaya.png"' + lImgPart + '</div>'],
[fPartWorkL7 + '1997</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:40</p>'+
lPartL7 + fImgPart + '5th_line/Sportivnaya.png"' + lImgPart + '</div>'],
[fPartWorkL7 + '1967</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 64 метра</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p>'+
lPartL7 + fImgPart + '3rd_line/Vasileostrovskaya.png"' + lImgPart + '</div>'],
[fPartConstrL7 + 'ноябрь 2019 года</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Адрес</b> - Большой пр. В.О. (юго-западнее пересечения Большого пр. и Косой линии)</p>'+
lPartL7 + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - между д.3 и д.5 по Двинской ул. </p></div>'+'</div>'],
[fPartWorkL7 + '1955</p>'+'<p><b>Линия</b> - '+ nameLine1 +'</p>'+
'<p><b>Глубина</b> - 52 метра</p>'+'<p><b>Время работы</b> - 05:36 -- 00:50</p>'+
lPartL7 + fImgPart + '1st_line/Narvskaya.png"' + lImgPart + '</div>'],
[fPartPrL7 + '2026-2027 год</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - Два вестибюля: подземный - на северо-западной стороне<br>'+
'Т-образного перекрестка Благодатной ул. и Новоизмайловского пр.<br>'+
'Второй - на западной стороне Митрофаньевского ш., недалеко от ЗСД</p>'+
lPartL7 + fImgPart + '6th_line/Bronevaya.png"' + lImgPart + '</div>'],
[fPartWorkL7 + '1961</p>'+'<p><b>Линия</b> - '+ nameLine2 +'</p>'+
'<p><b>Глубина</b> - 35 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:55</p>'+
lPartL7 + fImgPart + '2nd_line/Park_Pobedy.png"' + lImgPart + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - пересечение Витебского пр. и Бассейной ул.</p></div>'+'</div>'],
[fPartWorkL7 + '1961</p>'+'<p><b>Линия</b> - '+ nameLine5 +'</p>'+
'<p><b>Глубина</b> - 65 метров</p>'+'<p><b>Время работы</b> - 05:35 -- 00:50</p>'+
lPartL7 + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - вблизи ж/д станции "Фарфоровская"</p></div>'+'</div>'],
[fPartWorkL7 + '1970</p>'+'<p><b>Линия</b> - '+ nameLine3 +'</p>'+
'<p><b>Глубина</b> - 62 метра</p>'+'<p><b>Время работы</b> - 05:38 -- 00:45</p>'+
lPartL7 + fImgPart + '3rd_line/Elizarovskaya.png"' + lImgPart + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - пересечение ул. Колонтай и Дальневосточного пр.</p></div>'+'</div>'],
[fPartWorkL7 + '1985</p>'+'<p><b>Линия</b> - '+ nameLine4 +'</p>'+
'<p><b>Глубина</b> - 61 метр</p>'+'<p><b>Время работы</b> - 05:40 -- 00:40</p>'+
lPartL7 + fImgPart + '4th_line/Ladozhskaya.png"' + lImgPart + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - Красногвардейская пл.</p></div>'+'</div>'],
[fPartProspL7 + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine6 +'</p>'+
'<p><b>Адрес</b> - пересечение шоссе Революции и Среднеохтинского пр.</p>'+ 
lPartProspL7 + '</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - площадь Калинина</p></div>'+'</div>'],
[fPartProsp + 'после 2030 года</p>'+'<p><b>Линия</b> - '+ nameLine7 +'</p>'+
'<p><b>Адрес</b> - пересечение Полюстровского пр. и Литовской ул.</p></div>'+'</div>']
];

/******************Описание пересадочных узлов*****************/
/**************************************************************/
const contTransfL=[
['<h3 class="content__header--transfer">Станция метро «Площадь Восстания»</h3>'+'<div>'+ contL1[9] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Маяковская»</h3>'+'<div>'+ contL3[5] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Знаменская»</h3>'+'<div>'+ contProspL6[6] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Владимирская»</h3>'+'<div>'+ contL1[10] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Достоевская»</h3>'+'<div>'+ contL4[1] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Пушкинская»</h3>'+'<div>'+  contL1[11] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Звенигородская»</h3>'+'<div>'+ contL5[7] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Технологический институт 1»</h3>'+'<div>'+ contL1[12] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Технологический институт 2»</h3>'+'<div>'+ contL2[10] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Кировский завод»</h3>'+'<div>'+ contL1[15] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Путиловская»</h3>'+'<div>'+ contConstrL6[0] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Невский проспект»</h3>'+'<div>'+ contL2[8] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Гостиный двор»</h3>'+'<div>'+ contL3[4] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Сенная площадь»</h3>'+'<div>'+ contL2[9] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Спасская»</h3>'+'<div>'+ contL4[0] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Садовая»</h3>'+'<div>'+ contL5[6] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Московские ворота»</h3>'+'<div>'+ contL2[12] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Заставская»</h3>'+'<div>'+ contPrL6[2] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Планерная»</h3>'+'<div>'+ contPrL3[0] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Шуваловский проспект»</h3>'+'<div>'+ contPrL5[0] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Новокрестовская 1»</h3>'+'<div>'+ contL3[1] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Новокрестовская 2»</h3>'+'<div>'+ contPrL4[0] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Площадь Ал. Невского 1»</h3>'+'<div>'+ contL3[6] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Площадь Ал. Невского 2»</h3>'+'<div>'+ contL4[3] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Лиговский проспект 1»</h3>'+'<div>'+ contL4[2] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Лиговский проспект 2»</h3>'+'<div>'+ contProspL6[7] +'</div>'+
'</div>'],
['<h3 class="content__header--transfer">Станция метро «Обводный канал»</h3>'+'<div>'+ contL5[8] +'</div>'+
'<h3 class="content__header--transfer">Станция метро «Каретная»</h3>'+'<div>'+ contPrL6[0] +'</div>'+
'</div>']
];

/*Блок всех станций---------------------------*/
/*Блок станций 1 линии (красная)*/
const l1stradius = [
['Станция метро «Бугры»', {lat: 60.071203, lng: 30.395416}, contProspL1[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Культуры»', {lat: 60.044656, lng: 30.372311}, contProspL1[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновка»', {lat: 60.031134, lng: 30.365952}, contProspL1[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[2], redIcon, redLine, cplop, lw, 0]
];

const l1st = [
['Станция метро «Девяткино»', {lat: 60.050456, lng: 30.443683}, contL1[0], redIcon, redLine, rlop, lw, 0],
['Станция метро «Гражданский проспект»', {lat: 60.035226, lng: 30.418243}, contL1[1], redIcon, redLine, rlop, lw, 0],
['Станция метро «Академическая»', {lat: 60.012773, lng: 30.395945}, contL1[2], redIcon, redLine, rlop, lw, 0],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[3], redIcon, redLine, rlop, lw, 0],
['Станция метро «Площадь Мужества»', {lat: 59.999673, lng: 30.366052}, contL1[4], redIcon, redLine, rlop, lw, 0],
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, contL1[5], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Выборгская»', {lat: 59.970963, lng: 30.347567}, contL1[6], redIcon, redLine, rlop, lw, 0],
['Станция метро «Площадь Ленина»', {lat: 59.958511, lng: 30.355031}, contL1[7], redIcon, redLine, rlop, lw, 0],
['Станция метро «Чернышевская»', {lat: 59.944606, lng: 30.359709}, contL1[8], redIcon, redLine, rlop, lw, 0],
['Станция метро «Площадь Восстания»', {lat: 59.931589, lng: 30.360368}, contL1[9], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Владимирская»', {lat: 59.927751, lng: 30.347135}, contL1[10], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Пушкинская»', {lat: 59.922076, lng: 30.331756}, contL1[11], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL1[12], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Балтийская»', {lat: 59.907681, lng: 30.300104}, contL1[13], redIcon, redLine, rlop, lw, 0],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, contL1[14], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, contL1[15], emptyIcon, redLine, rlop, lw, 0],
['Станция метро «Автово»', {lat: 59.867294, lng: 30.261240}, contL1[16], redIcon, redLine, lop, lw, 0],
['Станция метро «Ленинский проспект»', {lat: 59.850641, lng: 30.268387}, contL1[17], redIcon, redLine, rlop, lw, 0],
['Станция метро «Проспект Ветеранов»', {lat: 59.842154, lng: 30.250260}, contL1[18], redIcon, greyLine, cplop, cplw, 1],
['Станция метро «Александрино»', {lat: 59.833532, lng: 30.218573}, contProspL1[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Маршала Жукова»', {lat: 59.828321, lng: 30.190634}, contProspL1[4], planIcon, greyLine, cplop, cplw, 1]
];

/*Блок станций 2 линии (синия)*/
const l2st = [
['Станция метро «Парнас»', {lat: 60.066914, lng: 30.334046}, contL2[0], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Проспект Просвещения»', {lat: 60.051442, lng: 30.332521}, contL2[1], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Озерки»', {lat: 60.036936, lng: 30.321665}, contL2[2], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Удельная»', {lat: 60.016616, lng: 30.314947}, contL2[3], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Пионерская»', {lat: 60.002512, lng: 30.296750}, contL2[4], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Черная речка»', {lat: 59.985493, lng: 30.300869}, contL2[5], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Петроградская»', {lat: 59.966413, lng: 30.311513}, contL2[6], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Горьковская»', {lat: 59.956151, lng: 30.318757}, contL2[7], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Невский проспект»', {lat: 59.934753, lng: 30.330472}, contL2[8], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Сенная полщадь»', {lat: 59.926731, lng: 30.317583}, contL2[9], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL2[10], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Фрунзенская»', {lat: 59.906266, lng: 30.317603}, contL2[11], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Московские ворота»', {lat: 59.891733, lng: 30.318155}, contL2[12], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Электросила»', {lat: 59.879169, lng: 30.318735}, contL2[13], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Парк Победы»', {lat: 59.866232, lng: 30.321752}, contL2[14], emptyIcon, blueLine, cplop, lw, 0],
['Станция метро «Московская»', {lat: 59.853166, lng: 30.321813}, contL2[15], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Звездная»', {lat: 59.833293, lng: 30.349559}, contL2[16], blueIcon, blueLine, cplop, lw, 0],
['Станция метро «Купчино»', {lat: 59.829955, lng: 30.375258}, contL2[17], blueIcon, blueLine, cplop, lw, 0]
];

/*Блок станций 3 линии (зеленая)*/
const l3st= [
['Станция метро «Осиновая Роща»', {lat: 60.108162, lng: 30.250722}, contProspL3[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Парголово»', {lat: 60.079337, lng: 30.258388}, contProspL3[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Академгородок»', {lat: 60.057987, lng: 30.267232}, contProspL3[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Парашютная»', {lat: 60.031920, lng: 30.253169}, contProspL3[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Планерная»', {lat: 60.025094, lng: 30.228572}, contPrL3[0], emptyIcon, greenLine, cplop, cplw, 1],
['Станция метро «Туристская»', {lat: 60.001656, lng: 30.210603}, contPrL3[1], pGreenIcon, greenLine, cplop, cplw, 1],
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, contL3[0], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Новокрестовская 1»', {lat: 59.971779, lng: 30.211776}, contL3[1], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, contL3[2], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, contL3[3], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934753, lng: 30.330472}, contL3[4], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931589, lng: 30.360368}, contL3[5], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.924040, lng: 30.384129}, contL3[6], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, contL3[7], emptyIcon, greenLine, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, contL3[8], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, contL3[9], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, contL3[10], greenIcon, greenLine, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, contL3[11], greenIcon, greenLine, lop, lw, 0]
];

/*Блок станций 4 линии (оранжевая)*/
const l4st= [
['Станция метро «Юнтолово»', {lat: 60.026284, lng: 30.109246}, contProspL4[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Конная Лахта»', {lat: 60.006622, lng: 30.159162}, contProspL4[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лахта»', {lat: 59.988845, lng: 30.176518}, contProspL4[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Новокрестовская 2»', {lat: 59.971779, lng: 30.211776}, contPrL4[0], emptyIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Морской Фасад»', {lat: 59.948496, lng: 30.216191}, contPrL4[1], pOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Гавань»', {lat: 59.932537, lng: 30.227705}, contPrL4[2], pOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Большой проспект»', {lat: 59.930386, lng: 30.261608}, contConstrL4[0], emptyIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, contConstrL4[1], cOrangeIcon, orangeLine, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926731, lng: 30.317583}, contL4[0], emptyIcon, orangeLine, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.927751, lng: 30.347135}, contL4[1], emptyIcon, orangeLine, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, contL4[2], emptyIcon, orangeLine, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.924040, lng: 30.384129}, contL4[3], emptyIcon, orangeLine, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, contL4[4], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, contL4[5], emptyIcon, orangeLine, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, contL4[6], orangeIcon, orangeLine, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, contL4[7], orangeIcon, greyLine, cplop, cplw, 1],
['Станция метро «Кудрово»', {lat: 59.890394, lng: 30.506622}, contProspL4[3], planIcon, greyLine, cplop, cplw, 1]
];

/*Блок станций 5 линии (фиолетовая)*/
const l5st= [
['Станция метро «Коломяжская»', {lat: 60.064634, lng: 30.194947}, contProspL5[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Каменка»', {lat: 60.046687, lng: 30.206302}, contProspL5[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Магистраль №31»', {lat: 60.035958, lng: 30.227710}, contProspL5[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Шуваловский проспект»', {lat: 60.025094, lng: 30.228572}, contPrL5[0], emptyIcon, violetLine, cplop, cplw, 1],
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, contL5[0], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, contL5[1], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, contL5[2], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, contL5[3], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, contL5[4], emptyIcon, violetLine, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, contL5[5], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926731, lng: 30.317583}, contL5[6], emptyIcon, violetLine, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922076, lng: 30.331756}, contL5[7], emptyIcon, violetLine, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, contL5[8], emptyIcon, violetLine, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, contL5[9], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, contL5[10], violetIcon, violetLine, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, contL5[11], emptyIcon, violetLine, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, contConstrL5[0], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, contConstrL5[1], cVioletIcon, violetLine, cplop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662},contConstrL5[2], cVioletIcon, violetLine, cplop, cplw, 1]
];

/*Блок станций 6 линии (коричневая)*/
const l6st= [
['Станция метро «Ручьи»', {lat: 60.002356, lng: 30.451250}, contProspL6[0], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Пискаревка»', {lat: 59.987520, lng: 30.425306}, contProspL6[1], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Бестужевская»', {lat: 59.974786, lng: 30.435452}, contProspL6[2], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Полюстровский проспект»', {lat: 59.959525, lng: 30.414923}, contProspL6[3], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Смольный»', {lat: 59.949658, lng: 30.392099}, contProspL6[4], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Суворовская»', {lat: 59.938027, lng:30.373974}, contProspL6[5], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Знаменская»', {lat: 59.931589, lng: 30.360368}, contProspL6[6], emptyIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Лиговский проспект 2»', {lat: 59.920985, lng: 30.354594}, contProspL6[7], emptyIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Каретная»', {lat: 59.914543, lng: 30.349430}, contPrL6[0], emptyIcon, brownLine, cplop, cplw, 1, delRenL6],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, contPrL6[1], pBrownIcon, brownLine, cplop, cplw, 1, delRenL6],
['Станция метро «Заставская»', {lat: 59.891733, lng: 30.318155}, contPrL6[2], emptyIcon, brownLine, cplop, cplw, 1, delRenL6],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, contPrL6[3], emptyIcon, brownLine, cplop, cplw, 1, delRenL6],
['Станция метро «Путиловская»', {lat: 59.879802, lng: 30.261333}, contConstrL6[0], emptyIcon, brownLine, cplop, cplw, 1, delRenL6],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Брестская»', {lat: 59.856149, lng: 30.200588}, contProspL6[8], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Улица Доблести»', {lat: 59.862192, lng: 30.179290}, contProspL6[9], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Петергофское шоссе»', {lat: 59.847732, lng: 30.160696}, contProspL6[10], planIcon, greyLine, cplop, cplw, 1, delRenL6],
['Станция метро «Сосновая Поляна»', {lat: 59.825703, lng: 30.145944}, contProspL6[11], planIcon, greyLine, cplop, cplw, 1, delRenL6]
];

/*Блок станций 7 линии (ярко-синяя) для отображении со всеми линиями*/
const l7st = [
['Станция метро «Лесная 1/2»', {lat: 59.984789, lng: 30.344253}, contProspL7[0], planRedIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Кантемировская»', {lat: 59.980808, lng: 30.330515}, contProspL7[1], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Петроградская 1/2»', {lat: 59.966413, lng: 30.311513}, contProspL7[2], planBlueIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Спортивная 1/2»', {lat: 59.951835, lng: 30.290691}, contProspL7[3], planVioletIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Василеостровская 1/2»', {lat: 59.942669, lng: 30.278136}, contProspL7[4], planGreenIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Горный институт / Большой проспект 2»', {lat: 59.930386, lng: 30.261608}, contProspL7[5], planCOrangeIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Двинская»', {lat: 59.909501, lng: 30.254303}, contProspL7[6], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Нарвская 1/2»', {lat: 59.901178, lng: 30.274983}, contProspL7[7], planRedIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Броневая 1/2»', {lat: 59.876138, lng: 30.304550}, contProspL7[8], planPBrownIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Парк Победы 1/2»', {lat: 59.866232, lng: 30.321752}, contProspL7[9], planBlueIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Витебский проспект»', {lat: 59.865323, lng: 30.356574}, contProspL7[10], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Международная 1/2»', {lat: 59.870227, lng: 30.379399}, contProspL7[11], planVioletIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Фарфоровская»', {lat: 59.880034, lng: 30.403531}, contProspL7[12], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Елизаровская 1/2»', {lat: 59.896690, lng: 30.423680}, contProspL7[13], planGreenIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Дальневосточный проспект»', {lat: 59.913860, lng: 30.442489}, contProspL7[14], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Ладожская 1/2»', {lat: 59.932498, lng: 30.439265}, contProspL7[15], planOrangeIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Большеохтинская»', {lat: 59.943242, lng: 30.413506}, contProspL7[16], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Полюстровский проспект 1/2»', {lat: 59.959525, lng: 30.414923}, contProspL7[17], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Площадь Калинина»', {lat: 59.969344, lng: 30.386147}, contProspL7[18], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Арсенальная»', {lat: 59.977804, lng: 30.368204}, contProspL7[19], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Лесная 1/2»', {lat: 59.984789, lng: 30.344253}, contProspL7[0], emptyIcon, ligthGrLine, cplop, cplw, 1, delRenL7]
];

/*========================================*/
/*========================================*/

/****************Блок перпективных станций***************/
/********************************************************/
const l1pr = [
['Станция метро «Бугры»', {lat: 60.071203, lng: 30.395416}, contProspL1[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Культуры»', {lat: 60.044656, lng: 30.372311}, contProspL1[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновка»', {lat: 60.031134, lng: 30.365952}, contProspL1[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Александрино»', {lat: 59.833532, lng: 30.218573}, contProspL1[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Проспект Маршала Жукова»', {lat: 59.828321, lng: 30.190634}, contProspL1[4], planIcon, greyLine, cplop, cplw, 1]
];

/*['Станция метро «Бугры»', {lat: 60.071203, lng: 30.395416}, contProspL1[0], planIcon, greyLine, cplop, cplw, 1],*/
const l3pr = [
['Станция метро «Осиновая Роща»', {lat: 60.108162, lng: 30.250722}, contProspL3[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Парголово»', {lat: 60.079337, lng: 30.258388}, contProspL3[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Академгородок»', {lat: 60.057987, lng: 30.267232}, contProspL3[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Парашютная»', {lat: 60.031920, lng: 30.253169}, contProspL3[3], planIcon, greyLine, cplop, cplw, 1]
];

const l4pr = [
['Станция метро «Юнтолово»', {lat: 60.026284, lng: 30.109246}, contProspL4[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Конная Лахта»', {lat: 60.006622, lng: 30.159162}, contProspL4[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лахта»', {lat: 59.988845, lng: 30.176518}, contProspL4[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Кудрово»', {lat: 59.890394, lng: 30.506622}, contProspL4[3], planIcon, greyLine, cplop, cplw, 1]
];

const l5pr = [
['Станция метро «Коломяжская»', {lat: 60.064634, lng: 30.194947}, contProspL5[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Каменка»', {lat: 60.046687, lng: 30.206302}, contProspL5[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Магистраль №31»', {lat: 60.035958, lng: 30.227710}, contProspL5[2], planIcon, greyLine, cplop, cplw, 1]
];

const l6pr = [
['Станция метро «Ручьи»', {lat: 60.002356, lng: 30.451250}, contProspL6[0], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Пискаревка»', {lat: 59.987520, lng: 30.425306}, contProspL6[1], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Бестужевская»', {lat: 59.974786, lng: 30.435452}, contProspL6[2], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Полюстровский проспект»', {lat: 59.959525, lng: 30.414923}, contProspL6[3], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Смольный»', {lat: 59.949658, lng: 30.392099}, contProspL6[4], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Суворовская»', {lat: 59.938027, lng: 30.373974}, contProspL6[5], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Знаменская»', {lat: 59.930780, lng: 30.361255}, contProspL6[6], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Лиговский проспект 2»', {lat: 59.926757, lng: 30.357762}, contProspL6[7], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Брестская»', {lat: 59.856149, lng: 30.200588}, contProspL6[8], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Улица Доблести»', {lat: 59.862192, lng: 30.179290}, contProspL6[9], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Петергофское шоссе»', {lat: 59.847732, lng: 30.160696}, contProspL6[10], planIcon, greyLine, cplop, cplw, 1],
['Станция метро «Сосновая Поляна»', {lat: 59.825703, lng: 30.145944}, contProspL6[11], planIcon, greyLine, cplop, cplw, 1]
];

const l7pr = [
['Станция метро «Лесная 2»', {lat: 59.984789, lng: 30.344253}, contProspL7[0], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Кантемировская»', {lat: 59.980808, lng: 30.330515}, contProspL7[1], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Петроградская 2»', {lat: 59.966413, lng: 30.311513}, contProspL7[2], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Спортивная 2»', {lat: 59.951835, lng: 30.290691}, contProspL7[3], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Василеостровская 2»', {lat: 59.942669, lng: 30.278136}, contProspL7[4], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Горный институт / Большой проспект 2»', {lat: 59.930386, lng: 30.261608}, contProspL7[5], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Двинская»', {lat: 59.909501, lng: 30.254303}, contProspL7[6], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Нарвская 2»', {lat: 59.901178, lng: 30.274983}, contProspL7[7], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Броневая 2»', {lat: 59.876138, lng: 30.304550}, contProspL7[8], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Парк Победы 2»', {lat: 59.866232, lng: 30.321752}, contProspL7[9], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Витебский проспект»', {lat: 59.865323, lng: 30.356574}, contProspL7[10], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Международная 2»', {lat: 59.870227, lng: 30.379399}, contProspL7[11], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Фарфоровская»', {lat: 59.880034, lng: 30.403531}, contProspL7[12], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Елизаровская 2»', {lat: 59.896690, lng: 30.423680}, contProspL7[13], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Дальневосточный проспект»', {lat: 59.913860, lng: 30.442489}, contProspL7[14], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Ладожская 2»', {lat: 59.932498, lng: 30.439265}, contProspL7[15], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Большеохтинская»', {lat: 59.943242, lng: 30.413506}, contProspL7[16], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Полюстровский проспект 2»', {lat: 59.959525, lng: 30.414923}, contProspL7[17], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Площадь Калинина»', {lat: 59.969344, lng: 30.386147}, contProspL7[18], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Арсенальная»', {lat: 59.977804, lng: 30.368204}, contProspL7[19], planIcon, ligthGrLine, cplop, cplw, 1, delRenL7],
['Станция метро «Лесная 2»', {lat: 59.984789, lng: 30.344253}, contProspL7[0], emptyIcon, ligthGrLine, cplop, cplw, 1, delRenL7]
];

/*===================================*/
/*===================================*/

/********************Блок строящихся станций******************/
/*************************************************************/
const l1c = [
['Станция метро «Девяткино»', {lat: 60.050456, lng: 30.443683}, contL1[0], redIcon, redLine, lop, lw, 0],
['Станция метро «Гражданский проспект»', {lat: 60.035226, lng: 30.418243}, contL1[1], redIcon, redLine, lop, lw, 0],
['Станция метро «Академическая»', {lat: 60.012773, lng: 30.395945}, contL1[2], redIcon, redLine, lop, lw, 0],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, contL1[3], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Мужества»', {lat: 59.999673, lng: 30.366052}, contL1[4], redIcon, redLine, lop, lw, 0],
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, contL1[5], redIcon, redLine, lop, lw, 0],
['Станция метро «Выборгская»', {lat: 59.970963, lng: 30.347567}, contL1[6], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Ленина»', {lat: 59.958511, lng: 30.355031}, contL1[7], redIcon, redLine, lop, lw, 0],
['Станция метро «Чернышевская»', {lat: 59.944606, lng: 30.359709}, contL1[8], redIcon, redLine, lop, lw, 0],
['Станция метро «Площадь Восстания»', {lat: 59.931589, lng: 30.360368}, contL1[9], redIcon, redLine, lop, lw, 0],
['Станция метро «Владимирская»', {lat: 59.927593, lng: 30.347866}, contL1[10], redIcon, redLine, lop, lw, 0],
['Станция метро «Пушкинская»', {lat: 59.920536, lng: 30.329714}, contL1[11], redIcon, redLine, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL1[12], redIcon, redLine, lop, lw, 0],
['Станция метро «Балтийская»', {lat: 59.907681, lng: 30.300104}, contL1[13], redIcon, redLine, lop, lw, 0],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, contL1[14], redIcon, redLine, lop, lw, 0],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, contL1[15], redIcon, redLine, lop, lw, 0],
['Станция метро «Автово»', {lat: 59.867294, lng: 30.261240}, contL1[16], redIcon, redLine, lop, lw, 0],
['Станция метро «Ленинский проспект»', {lat: 59.850641, lng: 30.268387}, contL1[17], redIcon, redLine, lop, lw, 0],
['Станция метро «Проспект Ветеранов»', {lat: 59.842154, lng: 30.250260}, contL1[18], redIcon, greyLine, lop, lw, 0]
];

const l3c = [
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

const l4c = [
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

const l5c = [
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

const l6c = [
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIcon, brownLine, cplop, cplw, 1, 10]
];

/**/
/*==================================*/
/*==================================*/

/****************Блок проектируемых станций**************/
/********************************************************/
const l3p = [
['Станция метро «Планерная»', {lat: 60.025339, lng: 30.225418}, contPrL3[0], pGreenIcon, greenLine, cplop, cplw, 1],
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

const l4p = [
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

const l5p = [
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

const l6p = [
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, contPrL6[0], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, contPrL6[1], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, contPrL6[2], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, contPrL6[3], pBrownIcon, brownLine, cplop, cplw, 1, 10],
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIconSm, brownLine, lop, cplw, 1, 10],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, contConstrL6[1], cBrownIconSm, brownLine, lop, cplw, 1, 10]
];
/*======================================*/
/*======================================*/

/*Блок пересадочных узлов для отображения в блоке ВСЕ СТАНЦИИ*/
/*************************************************************/
const lTransfer=[
['Пересадочный узел «Площадь Восстания»/ «Маяковская»/ «Знаменская»', {lat: 59.931589, lng: 30.360368}, contTransfL[0], planRedGreenIcon],
['Пересадочный узел «Владимирская»/ «Достоевская»', {lat: 59.927751, lng: 30.347135}, contTransfL[1], redOrangeIcon],
['Пересадочный узел «Пушкинская»/ «Звенигородская»', {lat: 59.922076, lng: 30.331756}, contTransfL[2], redVioletIcon],
['Пересадочный узел «Технологический институт 1/2»', {lat: 59.916281, lng: 30.318447}, contTransfL[3], redBlueIcon],
['Пересадочный узел «Кировский завод»/ «Путиловская»', {lat: 59.879802, lng: 30.261333}, contTransfL[4], redCBrownIcon],
['Пересадочный узел «Невский проспект»/ «Гостиный Двор»', {lat: 59.934753, lng: 30.330472}, contTransfL[5], blueGreenIcon],
['Пересадочный узел «Сенная полщадь»/ «Спасская»/ «Садовая»', {lat: 59.926731, lng: 30.317583}, contTransfL[6], blueOrViolIcon],
['Пересадочный узел «Московские ворота»/ «Заставская»', {lat: 59.891733, lng: 30.318155}, contTransfL[7], bluePBrownIcon],
['Пересадочный узел «Планерная»/ «Шуваловский проспект»', {lat: 60.025094, lng: 30.228572}, contTransfL[8], pGreenPViolIcon],
['Пересадочный узел «Новокрестовская 1/2»', {lat: 59.971779, lng: 30.211776}, contTransfL[9], greenPOrIcon],
['Пересадочный узел «Площадь Ал. Невского 1/2»', {lat: 59.924040, lng: 30.384129}, contTransfL[10], greenOrIcon],
['Пересадочный узел «Лиговский проспект 1/2»', {lat: 59.920985, lng: 30.354594}, contTransfL[11], planOrangeIcon],
['Пересадочный узел «Обводный канал»/ «Каретная»', {lat: 59.914543, lng: 30.349430}, contTransfL[12], violPBrownIcon]
];

/*================================================*/
/*================================================*/

/*******Блок станций для отображения вне функции(блока) ВСЕ СТАНЦИИ******/
/************************************************************************/
const l1add = [
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, contL1[5], redIcon],
['Станция метро «Площадь Восстания»', {lat: 59.931589, lng: 30.360368}, contL1[9], redIcon],
['Станция метро «Владимирская»', {lat: 59.927593, lng: 30.347866}, contL1[10], redIcon],
['Станция метро «Пушкинская»', {lat: 59.920536, lng: 30.329714}, contL1[11], redIcon],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, contL1[12], redIcon],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, contL1[14], redIcon],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, contL1[15], redIcon]
];

const l2add = [
['Станция метро «Петроградская»', {lat: 59.966413, lng: 30.311513}, contL2[6], blueIcon],
['Станция метро «Невский проспект»', {lat: 59.935045, lng: 30.330090}, contL2[8], blueIcon],
['Станция метро «Сенная полщадь»', {lat: 59.927276, lng: 30.320419}, contL2[9], blueIcon],
['Станция метро «Технологический институт»', {lat: 59.916776, lng: 30.319010}, contL2[10], blueIcon],
['Станция метро «Московские ворота»', {lat: 59.891733, lng: 30.318155}, contL2[12], blueIcon],
['Станция метро «Парк Победы»', {lat: 59.866232, lng: 30.321752}, contL2[14], blueIcon]
];

const l3add = [
['Станция метро «Планерная»', {lat: 60.025339, lng: 30.225418}, contPrL3[0], pGreenIcon],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, contL3[1], greenIcon],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, contL3[3], greenIcon],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, contL3[4], greenIcon],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, contL3[5], greenIcon],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, contL3[6], greenIcon],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, contL3[7], greenIcon]
];

const l4add = [
['Станция метро «Новокрестовская 2»', {lat: 59.970450, lng: 30.219798}, contPrL4[0], pOrangeIcon],
['Станция метро «Большой проспект»', {lat: 59.930386, lng: 30.261608}, contConstrL4[0], cOrangeIcon],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, contL4[0], orangeIcon],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, contL4[1], orangeIcon],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, contL4[2], orangeIcon],
['Станция метро «Площадь Ал. Невского»', {lat: 59.924303, lng: 30.385399}, contL4[3], orangeIcon],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, contL4[5], orangeIcon]
];

const l5add = [
['Станция метро «Шуваловский проспект»', {lat: 60.024673, lng: 30.232099}, contPrL5[0], pVioletIcon],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, contL5[4], violetIcon],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, contL5[6], violetIcon],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, contL5[7], violetIcon],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, contL5[8], violetIcon],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, contL5[11], violetIcon]
];

const l6add = [
['Станция метро «Знаменская»', {lat: 59.930780, lng: 30.361255}, contProspL6[6], planIcon, greyLine],
['Станция метро «Лиговский проспект 2»', {lat: 59.926757, lng: 30.357762}, contProspL6[7], planIcon],
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, contPrL6[0], pBrownIcon],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, contPrL6[2], pBrownIcon],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, contPrL6[3], pBrownIcon],
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, contConstrL6[0], cBrownIcon]
];

/*======================================*/
/*======================================*/

var a;
/*Функция инициализации карты*/
function initMap(a) {
    var infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat:59.973,lng:30.330},
    });

  if(a == 1){
    dropLineFull(infowindow, 1);
  }else if (a == 2){
    dropLineFull(infowindow, 2);
  }else if (a == 3){
    dropLineFull(infowindow, 3);
  }else if (a == 4){
    dropLineFull(infowindow, 4);
  }else if (a == 5){
    dropLineFull(infowindow, 5);
  }else if (a == 6){
    dropLineFull(infowindow, 6);
  }else if (a == 7){
    dropLineFull(infowindow, 7);
  }else if (a == 8){
    dropConstr(infowindow);
  }else if (a == 9){
    dropProject(infowindow);
  }else{
    dropAll(infowindow);
  }

/*Функция опускающая маркеры и рисующая ВСЕ линии при инициализации карты*/
function dropAll(infowindow){
  clearMarkers();
  removeLine();
  dropline(infowindow, l1st);
  dropline(infowindow, l1stradius);
  dropline(infowindow, l2st);
  dropline(infowindow, l3st);
  dropline(infowindow, l4st);
  dropline(infowindow, l5st);
  dropline6(infowindow, l6st);
  dropline7(infowindow, l7st);
  dropmarker(infowindow, lTransfer);
}

function dropConstr(infowindow){
  clearMarkers();
  removeLine();
  dropline(infowindow, l1c);
  dropline(infowindow, l2st);
  dropline(infowindow, l3c);
  dropline(infowindow, l4c);
  dropline(infowindow, l5c);
  dropline6(infowindow, l6c);
}

function dropProject(infowindow){
  clearMarkers();
  removeLine();
  dropline(infowindow, l1c);
  dropline(infowindow, l2st);
  dropline(infowindow, l3p);
  dropline(infowindow, l4p);
  dropline(infowindow, l5p);
  dropline6(infowindow, l6p);
}

function dropLineFull(infowindow, line){
  clearMarkers();
  removeLine();
  var lineNum;

  if (line == 1){
  	lineNum = l1stradius;
  	dropline(infowindow, lineNum);
  	dropmarker(infowindow, l1add);
  	lineNum = l1st;
  }else if (line == 2){
  	lineNum = l2st;
  	dropmarker(infowindow, l2add);
  }else if (line == 3){
  	lineNum = l3st;
  	dropmarker(infowindow, l3add);
  }else if (line == 4){
  	lineNum = l4st;
  	dropmarker(infowindow, l4add);
  }else if (line == 5){
  	lineNum = l5st;
  	dropmarker(infowindow, l5add);
  }else if (line == 6){
  	lineNum = l6st;
  	dropmarker(infowindow, l6add);
  }else{
  	lineNum = l7pr;
  }

  dropline(infowindow, lineNum);
}

/**************************************************
/*Прорисовка всех линий*/
/**************************************************/
function dropline(infowindow, lineN) {
	var lineNum = lineN;
	var l;
	var lN;
    for (var i = 0; i < lineNum.length; i++) {
      if (i != lineNum.length-1){
      l = lineNum[i];
      lN = lineNum[i+1];
      var linepatharr = [l[1],lN[1]]; 

      addLine(linepatharr, l[4], l[5], l[6], l[7]);
      };

      l = lineNum[i];
      addMarkerWithTimeout(l[0], l[1], l[2], l[3], i*50, infowindow);
    }
}

function dropline6(infowindow, lineN) {
	var lineNum = lineN;
	var l;
	var lN;
    for (var i = 0; i < lineNum.length; i++) {
      if (i != lineNum.length-1){
      l = lineNum[i];
	  lN = lineNum[i+1];
      var linepatharr = [l[1],lN[1]]; 

      addLine(linepatharr, l[4], l[5], l[6], l[7]);
      };

      l = lineNum[i];
      addMarkerWithTimeout(l[0], l[1], l[2], l[3], l[8] * 75, infowindow);
    }
}

function dropline7(infowindow, lineN) {
	var lineNum = lineN;
	var l;
	var lN;
    for (var i = 0; i < lineNum.length; i++) {
      if (i != lineNum.length-1){
      l = lineNum[i];
      lN = lineNum[i+1];
      var linepatharr = [l[1],lN[1]]; 

      addLine(linepatharr, l[4], l[5], l[6], l[7]);
      };

      l = lineNum[i];
      addMarkerWithTimeout(l[0], l[1], l[2], l[3], l[8] * 100, infowindow);
    }
}
/**************************************************/
/******Добавление маркеров для линий пересекающихся с 7-й******/
/**************************************************/
function dropmarker(infowindow, lineN) {
	var lineNum = lineN;
	var l;
    for (var i = 0; i < lineNum.length; i++) {
      l = lineNum[i];
      addMarkerWithTimeout(l[0], l[1], l[2], l[3], 1500, infowindow);
    }
}
/**************************************************/
/**************************************************
/*Добавление линии на карту*/
/**************************************************/
/**************************************************/
function addLine(linepatharr, linecolor, lineOp, lineW, dash) {
  var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: lineW
  };
  linePath = '';
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
  polyLine.push(linePath);
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
  for (var i = 0; i < polyLine.length; i++) {
    polyLine[i].setMap(null);
  }
}
}