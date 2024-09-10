// Crop Recommendation
document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d1e6f44c1829745ba12a3eb9e4efb132`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].main;
            let recommendations;

            if (temp < 15) {
                recommendations = 'Wheat, Barley';
            } else if (temp < 25) {
                recommendations = 'Corn, Soybean';
            } else {
                recommendations = 'Rice, Cotton';
            }

            document.getElementById('recommendations').innerHTML = `
                <h3>Recommended Crops for ${location}</h3>
                <p>Temperature: ${temp}°K</p>
                <p>Weather: ${weather}</p>
                <ul>
                    <li>${recommendations}</li>
                </ul>
            `;
        })
        .catch(error => console.error('Error:', error));
});

// Crop Prices
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/crop-prices') // Replace with actual API endpoint
        .then(response => response.json())
        .then(data => {
            const cropPrices = data.prices; // Adjust based on API response
            let pricesHtml = '<h3>Current Crop Prices</h3><ul>';

            cropPrices.forEach(crop => {
                pricesHtml += `<li>${crop.name}: ${crop.price} per unit</li>`;
            });

            pricesHtml += '</ul>';
            document.getElementById('crop-prices').innerHTML = pricesHtml;
        })
        .catch(error => console.error('Error:', error));
});
