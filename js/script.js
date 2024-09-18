function mostrarDiv(divId) {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].id === 'div' + divId) {
        divs[i].style.display = 'block';
      } else {
        divs[i].style.display = 'none';
      }
    }
  }
  
  alert ("Bem Vindos ao meu SITE, Eu sou o Bruno!!")