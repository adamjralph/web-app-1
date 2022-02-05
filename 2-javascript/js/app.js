
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

    // Add dollar sign to price and output
    const priceFormat = `$${price}`;
    const outputFormat = `$${price}`;

    // Insert input values into data cells 
    const itemText = itemElement.innerText = item;
    const priceText = priceElement.innerText = priceFormat;

    // Create class names for styling in css
    itemElement.className = 'item-td';
    priceElement.className = 'price-td';

    output.innerText = outputFormat;

    e.preventDefault();

  })