import Vue from 'vue';;
import Home from 'App/components/Home';
import router from 'App/router';

import './styles/styles.scss'

new Vue({
  el: '#root',
  router,
  template: '<Home/>',
  components: { Home }
})
