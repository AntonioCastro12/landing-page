document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const loadingOverlay = document.querySelector('.loading-overlay');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Detener el envío del formulario por defecto

            // Mostrar la barra de carga
            loadingOverlay.style.display = 'flex';

            // Crear un objeto FormData con los datos del formulario
            const formData = new FormData(form);

            // Enviar el formulario usando fetch
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Si el envío fue exitoso, reemplazar el contenido del contenedor
                    const formContainer = document.querySelector('.registro');
                    if (formContainer) {
                        formContainer.innerHTML = `
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background-color: #FCBB04;">
                                <iframe src="https://www.youtube.com/embed/HwXOBXsPnEE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position: absolute; top: 50%; left: 50%; width: 60%; height: 70%; transform: translate(-50%, -50%); background-color: #FCBB04; border: none;"></iframe>
                            </div>`;
                        
                        formContainer.style.backgroundColor = '#FCBB04';
                    } else {
                        console.error('Contenedor del formulario no encontrado.');
                    }
                } else {
                    console.error('Error al enviar el formulario.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => {
                // Ocultar la barra de carga después de recibir la respuesta
                loadingOverlay.style.display = 'none';
            });
        });
    } else {
        console.error('Formulario no encontrado.');
    }
});