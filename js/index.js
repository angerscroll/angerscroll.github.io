const app = document.getElementById('app');

const render = () => {
  app.innerHTML = `
    <h1>Welcome to My Blog!</h1>
    <p>This is a sample SPA page using vanilla JavaScript.</p>
  `;
}

const router = () => {
  const path = location.hash.substring(1);
  switch (path) {
    case '/':
      app.innerHTML = home();
      setActiveLink('/');
      break;
    case '/post':
      app.innerHTML = post();
      setActiveLink('/post');
      break;
    case '/about':
      app.innerHTML = about();
      setActiveLink('/about');
      break;
    default:
      app.innerHTML = `
        <h1>404 Not Found</h1>
        <p>The requested URL ${path} was not found on this server.</p>
      `;
  }
}

const setActiveLink = (path) => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === `#${path}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


render();
