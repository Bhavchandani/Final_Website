console.log("run")

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show alert message
    alert('Thanks for your message. We will be in touch.');

    // Reset the form
    document.getElementById('contactForm').reset();
}

/*modal window js*/ 
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
