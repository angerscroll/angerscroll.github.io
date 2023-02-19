import homePage from "./route/Home.js";
import postsPage from "./route/Posts.js";
import aboutPage from "./route/About.js";

const app = document.getElementById("app");

const render = (content) => {
  app.innerHTML = content;
}

const routes = {
  "/": homePage,
  "/posts": postsPage,
  "/about": aboutPage,
};

const router = () => {
  const path = location.pathname;
  const content = routes[path];
  
  render(content);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();
});