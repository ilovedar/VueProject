import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.css'
// import './assets/animation.css'
import './assets/seaAnimation.css'
// import './assets/waveAnimation.css'
import './assets/fireFly.css'
import './assets/parallax.css'

const app = createApp(App)
app.use(router).mount('#app')