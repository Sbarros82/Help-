document.getElementById('form-chamado').addEventListener('submit', async function (e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;

    const response = await fetch('/chamados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descricao, prioridade })
    });

    if (response.ok) {
        alert('Chamado criado com sucesso!');
        carregarChamados();
        this.reset();
    } else {
        alert('Erro ao criar chamado.');
    }
});

async function carregarChamados() {
    const response = await fetch('/chamados');
    const chamados = await response.json();
    const lista = document.getElementById('lista-chamados');
    lista.innerHTML = '';

    if (chamados.length === 0) {
        lista.innerHTML = '<li>Não há chamados registrados.</li>';
    } else {
        chamados.forEach(chamado => {
            const li = document.createElement('li');
            li.textContent = `${chamado.id}: ${chamado.titulo} (${chamado.status}) - Prioridade: ${chamado.prioridade}`;
            lista.appendChild(li);
        });
    }
}

// Carregar chamados ao abrir a página
carregarChamados();
