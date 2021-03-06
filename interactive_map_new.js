/*@Dispetcher last edit 01.02.18*/

var a; //Для определения какую функцию вызывать внутри InitMap();
var marker;
var markers = [];
var map;
var linePath;
var polyLine = [];
var linepatharr= [];

/*Прозрачность линий (рабочей и в строеке/проекте)*/
var lop = 0.3;
var cplop = 1.0;

/*Ширина линий (рабочей и в строеке/проекте)*/
var lw = 6;
var cplw = 4;

var polyLinel1st = [];
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

var redline = '#d52d2d';
var blueline= '#2a0acb';
var greenline= '#034f0d';
var orangeline= '#ff6500';
var violetline= '#60008a';
var brownline= '#5b4037';

/*Иконки станций построенных*/
var redIcon = {url: 'Imgs/Red.png'};
var blueIcon = {url: 'Imgs/Blue.png'};
var greenIcon = {url: 'Imgs/Green.png'};
var orangeIcon = {url: 'Imgs/Orange.png'};
var violetIcon = {url: 'Imgs/Violet.png'};
var brownIcon = {url: 'Imgs/Brown.png'};

/*Иконки станций в стройке*/
var cGreenIcon = {url: 'Imgs/cGreen.png'};
var cOrangeIcon = {url: 'Imgs/cOrange.png'};
var cVioletIcon = {url: 'Imgs/cViolet.png'};
var cBrownIcon = {url: 'Imgs/cBrown.png'};

/*Иконка станций в проекте*/
var pGreenIcon = {url: 'Imgs/pGreen.png'};
var pOrangeIcon= {url: 'Imgs/pOrange.png'};
var pVioletIcon= {url: 'Imgs/pViolet.png'};
var pBrownIcon= {url: 'Imgs/pBrown.png'};

/*Описание станций в строительстве*/
var containerConst = [
['<div class="content__body"><p><b>Время постройки</b> - апрель 2018 года, <b>Линия</b> - Невско-Василеостровская (3 линия «Зеленая»)</p>'+
'<p><b>Адрес</b> - Ул. Савушкина, (юго-западнее пересечения ул. Савушкина и Туристской ул.)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - март 2018 года, <b>Линия</b> - Невско-Василеостровская (3 линия «Зеленая»)</p>'+
'<p><b>Адрес</b> - Крестовский остров, западнее нового стадиона «Зенит-Арена»</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - ноябрь 2019 года, <b>Линия</b> - Правобережная (4 линия «Оранжевая»)</p>'+
'<p><b>Адрес</b> - Большой пр. В.О. (юго-западнее пересечения Большого пр. и Косой линии)</p>'+
'</div>'],
['<div class="content__body"><p>Станция будет сдана без выхода на поверхность</p>'+
'<p><b>Время постройки</b> - ноябрь 2019 года, <b>Линия</b> - Правобережная (4 линия «Оранжевая»)</p>'+
'<p><b>Адрес</b> - Ул. Декабристов (южнее пересечения ул. Декабристов и ул. Глинки</p></div>'],
['<div class="content__body"><p><b>Время постройки</b> - июнь 2022 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - Ул. Васи Алексеева (западнее дома №12 корп.1 по ул. Маршала Говорова)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - июнь 2022 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - Ул. Маршала Казакова (Юго-западнее пересечения ул. Маршала Казакова и пр.Маршала Жукова)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - 2018 год, <b>Линия</b> - Фрунзенско-Приморская (5 линия «фиолетовая»)</p>'+
'<p><b>Адрес</b> - Вестибюль 1: Бухарестская ул., (южнее пересечения пр. Славы с Бухарестской ул.) Вестибюль 2: Бухарестская ул. (юго-восточнее пересечения Бухарестской ул. с Альпийским пер.)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - 2018 год, <b>Линия</b> - Фрунзенско-Приморская (5 линия «фиолетовая»)</p>'+
'<p><b>Адрес</b> - Бухарестская ул. (юго-восточнее пересечения Дунайского пр. и Бухарестской ул.)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - 2018 год, <b>Линия</b> - Фрунзенско-Приморская (5 линия «фиолетовая»)</p>'+
'<p><b>Адрес</b> - Пос. Шушары, Автозаводская ул., уч. №1 (западнее пересечения с Софийской ул.)</p>'+
'</div>']
];

