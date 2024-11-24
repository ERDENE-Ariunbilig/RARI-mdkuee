document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = link.getAttribute('href');
      const img = document.createElement('img');
      img.src = target;
      img.style.position = 'fixed';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100vw';
      img.style.height = '100vh';
      img.style.objectFit = 'contain';
      img.style.zIndex = '9999';
  
      document.body.appendChild(img);
      img.addEventListener('click', function() {
        document.body.removeChild(img);
      });
    });
  });