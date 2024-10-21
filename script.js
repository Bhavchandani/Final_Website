console.log("Script loaded")

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    alert("Thank you for taking the time. \nWe will be in touch with you shortly");

    //reset the form to default state
    this.reset();
});

let currentModal = null;

function openModal(modalId) {
    if (currentModal) {
        closeModal(currentModal);
    }
    
    const modal = document.getElementById(modalId);
    const button = event.target;
    const rect = button.getBoundingClientRect(); //gets the size of the button and its position relative to the viewport.

    // Set modal position based on button position
    modal.style.display = "block";
    modal.style.top = `${rect.bottom + window.scrollY}px`; //style top based on button's postion-bottom
    modal.style.left = `${rect.left + window.scrollX}px`; //style left based on button's postion-left

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
