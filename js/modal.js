const iniciaModal = document.querySelectorAll('[data-modal-target]')
const botaoFechar = document.querySelectorAll('[data-close-button]')
const botaoIniciar = document.querySelectorAll('[data-start-button]')

iniciaModal.forEach(e => {
    const modal = document.querySelector(e.dataset.modalTarget)
    abreModal(modal)
})

botaoFechar.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        fechaModal(modal)
    })
})

botaoIniciar.forEach(b =>{
    b.addEventListener('click', () =>{
        const modal = b.closest('.modal')
        fechaModal(modal)
    })
})

function abreModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function fechaModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}
