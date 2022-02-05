
let total = 0
// document.getElementById('expense-form').reset();

// Event listener
document.addEventListener('submit',

  function (e) {

    // Get input values
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;

    // Get output element
    const output = document.getElementById('output');

    // Get table element
    const displayBody = document.getElementById('display-body');

    // Create table row
    const itemRow = displayBody.appendChild(document.createElement('tr'));

    // Create table data cell for name and price
    const itemElement = itemRow.appendChild(document.createElement('td'));
    const priceElement = itemRow.appendChild(document.createElement('td'));

    // Add dollar sign to price
    const priceFormat = `$${price}`;

    // Insert input values into data cells 
    const itemText = itemElement.innerText = item;
    const priceText = priceElement.innerText = priceFormat;

    // Create class names for styling in css
    itemElement.className = 'item-td';
    priceElement.className = 'price-td';

    // Add price to total
    total += parseFloat(price);

    // Add dollar sign to total
    const totalFormat = `$${total.toFixed(2)}`;

    // Output calculated total to output element
    output.innerText = totalFormat;

    // Reset values
    function resetValues() {
      const item = document.getElementById('item').value = '';
      const price = document.getElementById('price').value = '';
    }

    resetValues();

    e.preventDefault();
  })


// Reset display
document.addEventListener('reset',

  function () {

    // Get output
    const outputContent = document.getElementById('output');

    // Get array created elements
    const itemTds = document.getElementsByClassName('item-td');
    const priceTds = document.getElementsByClassName('price-td');

    // Loop through created elements array and remove each
    function clearRows(array) {

      Array.from(array).forEach(function (element) {
        element.remove();
      })
    }

    // reset output value to 0
    outputContent.innerText = 0;

    clearRows(itemTds);
    clearRows(priceTds);

    // Set Total to 0
    total = 0;
  }
)
