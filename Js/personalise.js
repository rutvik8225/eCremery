document.querySelectorAll('.pint-card').forEach(card => {
    const select = card.querySelector('.flavor-select');
    const input = card.querySelector('.custom-name');
    const flavorOutput = card.querySelector('.flavor-output');
    const nameOutput = card.querySelector('.name-output');
  
    // Character count
    const charCounter = document.createElement("div");
    charCounter.classList.add("char-count");
    input.insertAdjacentElement("afterend", charCounter);
  
    function updateCharacterCount() {
      const length = input.value.length;
      charCounter.textContent = `${length}/20`;
      charCounter.classList.toggle('warn', length > 15);
    }
  
    input.addEventListener("input", () => {
      nameOutput.textContent = `Name: ${input.value || '—'}`;
      updateCharacterCount();
    });
  
    select.addEventListener("change", () => {
      flavorOutput.innerHTML = `Flavor: <span class="flavor-color">${select.value || '—'}</span>`;
      card.style.setProperty('--flavor-color', select.value ? getColorByFlavor(select.value) : '#eee');
    });
  
    updateCharacterCount(); // initialize
  });
  
  function getColorByFlavor(flavor) {
    const map = {
      "Vanilla Bean": "#fdf1d6",
      "Strawberry Swirl": "#fcd5d6",
      "Mint Chip": "#d8f3dc",
      "Birthday Cake": "#ffe3e3",
      "Cookie Dough": "#f6e9d7",
      "Chocolate Fudge": "#cda27a",
      "Salted Caramel": "#ffd6a5",
      "Blueberry Pie": "#d0c4f7",
      "Rocky Road": "#c9b89d",
      "Pistachio": "#ccf4d1",
      "Lemon Zest": "#fff7b3",
      "Butter Pecan": "#e7c49b",
      "Cotton Candy": "#f7d0f5",
      "Matcha Green Tea": "#c0f2c9",
      "Peanut Butter Cup": "#deb887",
      "Cherry Cheesecake": "#ffc9c9",
      "Espresso Crunch": "#b89f94",
      "Cookies & Cream": "#e8e8e8"
    };
    return map[flavor] || "#eee";
  }
  