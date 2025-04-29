var scroll_up = document.getElementsByClassName('scroll-up')
// var scroll_dow = document.getElementsByClassName('scroll-dow')

function irParaBaixo() {
    let page2 = document.getElementById('page2')
    page2.scrollIntoView({ behavior: "smooth" })
}

function irParaTopo() {
    let page1 = document.getElementById('page1')
    page1.scrollIntoView({ behavior: "smooth" })
    // scroll_up.style.color = 'invert(1)'
}

// Configuração do comportamento do ícone Scroll-up "aparece a partir da página 2"
document.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scroll-up');
    const page1Height = document.getElementById('page1').offsetHeight;

    if (window.scrollY > page1Height * 0.8) {
        scrollUp.style.display = 'flex'
    } else {
        scrollUp.style.display = 'none'
    }
});

// Barra de progresso do scroll
window.addEventListener('scroll', function () {
    const scrollProgress = document.querySelector('.scroll-progress');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    // Calcula a porcentagem scrollada
    const progress = (scrollY / (documentHeight - windowHeight)) * 100;

    // Atualiza a largura da barra
    scrollProgress.style.width = progress + '%';
});

// MODAL
function irParaModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    // Configura a imagem no modal
    modalImg.src = this.src;

    // Exibe o modal
    modal.style.display = 'block';

    // Altera o cursor do body quando modal está aberto
    document.body.style.cursor = 'url("Assets/svg/cursor-close.svg"), auto';

    // Fecha o modal ao clicar no X
    document.querySelector('.close-modal').onclick = function () {
        modal.style.display = 'none';
        document.body.style.cursor = 'default';
    }

    // Fecha o modal ao clicar fora da imagem
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.cursor = 'default';
        }
    }
}

document.getElementById('img-next').addEventListener('click', irParaModal);

// TENTANDO FAZER OS ACCORDINGS 😭
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Encontra o item pai do header clicado
        const currentItem = header.parentElement;

        // Encontra o body e ícone do item atual
        const currentBody = currentItem.querySelector('.accordion-body');
        const currentIcon = header.querySelector('.accordion-icon');

        // Fecha todos os outros accordions
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== currentItem) {
                const body = item.querySelector('.accordion-body');
                const icon = item.querySelector('.accordion-header .accordion-icon');

                body.classList.remove('active');
                icon.classList.remove('active');
                icon.textContent = '+';
            }
        });

        // Alterna o accordion atual
        currentBody.classList.toggle('active');
        currentIcon.classList.toggle('active');
        currentIcon.textContent = currentBody.classList.contains('active') ? '–' : '+';
    });
});
