const app = document.getElementById('app');

const home = () => {
  app.innerHTML = `
    <h1>Welcome to My Blog!</h1>
    <p>This is a sample SPA page using vanilla JavaScript.</p>
  `;
}

const post = () => {
  app.innerHTML = `
    <h1>블로그 포스트</h1>
    <div>
      <h2>첫번째 포스트</h2>
      <p>첫번째 포스트 내용입니다.</p>
    </div>
    <div>
      <h2>두번째 포스트</h2>
      <p>두번째 포스트 내용입니다.</p>
    </div>
    <div>
      <h2>세번째 포스트</h2>
      <p>세번째 포스트 내용입니다.</p>
    </div>
  `;
};

const about = () => {
  app.innerHTML = `
    <h1>블로그 소개</h1>
    <p>이 블로그는 SPA(Single Page Application)로 개발되었습니다.</p>
    <p>HTML, CSS, JavaScript로만 구성되어 있으며, 프레임워크는 사용하지 않았습니다.</p>
    <p>Node.js를 이용해 서버를 구성하였으며, 히스토리 API를 사용하여 브라우저의 URL이 변경될 때 페이지를 렌더링합니다.</p>
  `;
};

const routes = {
  '/': home,
  '/post': post,
  '/about': about
};

const notFound = () => {
  const content = document.getElementById("app");
  content.innerHTML = "<h2>404 Not Found</h2>";
}

const getCurrentUrl = () => {
  return location.pathname;
};

const renderPage = () => {
  const url = getCurrentUrl();
  const routeFunc = routes[url];
  if (routeFunc) {
    routeFunc();
  } else {
    notFound();
  }
};


const addNavEvent = () =>{
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const url = item.getAttribute('href');
      history.pushState(null, null, url);
      renderPage();
    });
  });
}


const init = () => {
  renderPage();
  addNavEvent();
}

init();