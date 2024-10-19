      // Exemplo de dados de livros
      const livros = [
        {
            titulo: 'Teste',
            autor: 'Herme',
            ano: 2024,
            visualizacao: 'file/Medicamentos de A a Z.pdf',  // URL para visualizar o livro (pode ser um link para uma página de detalhes)
            download: 'file/Vende gelado Gildo.docx'       // URL para baixar o livro (link direto para o arquivo PDF)
        },
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
            download: '#'
        },
        {
            titulo: 'Microbiologia Básica',
            autor: 'Carla Mendes',
            ano: 2019,
            visualizacao: '#',
            download: '#'
        },
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
            download: '#'
        },
        {
            titulo: 'Microbiologia Básica',
            autor: 'Carla Mendes',
            ano: 2019,
            visualizacao: '#',
            download: '#'
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
            
    let ul = document.querySelector(`ul`)
     function openmenu(){
        ul.classList.add(`open`)
     }
     function closemenu(){
        ul.classList.remove(`open`)
     }