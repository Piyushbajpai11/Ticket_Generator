const btn = document.querySelector('.generate-ticket');
const uploadFile = document.querySelector('.uploadFile');
const nameInput = document.querySelector('.fName');
const email = document.querySelector('.email');
const githubId = document.querySelector('.githubId');

const fullName = document.querySelector('.fullName');
const emailAddress = document.querySelector('.emailAddress');

const ticketName = document.querySelector('.tName');
const ticketGithub = document.querySelector('.tGithub');
const ticketDate = document.querySelector('.tDate');

// Create a hidden file input element
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

// Add click event listener to uploadFile div
uploadFile.addEventListener('click', () => {
    fileInput.click(); // Trigger the file input when div is clicked
});

// Optional: Handle the file selection
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
        // You can add additional file handling logic here
    }
});

// Add event listener to the generate ticket button
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent any default form submission
    console.log('Button clicked'); // Add debug logging

    // Name validation: only letters, max 20 characters
    const nameRegex = /^[A-Za-z\s]{1,20}$/;
    if (!nameRegex.test(nameInput.value)) {
        alert('Name should only contain letters and be maximum 20 characters long');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address (example@abc.com)');
        return;
    }

    // GitHub username validation: must start with @ and contain no special symbols
    const githubRegex = /^@[A-Za-z0-9]+$/;
    if (!githubRegex.test(githubId.value)) {
        alert('Invalid GitHub username. It should start with @.');
        return;
    }

    // If all validations pass, update ticket information
    ticketName.innerHTML = nameInput.value;
    ticketGithub.innerHTML = githubId.value;
    ticketDate.innerHTML = new Date().toLocaleDateString();

    // Hide data entry and show ticket
    document.querySelector('.data_entry').style.display = 'none';
    document.querySelector('.ticket-generated').style.display = 'block';
});

// Add input validation for required fields
nameInput.addEventListener('input', () => {
    fullName.innerHTML = nameInput.value;
});

email.addEventListener('input', () => {
    emailAddress.innerHTML = email.value;
});

githubId.addEventListener('input', () => {
    ticketGithub.innerHTML = githubId.value;
});

// Add keyboard event listener for Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click(); // Simulate button click
    }
});