/*Описание станций в проектировании*/
var containerProj = [
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Невско-Василеостровская (3 линия «Зеленая»)</p>'+
'<p><b>Адрес</b> - Для размещения вестибюля этой станции рассматривается несколько вариантов: пересечение Планерной улицы с Шуваловским проспектом, пересечение Шуваловского проспекта с проспектом Авиаконструкторов, а также на самой Планерной улице вблизи планировавшегося нового зоопарка в Юнтолово</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Невско-Василеостровская (3 линия «Зеленая»)</p>'+
'<p><b>Адрес</b> - южнее пересечения Туристской улицы и улицы Оптиков</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Правобережная (4 линия «Оранжевая»)</p>'+
'<p><b>Адрес</b> - Крестовский остров, западнее нового стадиона «Зенит-Арена»</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Правобережная (4 линия «Оранжевая»)</p>'+
'<p><b>Адрес</b> - угол Морской набережной и Капитанской ул.</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Правобережная (4 линия «Оранжевая»</p>'+
'<p><b>Адрес</b> - выходы на Шкиперском протоке, южнее пересечения с Галерным проездом и западнее пересечения с Наличной ул</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Фрунзенско-Приморская (5 линия «фиолетовая»)</p>'+
'<p><b>Адрес</b> - на пересечении Шуваловского пр. с пр. Авиаконструкторов</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - юго-восточнее дома 42 на наб. Обводного канала</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - вестибюль № 1 Киевская ул. (юго-западнее пересечения с Черниговской ул.) вестибюль № 2 Лиговский пр. (севернее дома № 236, литера Б)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - Ташкентская ул. (северо-западнее дома № 103, корп.6, литера А, по Московскому пр.)</p>'+
'</div>'],
['<div class="content__body"><p><b>Время постройки</b> - до 2025 года, <b>Линия</b> - Красносельско-Калининская (6 линия «Кориченвая»)</p>'+
'<p><b>Адрес</b> - первый вестибюль (подземный) будет расположен на северо-западной стороне Т-образного перекрестка Благодатной улицы и Новоизмайловского проспекта с выходами из подземного перехода во все стороны перекрёстка. Второй расположится на западной стороне Митрофаньевского шоссе, недалеко от ЗСД</p>'+
'</div>']
];


/*Блок строящихся станций*/
var l3c = [
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, containerConst[0], cGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, containerConst[1], cGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, '', greenIcon, greenline, lop, lw, 0]
];

var l4c = [
['Станция метро «Большой проспект»', {lat: 59.930386, lng: 30.261608}, containerConst[2], cOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, containerConst[3], cOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923608, lng: 30.383411}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, '', orangeIcon, orangeline, lop, lw, 0]
];

var l5c = [
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, containerConst[6], cVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, containerConst[7], cVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662}, containerConst[8], cVioletIcon, violetline, cplop, cplw, 1]
];

var l6c = [
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, containerConst[4], cBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, containerConst[5], cBrownIcon, brownline, cplop, cplw, 1, 2]
];

/*Блок проектируемых станций*/
var l3p = [
['Станция метро «Планерная»', {lat: 60.021725, lng: 30.222013}, containerProj[0], pGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Туристская»', {lat: 60.001656, lng: 30.210603}, containerProj[1], pGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, '', greenIcon, greenline, lop, lw, 0]
];

var l4p = [
['Станция метро «Новокрестовская 2»', {lat: 59.970987, lng: 30.213385}, containerProj[2], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Морской Фасад»', {lat: 59.948496, lng: 30.211899}, containerProj[3], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Гавань»', {lat: 59.932537, lng: 30.227705}, containerProj[4], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923608, lng: 30.383411}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, '', orangeIcon, orangeline, lop, lw, 0]
];

var l5p = [
['Станция метро «Шуваловский проспект»', {lat: 60.024673, lng: 30.232099}, containerProj[5], pVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, '', violetIcon, violetline, lop, lw, 0]
];

var l6p = [
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, containerProj[6], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, containerProj[7], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, containerProj[8], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, containerProj[9], pBrownIcon, brownline, cplop, cplw, 1, 2]
];

/*Блок всех станций---------------------------*/
/*Блок станций 1 линии (красная)*/
var l1st = [
['Станция метро «Гражданский проспект»', {lat: 60.035226, lng: 30.418243}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Академическая»', {lat: 60.012773, lng: 30.395945}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Политехническая»', {lat:60.008905, lng: 30.370824}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Площадь Мужества»', {lat: 59.999673, lng: 30.366052}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Лесная»', {lat: 59.984789, lng: 30.344253}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Выборгская»', {lat: 59.970963, lng: 30.347567}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Площадь Ленина»', {lat: 59.958511, lng: 30.355031}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Чернышевская»', {lat: 59.944606, lng: 30.359709}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Владимирская»', {lat: 59.927593, lng: 30.347866}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Пушкинская»', {lat: 59.920536, lng: 30.329714}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916281, lng: 30.318447}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Балтийская»', {lat: 59.907681, lng: 30.300104}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Нарвская»', {lat: 59.901178, lng: 30.274983}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Кировский завод»', {lat: 59.879802, lng: 30.261333}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Автово»', {lat: 59.867294, lng: 30.261240}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Ленинский проспект»', {lat: 59.850641, lng: 30.268387}, '', redIcon, redline, lop, lw, 0],
['Станция метро «Проспект Ветеранов»', {lat: 59.842154, lng: 30.250260}, '', redIcon, redline, lop, lw, 0]
];

