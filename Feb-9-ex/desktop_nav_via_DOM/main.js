const app = document.getElementById('app');

const navMain = document.createElement('nav');

app.appendChild(navMain);

const createNavList = document.createElement('ul');

navMain.appendChild(createNavList);

const createHome = document.createElement('li')

createNavList.appendChild(createHome);

createHome.textContent = 'Home';

const createPortfolio = document.createElement('li')

createNavList.appendChild(createPortfolio);

createPortfolio.textContent = 'Portfolio';










