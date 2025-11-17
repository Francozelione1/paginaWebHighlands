// archivo: ajustarCursos.js

function ajustarOrdenCursos() {
  const cursos = document.querySelectorAll('.curso');

  cursos.forEach(curso => {
    // Guardamos el contenido original una sola vez
    if (!curso.dataset.original) {
      curso.dataset.original = curso.innerHTML;
    }

    const imgDiv = curso.querySelector('.contenedorImgCurso');
    const infoDiv = curso.querySelector('.contenedorInfoCurso');

    // Si la pantalla es menor o igual a 990px → forzar texto-imagen
    if (window.innerWidth <= 990) {
      // Solo si el orden actual no es texto-imagen
      const primero = curso.firstElementChild;
      if (primero && primero.classList.contains('contenedorImgCurso')) {
        curso.innerHTML = `
          ${infoDiv.outerHTML}
          ${imgDiv.outerHTML}
        `;
      }
    } 
    // Si volvemos a pantalla grande → restaurar estructura original
    else {
      curso.innerHTML = curso.dataset.original;
    }
  });
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', ajustarOrdenCursos);
window.addEventListener('resize', ajustarOrdenCursos);
