console.log("Script loaded");

console.log("run")


let currentModal = null;

function openModal(modalId) {
    if (currentModal) {
        closeModal(currentModal);
    }
    
    const modal = document.getElementById(modalId);
    const button = event.target;
    const rect = button.getBoundingClientRect();

    /* Set modal position based on button position */
    modal.style.display = "block";
    modal.style.top = `${rect.bottom + window.scrollY}px`;
    modal.style.left = `${rect.left + window.scrollX}px`;

    currentModal = modalId;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";

    if (currentModal === modalId) {
        currentModal = null;
    }
}

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.closest('.hathaModal').id;
        closeModal(modalId);
    });
});

window.addEventListener('click', function(event) {
    if (currentModal) {
        const modal = document.getElementById(currentModal);
        if (event.target === modal) {
            closeModal(currentModal);
        }
    }
});

