let ul = document.querySelector(`ul`)
function openmenu(){
   ul.classList.add(`open`)
}
function closemenu(){
   ul.classList.remove(`open`)
}



// Seleciona o contêiner de notícias
const newsContainer = document.getElementById('news-container');

// Função para carregar notícias do LocalStorage e exibi-las
function loadNews() {
   // Obtém as notícias armazenadas no LocalStorage
   const novalista = JSON.parse(localStorage.getItem('novalista')) || [];

   // Limpa o contêiner de notícias
   newsContainer.innerHTML = '';

   // Itera sobre as notícias e adiciona cada uma ao contêiner
   novalista.forEach(news => {
       const newsItem = document.createElement('div');
       newsItem.classList.add('news-item');

       // Adiciona imagem à notícia, se houver
       const newsImage = news.image ? `<img src="${news.image}" alt="Imagem da notícia">` : '';

       newsItem.innerHTML = `
           ${newsImage}
           <h3>${news.title}</h3>
           <p>${news.content}</p>
           <small>Publicado em: ${news.date}</small>
       `;

       newsContainer.appendChild(newsItem);
   });
}

// Chama a função para carregar as notícias ao carregar a página
window.onload = loadNews;

// Seleciona o contêiner de eventos
const eventosContainer = document.getElementById('eventos-container');

// Função para carregar eventos do LocalStorage e exibi-las
function loadeventos() {
   // Obtém as eventos armazenadas no LocalStorage
   const novalista = JSON.parse(localStorage.getItem('novalista')) || [];

   // Limpa o contêiner de eventos
   eventosContainer.innerHTML = '';

   // Itera sobre os eventos e adiciona cada uma ao contêiner
   novalista.forEach(eventos => {
       const eventosItem = document.createElement('article');
       eventosItem.classList.add('eventos-item');

       // Adiciona imagem à eventos, se houver
       const eventosImage = eventos.image ? `<img src="${eventos.image}" alt="Imagem da notícia">` : '';

       eventosItem.innerHTML = `
           ${eventosImage}
           <h3>${eventos.title}</h3>
           <p>${eventos.content}</p>
           <small>Publicado em: ${eventos.date}</small>
       `;

       eventosContainer.appendChild(eventosItem);
   });
}

// Chama a função para carregar os eventos ao carregar a página
window.onload = loadeventos;

// Função de confirmação de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Sua mensagem foi enviada com sucesso!');
});

// Exemplo de dados de livros
const livros = [
   {
       titulo: 'Introdução à Enfermagem',
       autor: 'Maria Silva',
       ano: 2018,
       visualizacao: '#',  // URL para visualizar o livro (pode ser um link para uma página de detalhes)
       download: '#'       // URL para baixar o livro (link direto para o arquivo PDF)
   },
   {
       titulo: 'Fundamentos de Análises Clínicas',
       autor: 'João Souza',
       ano: 2020,
       visualizacao: 'file/EXERCICIO 2024 1.pdf',
       download: 'file/EXERCICIO 2024 1.pdf'
   },
   {
       titulo: 'Microbiologia Básica',
       autor: 'Carla Mendes',
       ano: 2019,
       visualizacao: '',
       download: 'file/EXERCICIO 2024 1.pdf '
   }
   // Adicione mais livros conforme necessário
];

// Função de busca e exibição dos livros
function buscarLivros() {
   const query = document.getElementById('searchInput').value.toLowerCase();
   const resultados = document.getElementById('bookResults');
   resultados.innerHTML = '';  // Limpa os resultados anteriores

   // Filtra os livros de acordo com o termo de busca
   const livrosFiltrados = livros.filter(livro => 
       livro.titulo.toLowerCase().includes(query) || 
       livro.autor.toLowerCase().includes(query)
   );

   // Exibe os livros filtrados
   if (livrosFiltrados.length > 0) {
       livrosFiltrados.forEach(livro => {
           const livroElement = document.createElement('div');
           livroElement.classList.add('book-item');
           
           livroElement.innerHTML = `
               <h3>${livro.titulo}</h3>
               <p><strong>Autor:</strong> ${livro.autor}</p>
               <p><strong>Ano:</strong> ${livro.ano}</p>
               <a href="${livro.visualizacao}" target="_blank">Visualizar</a>
               <a href="${livro.download}" download>Baixar</a>
           `;
           resultados.appendChild(livroElement);
       });
   } else {
       resultados.innerHTML = '<p>Nenhum livro encontrado.</p>';
   }
}

// Adiciona o evento de busca ao botão
document.getElementById('searchButton').addEventListener('click', buscarLivros);

