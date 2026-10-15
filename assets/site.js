/**
 * ANÁLYSIS — menu de navegação para telas pequenas.
 * Este arquivo não usa serviços externos, cookies ou rastreamento.
 */
(() => {
    const button = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // Algumas páginas podem não ter o menu móvel.
    if (!button || !nav) {
        return;
    }

    // Alternar menu ao tocar em "Menu".
    button.addEventListener('click', () => {
        const open = nav.dataset.open !== 'true';
        nav.dataset.open = String(open);
        button.setAttribute('aria-expanded', String(open));
    });

    // Fechar o menu depois que o visitante escolhe um link.
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.dataset.open = 'false';
            button.setAttribute('aria-expanded', 'false');
        });
    });
})();
