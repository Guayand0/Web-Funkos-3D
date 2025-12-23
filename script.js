const galeria = document.getElementById('galeria');

fetch('funkos/funkos.json')
  .then(res => res.json())
  .then(funkos => {
    funkos.forEach(f => {
      const card = document.createElement('div');
      card.className = 'funko-card';

      const img = document.createElement('img');
      let currentIndex = 0;
      img.src = `funkos/${f.carpeta}/${f.imagenes[currentIndex]}`;
      card.appendChild(img);

      const left = document.createElement('div');
      left.className = 'arrow arrow-left';
      left.innerHTML = '&#10094;';
      left.onclick = () => {
        currentIndex = (currentIndex - 1 + f.imagenes.length) % f.imagenes.length;
        img.src = `funkos/${f.carpeta}/${f.imagenes[currentIndex]}`;
      }
      card.appendChild(left);

      const right = document.createElement('div');
      right.className = 'arrow arrow-right';
      right.innerHTML = '&#10095;';
      right.onclick = () => {
        currentIndex = (currentIndex + 1) % f.imagenes.length;
        img.src = `funkos/${f.carpeta}/${f.imagenes[currentIndex]}`;
      }
      card.appendChild(right);

      const titulo = document.createElement('h2');
      titulo.textContent = f.nombre;
      card.appendChild(titulo);

      const desc = document.createElement('p');
      desc.textContent = f.descripcion;
      card.appendChild(desc);

      galeria.appendChild(card);
    });
  });
