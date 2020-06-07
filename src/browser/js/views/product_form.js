'use strict';

const Vue = require('vue');
const todoStorage = require('../util/store');


let app = {
  
  // the root element that will be compiled
  el: '.todoapp',

  // app initial state
  data: {
    malist:[{ar:'أكادير',fr:'Agadir'},{ar:'الجديدة',fr:'El Jadida'},{ar:'الفنيدق‎',fr:'Fnideq'},
    {ar:'قصبة تادلة',fr:'Kasba Tadla'},{ar:'العيون ',fr:'Laayoune'},{ar:'مرتيل‎',fr:'Martil'},{ar:'وجدة',fr:'Oujda'}
    ,{ar:'سلا الجديدة',fr:'Sale El Jadida'},{ar:'تامسنا',fr:'Tamesna'},{ar:'تازة',fr:'Taza'},{ar:'أزرو',fr:'AZROU'},{ar:'آسَفي',fr:'Safi'},{ar:'برشيد‎',fr:'Berrchid'},{ar:'الحاجب',fr:'HAJJEB'},
    {ar:'تزنيت',fr:'TIZNIT'},{ar:'خنيفرة',fr:'KHENIFRA'},{ar:'بوسكورة',fr:'BOUSKOURA'},{ar:'الصويرة',fr:'Souiria'},{ar:'تيط مليل',fr:'TIT MELLIL'},{ar:'بن سليمان',fr:'BENSILAMN'},
    {ar:'عين العودة',fr:'Ain Aouda'},{ar:'أصيلا',fr:'Assilah'},
    {ar:'بوجدور',fr:'Boujdour'},{ar:'الصويرة‎',fr:'Essaouira'},
    {ar:'الفقيه بن صالح',fr:'Fquih Ben Salah'},{ar:'القنيطرة',fr:'Kenitra'},
    {ar:'العرائش',fr:'Larache'},{ar:'مكناس',fr:'Meknes'},
    {ar:' ﻋﻴﻦ ﺣﺮﻭﺩﺓ',fr:'Ain Harouda'},{ar:'سطات',fr:'Settat'},
    {ar:'طانطان ',fr:'Tan Tan'},{ar:'تمارة ',fr:'Temara'},
    {ar:'إيفران‎',fr:'IFRAN'},{ar:'مريرت‎',fr:'mrirte'},
    {ar:'تارودانت‎',fr:'Taroudant'},{ar:'دار بوعزة‎',fr:'ERRAHMA VILLE'},
    {ar:'جمعة سحيم',fr:'Jamaat shaim'},{ar:'سيدي قاسم ',fr:'SIDI KACEM'},
    {ar:'عين عتيق',fr:'AIN ATTIQ'},{ar:' أيت ملول',fr:'Ait Melloul'},
    {ar:' بني ملال‎',fr:'Beni Mellal'},{ar:'الدار البيضاء',fr:'Casablanca'},
    {ar:'كلميم',fr:'Guelmim'},{ar:'سمارة',fr:'essmara'},
    {ar:'خريبكة',fr:'Khouribga'},{ar:'المضيق',fr:'M Diq'},
    {ar:'الناظور',fr:'Nador'},{ar:'الرباط',fr:'Rabat'},
    {ar:'الصخيرات',fr:'Skhirat'},{ar:'طنجة',fr:'Tanger'},
    {ar:'تطوان',fr:'Tetouan'},{ar:'إيموزار كندر',fr:'IMOUZAR KANDRE'},
    {ar:'عين اللوح',fr:'ain leuh'},
    {ar:'زكورا (ZGORA-AMANA)',fr:'ZGORA-AMANA-TEST'},{ar:'تماريس',fr:'TAMARIS'},
    {ar:'النواصر',fr:'Nouaceur'},{ar:'سيدي سليمان',fr:'SIDI SLIMAN'},
    {ar:'دروة',fr:'DAROUA'},{ar:'الحسيمة',fr:'Al Hoceima'},
    {ar:'بركان',fr:'Berkane'},{ar:'الداخلة',fr:'Dakhla'},
    {ar:'فاس',fr:'Fes'},{ar:'إنزيجان',fr:'Inzegane'},
    {ar:'مراكش',fr:'Marrakech'},{ar:'قصر الكبير',fr:'Ksar El Kebir'},
    {ar:'ورزازات',fr:'Ouarzazat'},{ar:'سلا',fr:'Sale'},
    {ar:'كابو نيغرو',fr:'Cabo Negro'},{ar:'طرفاية',fr:'Tarfaya'},
    {ar:'صفرو',fr:'SEFROU'},{ar:'المحمدية',fr:'MOUHAMMEDIA'},
    {ar:'سيدي عدي',fr:'sidi aadi'},{ar:'زاكورة',fr:'Zagoura'},
    {ar:'دار بوعزة',fr:'DAR BOUAZZA'},{ar:' سبت ݣزولة',fr:'SEBT GZOULA'},
    {ar:'بوزنيقة',fr:'BOUZNIKA'},{ar:'الرشيدية',fr:'Errachidia'},

  ],
    name:'',
    city:'',
    tel:'',
    adrs:'',
    client:{},
    id:0,
    errors:[]
  },

  // Initialize TODOs from database
  created() {

  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    valid:function (){
      return !this.id;
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {

    addTodo: function () {
      this.client = {Destinataire:this.name,ville:this.city,telephone:this.tel,Adresse:this.adrs}
      todoStorage.save(this.client, (err,id) => {
          if (err) console.log(err);
          if (id){this.id = id}
      });
    },

    complete: function (todo) {
      todo.modified = true;
      todoStorage.save(this.todos, function(err) {
        if (err) console.log(err);
      });
    },
    checkForm: function (e) {
      if (this.name && this.city && this.tel) {
        this.errors = [];
        e.preventDefault();
        console.log('All good!')
        return this.addTodo();
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('المرجو ادخال الاسم');
      }
      if (!this.tel) {
        this.errors.push('المرجو ادخال رقم الهاتف');
      }
      if (!this.city) {
        this.errors.push('المرجو اختيار المدينة');
      }

      e.preventDefault();
    }
  
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (value) {
      if (!value) {
        return;
      }
      let el = this.el;
      Vue.nextTick(function () {
        el.focus();
      });
    }
  }
};

module.exports = app;
