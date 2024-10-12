const priceMap = {
    option1: 10.00,
    option2: 18.00,
    option3: 24.00
  };
  
  document.querySelectorAll('input[name="option"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedPrice = priceMap[this.id];
        document.getElementById('total-price').innerText = `$${selectedPrice.toFixed(2)} USD`;
    });
  });
  