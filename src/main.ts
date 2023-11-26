import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SvgIcon from "@/icons";
import "@/router/permission.js";

const app = createApp(App);
SvgIcon(app);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
