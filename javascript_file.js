async function calculateFuelCost() {
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    const bikeModel = document.getElementById('bikeModel').value;
    const state = prompt("Please enter your state:");

    const distance = await getDistance(startPoint, endPoint);
    const fuelPrice = await getFuelPrice(state);
    const mileage = getMileage(bikeModel);

    if (distance && fuelPrice && mileage) {
        const fuelCost = (distance / mileage) * fuelPrice;
        document.getElementById('result').innerText = `Estimated Fuel Cost: ₹${fuelCost.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields.';
    }
}

async function getDistance(startPoint, endPoint) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${startPoint}&destinations=${endPoint}&key=${apiKey}`);
    const data = await response.json();
    return data.rows[0].elements[0].distance.value / 1000; // Convert meters to kilometers
}

async function getFuelPrice(state) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const response = await fetch(`https://apiexpress.com/api/daily-fuel-prices-india?state=${state}&key=${apiKey}`);
    const data = await response.json();
    return data.fuelPrices.petrol; // Assuming petrol price is needed
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
    };

    return bikeMileage[bikeModel] || 0;
}
