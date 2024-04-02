document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  let currentInput = '';

  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
      currentInput += this.textContent;
      display.value = currentInput;
    });
  });

  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
      currentInput += this.textContent;
      display.value = currentInput;
    });
  });

  document.getElementById('decimal').addEventListener('click', function() {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      display.value = currentInput;
    }
  });

  document.getElementById('clear').addEventListener('click', function() {
    currentInput = '';
    display.value = '';
  });

  document.getElementById('calculate').addEventListener('click', function() {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = 'Error';
      currentInput = '';
    }
  });
});
