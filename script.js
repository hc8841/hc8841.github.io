const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Botão para abrir e fechar o menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Fechar o menu ao clicar em um item
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});

// Animação de fade-in quando aparece na tela
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Carrossel de projetos
let currentProject = 0;
const projetos = document.querySelectorAll('.projeto');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showProject(index) {
  projetos.forEach((proj, i) => {
    proj.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentProject = (currentProject - 1 + projetos.length) % projetos.length;
  showProject(currentProject);
});

nextBtn.addEventListener('click', () => {
  currentProject = (currentProject + 1) % projetos.length;
  showProject(currentProject);
});

// Inicializar
showProject(currentProject);