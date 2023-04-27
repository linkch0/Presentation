// import src
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Slide from "./components/Slide.vue";
// import vue related libraries
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Define routes
const routes = [
    { path: "/", component: Home },
    { path: "/card/:id", name: "card", component: Slide },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
    // Deploy to github pages
    history: createWebHistory("/Presentation/"),
    routes,
});

// Create and mount the root instance
const app = createApp(App);

// Make the router instance available in the app
app.use(router);

// Add icon to the library
library.add(fas);
library.add(fab);
// Add font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
