const imagen = document.getElementById('img');

if (imagen) {
  imagen.addEventListener('click', () => {
    const hasBorder = imagen.style.border === '2px solid red';

    if (hasBorder) {
      imagen.style.border = '';
      imagen.style.borderRadius = '';
    } else {
      imagen.style.border = '2px solid red';
      imagen.style.borderRadius = '2px';
    }
  });
}


