document.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    var formContainer = document.querySelector('.registro');
    formContainer.innerHTML = `
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background-color: #FCBB04;">
            <iframe src="https://www.youtube.com/embed/HwXOBXsPnEE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position: absolute; top: 50%; left: 50%; width: 60%; height: 70%; transform: translate(-50%, -50%); background-color: #FCBB04; border: none;"></iframe>
        </div>`;
    
    formContainer.style.backgroundColor = '#FCBB04';
});