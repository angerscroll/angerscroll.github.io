// index.js

import Home from "./components/home.js";
import Posts from "./components/posts.js";
import About from "./components/about.js";

const routes = {
  '/': Home,
  '/posts': Posts,
  '/about': About
};

const router = async () => {
  const content = document.getElementById('app');
  const request = location.pathname;
  const route = routes[request] ? routes[request] : Error404;
  content.innerHTML = await route.render();
  await route.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
