const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('funkos/funkos.json')
  .then(res => res.json())
  .then(funkos => {

    // Detalles de Funko
    const f = funkos.find(x => x.carpeta === id);
    if (!f) return;

    let index = 0;

    const cont = document.getElementById('funko-detalle');

    cont.innerHTML = `
      <h1>${f.nombre}</h1>
      <img id="img" src="funkos/${f.carpeta}/${f.imagenes[0]}">
      <p>${f.descripcion}</p>
    `;

    const img = document.getElementById('img');

    img.onclick = () => {
      index = (index + 1) % f.imagenes.length;
      img.src = `funkos/${f.carpeta}/${f.imagenes[index]}`;
    };
  });
