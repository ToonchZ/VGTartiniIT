angular.module('starter.guide', ['ngSanitize'])

.factory('Guide', function($ionicPlatform) {
  // Might use a resource here that returns a JSON array
  
  var dir = "";
  if($ionicPlatform.is('android')){dir = '/android_asset/www/';}  
  
  var guide = [{
    id: 1,
    name: '01 TARTINI 1692-1770',
    short_dsc: '', 
    description: '',
    
    img: dir + 'img/01.jpg',
    thumb: dir + 'img/01_t.jpg',
    audio: 'audio/hr_01.mp3'
  }, {
    id: 2,
    name: '02 PIRAN 1692',
    short_dsc: '',
    description: '',
    img: dir + 'img/02.jpg',
    thumb: dir + 'img/02_t.jpg',
    audio: 'audio/hr_02.mp3'
  }, {
    id: 3,
    name: '03 PIRAN  1692-1703',
    short_dsc: '',
    description: '',
    img: dir + 'img/02.jpg',
    thumb: dir + 'img/02_t.jpg',
    audio: 'audio/hr_03.mp3'
  }, {
    id: 4,
    name: '04 KOPER 1704-1707',
    short_dsc: '',
    description: '',
    img: dir + 'img/03.jpg',
    thumb: dir + 'img/03_t.jpg',
    audio: 'audio/hr_04.mp3'
  }, {
    id: 5,
    name: '05 PADOVA 1708-1710',
    short_dsc: '',
    description: '',
    img: dir + 'img/04.jpg',
    thumb: dir + 'img/04_t.jpg',
    audio: 'audio/hr_05.mp3'
  }, {
    id: 6,
    name: '06 ASSISI 1710-1715',
    short_dsc: '',
    description: '',
    img: dir + 'img/05.jpg',
    thumb: dir + 'img/05_t.jpg',
    audio: 'audio/hr_06.mp3'
  }, {
    id: 7,
    name: '07 VENECIJA - ANCONA 1715-1720',
    short_dsc: '',
    description: '',
    img: dir + 'img/06.jpg',
    thumb: dir + 'img/06_t.jpg',
    audio: 'audio/hr_07.mp3'
  }, {
    id: 8,
    name: '08 PADOVA 1721-1724',
    short_dsc: '',
    description: '',
    img: dir + 'img/07.jpg',
    thumb: dir + 'img/07_t.jpg',
    audio: 'audio/hr_08.mp3'
  }, {
    id: 9,
    name: '09 PRAG 1724-1726',
    short_dsc: '',
    description: '',
    img: dir + 'img/08.jpg',
    thumb: dir + 'img/08_t.jpg',
    audio: 'audio/hr_09.mp3'
  }, {
    id: 10,
    name: '10 PADOVA 1726-1770',
    short_dsc: '',
    description: '',
    img: dir + 'img/09.jpg',
    thumb: dir + 'img/09_t.jpg',
    audio: 'audio/hr_10.mp3'
  }, {
    id: 11,
    name: '11 PADOVA 1740-1770',
    short_dsc: '',
    description: '',
    img: dir + 'img/10.jpg',
    thumb: dir + 'img/10_t.jpg',
    audio: 'audio/hr_11.mp3'
  }, {
    id: 12,
    name: '12 Giuseppe Tartini – skladatelj instrumentalne glazbe',
    short_dsc: '',
    description: '',
    img: dir + 'img/11.jpg',
    thumb: dir + 'img/11_t.jpg',
    audio: 'audio/hr_12.mp3'
  }, {
    id: 13,
    name: '13 Tartinijev pedagoški i teorijski rad',
    short_dsc: '',
    description: '',
    img: dir + 'img/12.jpg',
    thumb: dir + 'img/12_t.jpg',
    audio: 'audio/hr_13.mp3'
  }, {
    id: 14,
    name: '14 O izložbi',
    short_dsc: '',
    description: '',
    img: dir + 'img/01.jpg',
    thumb: dir + 'img/01_t.jpg',
    audio: 'audio/hr_14.mp3'
  }];

  return {
    all: function() {
      return guide;
    },
    
    get: function(locationId) {
      for (var i = 0; i < guide.length; i++) {
        if (guide[i].id === parseInt(locationId)) {
          return guide[i];
        }
      }
      return null;
    }
  };
});



