import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(App);

new Vue({
    // template:`<div>hello</div>`
    // h->createElement 可以帮我们渲染组件，一个组件其实就是一个对象
    // render: h => h(App),
    //我们还可以使用下面这种写法，因为组件里面也有 render 方法

    ...App,
}).$mount('#app')
