document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out-quad',
            offset: 120
        });
    }

    // Menu Mobile
    const mobileBtn = document.querySelector('.nav__mobile-btn');
    const navMenu = document.querySelector('.nav__botoes');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav__botoes a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    mobileBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Botão "Voltar ao Topo"
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            backToTopBtn.classList.toggle('visible', window.pageYOffset > 300);
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Atualiza o ano no copyright
    const copyrightElement = document.querySelector('.footer__copyright p');
    if (copyrightElement) {
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', new Date().getFullYear());
    }
});
