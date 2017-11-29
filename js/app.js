window.addEventListener('load', function() {
  var selectHeadquarters = document.getElementById('headquarters');
  var selectGeneration = document.getElementById('generation');

  // Cómo puedo agregar el resto de generaciones sin repetir la creacion del option?
  selectHeadquarters.addEventListener('change', function() {
    if (selectHeadquarters.value == 'arequipa') {
      var option = document.createElement('option');
      option.textContent = '2016 - II';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - I';
      selectGeneration.appendChild(option);
      // Retorna la posición inicial del select
      selectGeneration.value = 'select';
      // selectGeneration.value = 'initial'; // Reinicia el select pero con inicio blanco
    } else if (selectHeadquarters.value == 'chile') {
      var option = document.createElement('option');
      option.textContent = '2016 - II';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - I';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - II';
      selectGeneration.appendChild(option);
      // Retorna la posición inicial del select
      selectGeneration.value = 'select';
    } else if (selectHeadquarters.value == 'lima') {
      var option = document.createElement('option');
      option.textContent = '2016 - II';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - I';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - II';
      selectGeneration.appendChild(option);
      // Retorna la posición inicial del select
      selectGeneration.value = 'select';
    } else if (selectHeadquarters.value == 'mexico') {
      var option = document.createElement('option');
      option.textContent = '2015 - I';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2016 - I';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - I';
      selectGeneration.appendChild(option);
      var option = document.createElement('option');
      option.textContent = '2017 - II';
      selectGeneration.appendChild(option);
      // Retorna la posición inicial del select
      selectGeneration.value = 'select';
    }
  });
});


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
