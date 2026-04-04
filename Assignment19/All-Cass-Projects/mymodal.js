const modal = document.getElementById('myModal');
const btn = document.getElementById('triggerBtn');
const closeBtn = document.getElementById('closeBtn');

btn.addEventListener('click', () => {
    // Start the 3-second timer
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 300);
});

// Close the modal when the close button is clicked
closeBtn.onclick = () => {
    modal.style.display = 'none';
};