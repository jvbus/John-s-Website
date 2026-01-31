const container = document.getElementById('itemsContainer');

fetch('products.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load products.json");
    return response.json();
  })
  .then(items => {
    container.innerHTML = "";
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('itemCard');
      card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.price}</p>
        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = `<p style="color:red;">Error loading JSON: ${err.message}</p>`;
  });
