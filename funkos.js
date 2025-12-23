const galeria = document.getElementById('galeria');

fetch('funkos/funkos.json')
  .then(res => res.json())
  .then(funkos => {

    // Targeta de Funko
    funkos.forEach(f => {
      const card = document.createElement('div');
      card.className = 'funko-card';

      let index = 0;
      const img = document.createElement('img');
      img.src = `funkos/${f.carpeta}/${f.imagenes[index]}`;
      card.appendChild(img);

      const left = document.createElement('div');
      left.className = 'arrow arrow-left';
      left.innerHTML = '&#10094;';
      left.onclick = e => {
        e.stopPropagation();
        index = (index - 1 + f.imagenes.length) % f.imagenes.length;
        img.src = `funkos/${f.carpeta}/${f.imagenes[index]}`;
      };

      const right = document.createElement('div');
      right.className = 'arrow arrow-right';
      right.innerHTML = '&#10095;';
      right.onclick = e => {
        e.stopPropagation();
        index = (index + 1) % f.imagenes.length;
        img.src = `funkos/${f.carpeta}/${f.imagenes[index]}`;
      };

      card.append(left, right);

      // 🔹 CONTENEDOR CLICKABLE
      const info = document.createElement('div');
      info.className = 'funko-info';
      info.onclick = () => {
        window.location.href = `funko.html?id=${f.carpeta}`;
      };

      const titulo = document.createElement('h2');
      titulo.textContent = f.nombre;

      const desc = document.createElement('p');
      desc.textContent = f.descripcion;

      info.append(titulo, desc);
      card.appendChild(info);

      galeria.appendChild(card);
    });
  });
