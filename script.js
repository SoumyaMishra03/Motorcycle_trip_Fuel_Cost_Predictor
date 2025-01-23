function calculateFuelCost() {
    const distance = document.getElementById('distance').value;
    const fuelPrice = document.getElementById('fuelPrice').value;
    const bikeModel = document.getElementById('bikeModel').value;
    const mileage = getMileage(bikeModel); // Function to get mileage based on bike model

    if (distance && fuelPrice && mileage) {
        const fuelCost = (distance / mileage) * fuelPrice;
        document.getElementById('result').innerText = `Estimated Fuel Cost: ₹${fuelCost.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields.';
    }
}

function getMileage(bikeModel) {
    const bikeMileage = {
        'Honda CB200X': 42,
        'Bajaj Pulsar NS200': 35,
        'Royal Enfield Classic 350': 40,
        'Royal Enfield Hunter 350': 35,
        'Yamaha MT 15': 50,
        'Royal Enfield Continental GT 650': 45,
        'TVS Apache RTR 160': 55,
        'Hero Splendor Plus XTEC': 70,
        'Honda SP125': 60,
        'KTM Duke 390': 30,
        'Kawasaki Ninja ZX 10R': 25,
        'Jawa 350': 38
        // Add more models and their mileage
    };

    return bikeMileage[bikeModel] || 0;
}

// Populate bike model options dynamically
window.onload = function() {
    const bikeModelSelect = document.getElementById('bikeModel');
    const bikeModels = [
        'Honda CB200X', 
        'Bajaj Pulsar NS200', 
        'Royal Enfield Classic 350', 
        'Royal Enfield Hunter 350', 
        'Yamaha MT 15', 
        'Royal Enfield Continental GT 650', 
        'TVS Apache RTR 160', 
        'Hero Splendor Plus XTEC', 
        'Honda SP125', 
        'KTM Duke 390', 
        'Kawasaki Ninja ZX 10R', 
        'Jawa 350'
    ]; // Add more models as needed

    bikeModels.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        bikeModelSelect.appendChild(option);
    });
};
