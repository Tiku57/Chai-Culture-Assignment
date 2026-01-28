document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;

        // Basic validation
        if(email && email.includes('@')) {
            
            // Change button text to "loading" state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Joining...';
            submitBtn.style.opacity = '0.8';
            
            // Simulate API Network Request (1.5 seconds)
            setTimeout(() => {
                // Hide Form
                formContainer.style.display = 'none';
                
                // Show Success Message
                successMessage.classList.remove('hidden');
                
                // Log for debugging
                console.log(`New subscriber: ${email}`);
                
            }, 1500);
        }
    });
});