/*Блок станций 2 линии (синия)*/
var l2st = [
['Станция метро «Парнас»', {lat: 60.066914, lng: 30.334046}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Проспект Просвещения»', {lat: 60.051442, lng: 30.332521}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Озерки»', {lat: 60.036936, lng: 30.321665}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Удельная»', {lat: 60.016616, lng: 30.314947}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Пионерская»', {lat: 60.002512, lng: 30.296750}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Черная речка»', {lat: 59.985493, lng: 30.300869}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Петроградская»', {lat: 59.966413, lng: 30.311513}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Горьковская»', {lat: 59.956151, lng: 30.318757}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Невский проспект»', {lat: 59.935045, lng: 30.330090}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Сенная полщадь»', {lat: 59.927276, lng: 30.320419}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Технологический институт»', {lat: 59.916776, lng: 30.319010}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Фрунзенская»', {lat: 59.906266, lng: 30.317603}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Московские ворота»', {lat: 59.891733, lng: 30.318155}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Электросила»', {lat: 59.879169, lng: 30.318735}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Парк Победы»', {lat: 59.866232, lng: 30.321752}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Московская»', {lat: 59.853166, lng: 30.321813}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Звездная»', {lat: 59.833293, lng: 30.349559}, '', blueIcon, blueline, lop, lw, 0],
['Станция метро «Купчино»', {lat: 59.829955, lng: 30.375258}, '', blueIcon, blueline, lop, lw, 0]
];

