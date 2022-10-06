import { createApp } from "vue";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";

import "./assets/css/index.less";

const app = createApp(App);

app.config.globalProperties.$http = axios;
app.use(ElementPlus, { size: "small", zIndex: 3000 });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
