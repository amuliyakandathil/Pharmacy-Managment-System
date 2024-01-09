// main.js
document.addEventListener('DOMContentLoaded', () => {
    const medicineList = document.getElementById('medicine-list');
    const addMedicineForm = document.getElementById('add-medicine-form');
  
    // Fetch medicines from the backend
    fetch('http://localhost:3000/medicines')
      .then(response => response.json())
      .then(data => {
        data.forEach(medicine => {
          const listItem = document.createElement('li');
          listItem.textContent = `${medicine.name} - Quantity: ${medicine.quantity}`;
          medicineList.appendChild(listItem);
        });
      });
  
    // Handle form submission
    addMedicineForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nameInput = document.getElementById('medicine-name');
      const quantityInput = document.getElementById('medicine-quantity');
  
      const newMedicine = {
        name: nameInput.value,
        quantity: parseInt(quantityInput.value),
      };
  
      // Send data to the backend
      fetch('http://localhost:3000/addMedicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMedicine),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Refresh the medicine list
          window.location.reload();
        } else {
          console.error('Failed to add medicine');
        }
      });
    });
  });
  