/*Блок станций 3 линии (зеленая)*/
var l3st= [
['Станция метро «Планерная»', {lat: 60.021725, lng: 30.222013}, containerProj[0], pGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Туристская»', {lat: 60.001656, lng: 30.210603}, containerProj[1], pGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Беговая»', {lat: 59.987998, lng: 30.202578}, containerConst[0], cGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Новокрестовская 1»', {lat: 59.972948, lng: 30.211208}, containerConst[1], cGreenIcon, greenline, cplop, cplw, 1],
['Станция метро «Приморская»', {lat: 59.948459, lng: 30.234463}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Василеостровская»', {lat: 59.942669, lng: 30.278136}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Гостиный Двор»', {lat: 59.934121, lng: 30.333144}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Маяковская»', {lat: 59.931415, lng: 30.354987}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.923596, lng: 30.383372}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Елизаровская»', {lat: 59.896690, lng: 30.423680}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Ломоносовская»', {lat: 59.877376, lng: 30.441897}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Пролетарская»', {lat: 59.865166, lng: 30.470110}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Обухово»', {lat: 59.848686, lng: 30.457620}, '', greenIcon, greenline, lop, lw, 0],
['Станция метро «Рыбацкое»', {lat: 59.830849, lng: 30.500272}, '', greenIcon, greenline, lop, lw, 0]
];

/*Блок станций 4 линии (оранжевая)*/
var l4st= [
['Станция метро «Новокрестовская 2»', {lat: 59.970450, lng: 30.219798}, containerProj[2], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Морской Фасад»', {lat: 59.948496, lng: 30.216191}, containerProj[3], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Гавань»', {lat: 59.932537, lng: 30.227705}, containerProj[4], pOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Большой проспект»', {lat: 59.930386, lng: 30.261608}, containerConst[2], cOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Театральная»', {lat: 59.925180, lng: 30.297236}, containerConst[3], cOrangeIcon, orangeline, cplop, cplw, 1],
['Станция метро «Спасская»', {lat: 59.926584, lng: 30.318189}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Достоевская»', {lat: 59.928333, lng: 30.346324}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Лиговский проспект»', {lat: 59.920985, lng: 30.354594}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Площадь Ал. Невского»', {lat: 59.924303, lng: 30.385399}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Новочеркасская»', {lat: 59.929081, lng: 30.412051}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Ладожская»', {lat: 59.932498, lng: 30.439265}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Проспект Большевиков»', {lat: 59.919837, lng: 30.466771}, '', orangeIcon, orangeline, lop, lw, 0],
['Станция метро «Улица Дыбенко»', {lat: 59.907287, lng: 30.483336}, '', orangeIcon, orangeline, lop, lw, 0]
];

/*Блок станций 5 линии (фиолетовая)*/
var l5st= [
['Станция метро «Шуваловский проспект»', {lat: 60.024673, lng: 30.232099}, containerProj[5], pVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Комендантский проспект»', {lat: 60.008759, lng: 30.259015}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Старая Деревня»', {lat: 59.989548, lng: 30.255174}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Крестовский остров»', {lat: 59.971594, lng: 30.259229}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Чкаловская»', {lat: 59.960960, lng: 30.292065}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Спортивная»', {lat: 59.951835, lng: 30.290691}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Адмиралтейская»', {lat: 59.935849, lng: 30.314908}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Садовая»', {lat: 59.926903, lng: 30.316601}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Звенигородская»', {lat: 59.922341, lng: 30.335732}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Обводный канал»', {lat: 59.914543, lng: 30.349430}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Волковская»', {lat: 59.896072, lng: 30.357502}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Бухарестская»', {lat: 59.883738, lng: 30.369136}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Международная»', {lat: 59.870227, lng: 30.379399}, '', violetIcon, violetline, lop, lw, 0],
['Станция метро «Проспект Славы»', {lat: 59.856219, lng: 30.396560}, containerConst[6], cVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Дунайская»', {lat: 59.839171, lng: 30.410844}, containerConst[7], cVioletIcon, violetline, cplop, cplw, 1],
['Станция метро «Южная»', {lat: 59.822998, lng: 30.430662}, containerConst[8], cVioletIcon, violetline, cplop, cplw, 1]
];

/*Блок станций 6 линии (коричневая)*/
var l6st= [
['Станция метро «Каретная»', {lat: 59.913494, lng: 30.357769}, containerProj[6], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Боровая»', {lat: 59.902969, lng: 30.329868}, containerProj[7], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Заставская»', {lat: 59.893453, lng: 30.318412}, containerProj[8], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Броневая»', {lat: 59.876138, lng: 30.304550}, containerProj[9], pBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Путиловская»', {lat: 59.878694, lng: 30.264729}, containerConst[4], cBrownIcon, brownline, cplop, cplw, 1, 2],
['Станция метро «Юго-западная»', {lat: 59.859239, lng: 30.230442}, containerConst[5], cBrownIcon, brownline, cplop, cplw, 1, 2]
];
var a;
/*Функция инициализации карты*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 R(a){Q 0=j i.h.U();l=j i.h.D(y.T(\'l\'),{B:C,E:{F:H.G,I:A.z},});d(a==1){s(0)}e d(a==2){o(0)}e d(a==3){u(0)}e d(a==4){w(0)}e d(a==5){q(0)}e d(a==6){r(0)}e d(a==7){k(0)}e d(a==8){m(0)}e{n(0)}9 n(0){b();c();g(0);f(0);v(0);t(0);x(0);p(0)}9 k(0){b();c();g(0);f(0);S(0);J(0);P(0);O(0)}9 m(0){b();c();g(0);f(0);K(0);L(0);M(0);N(0)}9 s(0){b();c();g(0)}9 o(0){b();c();f(0)}9 u(0){b();c();v(0)}9 w(0){b();c();t(0)}9 q(0){b();c();x(0)}9 r(0){b();c();p(0)}',57,57,'infowindow|||||||||function||clearMarkers|removeLine|if|else|dropl2st|dropl1st|maps|google|new|dropConstr|map|dropProject|dropAll|dropl2|dropl6st|dropl5|dropl6|dropl1|dropl4st|dropl3|dropl3st|dropl4|dropl5st|document|330|30|zoom|11|Map|center|lat|960|59|lng|dropl4c|dropl3p|dropl4p|dropl5p|dropl6p|dropl6c|dropl5c|var|initMap|dropl3c|getElementById|InfoWindow'.split('|'),0,{}))
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

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
      addLinel6st(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6st[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
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

      addMarkerWithTimeout(l4[0], l4[1], l4[2], l4[3], i * 50, infowindow);
      addLinel4p(linepatharr, l4[4], l4[5], l4[6], l4[7]);
      };

      var l4 = l4p[i];
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

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
      addLinel6c(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6c[i];
      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
    }
}
/*Прорисовка 6-й линии в проекте*/
function dropl6p(infowindow) {
    for (var i = 0; i < l6p.length; i++) {
      if (i != l6p.length-1){
      var l6 = l6p[i];
      var l6N = l6p[i+1];
      var linepatharr = [l6[1],l6N[1]]; 

      addMarkerWithTimeout(l6[0], l6[1], l6[2], l6[3], i * 50, infowindow);
      addLinel6p(linepatharr, l6[4], l6[5], l6[6], l6[7]);
      };

      var l6 = l6p[i];
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
  polyLinel1st = [];

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
  polyLinel4st = [];
  polyLinel4c = [];
  polyLinel4p = [];

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
  polyLinel6st = [];
  polyLinel6c = [];
  polyLinel6p = [];

}
}