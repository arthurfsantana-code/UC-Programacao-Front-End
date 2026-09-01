// ===== Menu de opções (3 pontinhos) =====
// Seleciona todos os botões de opções
const optionsButtons = document.querySelectorAll('.options-button');

// Adiciona evento de clique para cada botão
optionsButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		// Impede propagação do evento
		event.stopPropagation();
		
		// Encontra o menu de opções relativo a este botão
		const menu = button.parentElement.querySelector('.options-menu');
		
		// Fecha todos os outros menus
		document.querySelectorAll('.options-menu.active').forEach((m) => {
			if (m !== menu) {
				m.classList.remove('active');
			}
		});
		
		// Alterna o menu atual
		menu.classList.toggle('active');
	});
});

// Fecha o menu quando clicar fora dele
document.addEventListener('click', (event) => {
	if (!event.target.closest('.post-options')) {
		document.querySelectorAll('.options-menu.active').forEach((menu) => {
			menu.classList.remove('active');
		});
	}
});


// ===== Contagem de comentários =====
// Função para atualizar a contagem de comentários
function updateCommentCount(post) {
	const commentsSection = post.querySelector('.comments-section');
	const comments = commentsSection.querySelectorAll('.comment');
	const commentCount = comments.length;
	
	const commentCountElement = post.querySelector('.comments-count');
	if (commentCountElement) {
		commentCountElement.textContent = commentCount + ' comentário' + (commentCount !== 1 ? 's' : '');
	}
}

// Atualiza a contagem ao carregar a página
document.querySelectorAll('.post').forEach((post) => {
	updateCommentCount(post);
});


// ===== Colapsar e expandir comentários =====
// Seleciona todos os botões de comentar e contadores
const commentToggleButtons = document.querySelectorAll('.comment-toggle-button');
const commentCounters = document.querySelectorAll('.comments-count');

// Função para toggle da seção de comentários
function toggleCommentsSection(post) {
	const commentsSection = post.querySelector('.comments-section');
	commentsSection.classList.toggle('active');
}

// Adiciona evento ao botão "Comentar"
commentToggleButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const post = button.closest('.post');
		toggleCommentsSection(post);
	});
});

// Adiciona evento ao contador de comentários
commentCounters.forEach((counter) => {
	counter.style.cursor = 'pointer';
	counter.addEventListener('click', () => {
		const post = counter.closest('.post');
		toggleCommentsSection(post);
	});
});


// ===== Adicionar novo comentário =====
// Seleciona todos os formulários de novo comentário
const newCommentForms = document.querySelectorAll('.new-comment-form');

newCommentForms.forEach((form) => {
	form.addEventListener('submit', (event) => {
		// Impede o comportamento padrão do formulário
		event.preventDefault();
		
		// Obtém o input
		const input = form.querySelector('input[type="text"]');
		const commentText = input.value.trim();
		
		// Valida se há texto
		if (commentText === '') {
			return;
		}
		
		// Encontra o post pai
		const post = form.closest('.post');
		const commentsSection = post.querySelector('.comments-section');
		
		// Cria um novo comentário
		const newComment = document.createElement('div');
		newComment.classList.add('comment');
		
		// Gera um avatar aleatório (usando dicebear API)
		const randomSeed = 'User-' + Math.floor(Math.random() * 10000);
		
		newComment.innerHTML = `
			<img class="avatar" src="https://api.dicebear.com/9.x/avataaars/svg?seed=${randomSeed}" alt="Seu avatar">
			<div class="comment-body">
				<span class="comment-author">Você</span>
				<p class="comment-text">${commentText}</p>
			</div>
		`;
		
		// Insere o novo comentário antes do formulário
		form.parentElement.insertBefore(newComment, form);
		
		// Limpa o input
		input.value = '';
		
		// Atualiza a contagem de comentários
		updateCommentCount(post);
	});
});
