// js/carrusel.js

// Esperar a que el DOM cargue
window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.mascota');
  const slides = document.querySelectorAll('.mascota-img');
  const prevBtn = document.querySelector('.prev4');
  const nextBtn = document.querySelector('.next4');
  const section = document.querySelector('.mascotas'); // para pausar al hover

  if (!contenedor || slides.length === 0) return; // seguridad

  let index = 0;
  const total = slides.length;
  const AUTO_TIME = 7000; // tiempo automático (ms)
  let intervalId = null;

  // Muestra el slide en 'index' (cambia transform en %)
  function mostrarImagen(i) {
    // asegura índice válido
    index = (i + total) % total;
    contenedor.style.transform = `translateX(-${index * 100}%)`;
  }

  // siguiente/previo
  function siguiente() {
    mostrarImagen(index + 1);
  }
  function anterior() {
    mostrarImagen(index - 1);
  }

  // auto play
  function startAuto() {
    stopAuto(); // evitar dobles intervalos
    intervalId = setInterval(() => {
      siguiente();
    }, AUTO_TIME);
  }
  function stopAuto() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // eventos botones (si existen)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      siguiente();
      startAuto(); // reinicia el auto (opcional)
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      anterior();
      startAuto(); // reinicia el auto (opcional)
    });
  }

  // pausar al pasar el ratón por la sección, reanudar al salir
  if (section) {
    section.addEventListener('mouseenter', stopAuto);
    section.addEventListener('mouseleave', startAuto);
  }

  // navegación por teclado (izq/der)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      siguiente();
      startAuto();
    } else if (e.key === 'ArrowLeft') {
      anterior();
      startAuto();
    }
  });

  // iniciar en slide 0 y arrancar autoplay
  mostrarImagen(0);
  startAuto();

  // Opcional: recalcular (si usas pixel-based en cambios futuros)
  window.addEventListener('resize', () => {
    // si más adelante cambias a translateX en px, recalcula aquí
    // por ahora con % no hace falta acción en resize
  });
});
