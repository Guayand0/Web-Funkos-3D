const galeria = document.getElementById('galeria');

fetch('funkos/funkos.json')
    .then(response => response.json())
    .then(funkos => {
        funkos.forEach(f => {
            const card = document.createElement('div');
            card.className = 'funko-card';

            const img = document.createElement('img');
            img.src = `funkos/${f.carpeta}/${f.imagen}`;
            card.appendChild(img);

            const titulo = document.createElement('h2');
            titulo.textContent = f.nombre;
            card.appendChild(titulo);

            const desc = document.createElement('p');
            desc.textContent = f.descripcion;
            card.appendChild(desc);

            galeria.appendChild(card);
        });
    })
    .catch(err => console.error("Error cargando los Funkos:", err));
