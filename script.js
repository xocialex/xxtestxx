const App = new Vue({ 
    el: '#app',
    data: {
        isShow: false,
      title: "Practising Vue.js",
      subTitles: [
        'v-bind', 
        'Non-dynamic text', 
        'Dynamic text', 
        'v-for'
      ],
      isStyled: true,
      dynamic_para: "This sentence is generated dynamically.",
      list_items: [
        "banana", 
        "orange", 
        "mango"
      ]
    },

    props: {
        msg: String,
      },
  })