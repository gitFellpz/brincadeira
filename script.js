const button = document.getElementById('btn_nao');
    
button.addEventListener('click', function() {
  const newPositionX = Math.random() * (window.innerWidth - 300);
  const newPositionY = Math.random() * (window.innerHeight - 300);

  button.style.left = newPositionX + 'px';
  button.style.top = newPositionY + 'px';
});

let clickCount = 0;

button.addEventListener('click', function() {
  clickCount++;
  
  if (clickCount === 2) {
    alert('Mó burra');
  }

  if (clickCount === 3) {
    alert('Você é insistente em tio kkkkkk');
  }

  if (clickCount === 4) {
    alert('clica logo no sim xará');
  }

  if (clickCount === 7) {
    alert('7 vezes Dandara...');
  }
});

const button2 = document.getElementById('btn_sim');

let clickCount2 = 0;

button2.addEventListener('click', function() {
    const main1 = document.getElementById('main_1')
    const main2 = document.getElementById('main_2')


    setTimeout(function() {
        main1.style.display = 'none';
        main2.style.display = 'flex';
    }, 7000);
    clickCount++;

    if (clickCount === 2) {
        alert('Calma ae tio, espera o bgl carregar kkkk');
    }

    if (clickCount === 5) {
        alert('ESPERAAAAAAAAAAAAA');
    }

    const loadingBar = document.querySelector('.loading-bar');
    const loadingProgress = document.querySelector('.loading-progress');
    const message = document.querySelector('.message');
    const message2 = document.querySelector('.message2');
    const imagem = document.querySelector('.imagem');
    
    
    loadingBar.style.display = 'block';
    loadingProgress.style.width = '0%';
    message.style.display = 'none';
    message2.style.display = 'none';

        
    setTimeout(function() {
        loadingProgress.style.width = '100%';
          
        setTimeout(function() {
            message.style.display = 'block';

        setTimeout(function() {
            message2.style.display = 'block';
            imagem.style.display = 'block';
        }, 2000);

        }, 5000);
    }, 8500);
});

