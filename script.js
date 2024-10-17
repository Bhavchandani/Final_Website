console.log("Script loaded");

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show alert message
    alert('Thanks for your message. We will be in touch.');

    // Reset the form
    document.getElementById('contactForm').reset();
}

let currentModal = null;

function openModal(modalId) {
    if (currentModal) {
        closeModal(currentModal);
    }
    
    const modal = document.getElementById(modalId);
    const button = event.target;
    const rect = button.getBoundingClientRect();

    // Set modal position based on button position
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

