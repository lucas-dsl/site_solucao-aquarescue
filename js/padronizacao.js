document.querySelectorAll('#menu-links a.link-suave').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = this.href;

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = destino;
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button[data-href]');

    botoes.forEach(botao => {
        botao.addEventListener('click', event => {
            event.preventDefault();

            const destino = botao.getAttribute('data-href');

            if (destino) {
                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = destino;
                }, 100);
            }
        });
    });
});

function abrirMenu() {
    const menu = document.getElementById("menu-links");
    menu.classList.toggle("active");
}