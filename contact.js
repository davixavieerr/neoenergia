document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validação do nome
            const nome = document.getElementById('nome');
            if(nome.value.trim() === '') {
                showError(nome, 'Por favor, insira seu nome');
                isValid = false;
            } else {
                hideError(nome);
            }
            
            // Validação do email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email.value)) {
                showError(email, 'Por favor, insira um e-mail válido');
                isValid = false;
            } else {
                hideError(email);
            }
            
            // Validação da mensagem
            const mensagem = document.getElementById('mensagem');
            if(mensagem.value.trim() === '') {
                showError(mensagem, 'Por favor, insira sua mensagem');
                isValid = false;
            } else {
                hideError(mensagem);
            }
            
            if(isValid) {
                // Simular envio
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            }
        });
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        input.style.borderColor = '#e74c3c';
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    function hideError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        input.style.borderColor = '';
        errorMessage.style.display = 'none';
    }
});
