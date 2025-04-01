// Get all the form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const ageInput = document.getElementById('age');

// Get all the error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const addressError = document.getElementById('addressError');
const ageError = document.getElementById('ageError');

// Event Listeners for 'input' events for real-time validation
nameInput.addEventListener('input', function() {
    if (nameInput.value.trim().length > 0) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Name is required';
    }
});

emailInput.addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() && emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Please enter a valid email address';
    }
});

phoneInput.addEventListener('input', function() {
    const phonePattern = /^\d{10}$/;
    if (phoneInput.value.trim().length >= 10 && phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = '';
    } else {
        phoneError.textContent = 'Please enter a valid phone number';
    }
});

addressInput.addEventListener('input', function() {
    if (addressInput.value.trim().length > 0) {
        addressError.textContent = '';
    } else {
        addressError.textContent = 'Address is required';
    }
});

ageInput.addEventListener('input', function() {
    const age = parseInt(ageInput.value);
    if (ageInput.value && !isNaN(age) && age >= 1 && age <= 120) {
        ageError.textContent = '';
    } else {
        ageError.textContent = 'Age must be between 1 and 120';
    }
});

// Validation function for form submission
function validateForm() {
    let isValid = true;
    
    // Name Validation
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone Validation
    if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (phoneInput.value.trim().length < 10 || !/^\d{10}$/.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Address Validation
    if (!addressInput.value.trim()) {
        addressError.textContent = 'Address is required';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    // Age Validation
    const age = parseInt(ageInput.value);
    if (!ageInput.value) {
        ageError.textContent = 'Age is required';
        isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
        ageError.textContent = 'Age must be between 1 and 120';
        isValid = false;
    } else {
        ageError.textContent = '';
    }
    
    return isValid;
}
