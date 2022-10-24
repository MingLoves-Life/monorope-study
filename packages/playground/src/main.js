import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { thinking } from "chatter-bot-brains";
import { ask } from "my-chatter-bot";
await thinking()
console.log(await ask("1?"));
createApp(App).mount("#app");
