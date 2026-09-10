/**
 * GEEKVERSE - SCRIPT PRINCIPAL LANDING PAGE
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRandomCuriosity();
  setCurrentYear();
});

/* 1. Alternador de Tema (Light / Dark Mode) */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('.theme-icon');
  
  // Verifica preferência do usuário salva ou do sistema
  const savedTheme = localStorage.getItem('geekverse-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('geekverse-theme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

/* 2. Gerador de Curiosidades Aleatórias */
const curiosidadesGeek = [
  "O famoso código Konami (Cima, Cima, Baixo, Baixo, Esquerda, Direita...) foi criado para facilitar os testes no jogo Gradius em 1986.",
  "Em Skyrim, as vozes dos dragões foram gravadas por dubladores gritando dentro de latas de lixo metálicas para criar eco natural.",
  "Pac-Man foi desenhado baseado no formato de uma pizza com uma fatia faltando.",
  "O jogo 'The Witcher 3' contém mais de 450.000 linhas de diálogo e 950 papéis dublados.",
  "O nome do protagonista de Sekiro (Lobo) vem da expressão 'Sokoku no Okami' (Lobo Solitário)."
];

function initRandomCuriosity() {
  const btnFact = document.getElementById('btn-random-fact');
  const displayBox = document.getElementById('random-fact-display');
  const factText = document.getElementById('random-fact-text');

  btnFact.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * curiosidadesGeek.length);
    factText.textContent = curiosidadesGeek[randomIndex];
    displayBox.classList.remove('hidden');
  });
}

/* 3. Ano corrente automático */
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}