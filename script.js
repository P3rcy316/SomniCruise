document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-button');
    modal.showModal();
    
    closeModalButton.addEventListener('click', () => {
        modal.close();
    });
})

