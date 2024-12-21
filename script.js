
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const date = document.getElementById('date').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just redirect to the search results page
            window.location.href = `search-results.html?from=${from}&to=${to}&date=${date}`;
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real application, you would send this data to a server for authentication
            console.log('Login attempt:', email, password);
            alert('Login functionality not implemented in this demo.');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real application, you would send this data to a server for registration
            console.log('Registration attempt:', name, email, password);
            alert('Registration functionality not implemented in this demo.');
        });
    }

    // Check if we're on the search results page
    if (window.location.pathname.includes('search-results.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const from = urlParams.get('from');
        const to = urlParams.get('to');
        const date = urlParams.get('date');

        // In a real application, you would fetch real data from a server
        // For now, we'll just display some dummy results
        const dummyResults = [
            { id: 1, name: 'Express Bus', departure: '08:00', arrival: '12:00', price: '$25' },
            { id: 2, name: 'Luxury Coach', departure: '10:00', arrival: '14:00', price: '$35' },
            { id: 3, name: 'Night Bus', departure: '22:00', arrival: '06:00', price: '$30' },
        ];

        const resultsContainer = document.getElementById('search-results');
        dummyResults.forEach(bus => {
            const busCard = document.createElement('div');
            busCard.className = 'col-md-4 mb-4';
            busCard.innerHTML = `
                <div class="card bus-card">
                    <div class="card-body">
                        <h5 class="card-title">${bus.name}</h5>
                        <p class="card-text">From: ${from}</p>
                        <p class="card-text">To: ${to}</p>
                        <p class="card-text">Date: ${date}</p>
                        <p class="card-text">Departure: ${bus.departure}</p>
                        <p class="card-text">Arrival: ${bus.arrival}</p>
                        <p class="card-text">Price: ${bus.price}</p>
                        <a href="bus-details.html?id=${bus.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(busCard);
        });
    }

    // Check if we're on the bus details page
    if (window.location.pathname.includes('bus-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const busId = urlParams.get('id');

        // In a real application, you would fetch real data from a server
        // For now, we'll just display some dummy details
        const dummyBusDetails = {
            id: busId,
            name: 'Express Bus',
            from: 'New York',
            to: 'Washington D.C.',
            date: '2023-07-01',
            departure: '08:00',
            arrival: '12:00',
            price: '$25',
            amenities: ['Wi-Fi', 'Air Conditioning', 'Reclining Seats'],
            availableSeats: 30
        };

        const detailsContainer = document.getElementById('bus-details');
        detailsContainer.innerHTML = `
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${dummyBusDetails.name}</h2>
                        <p class="card-text"><strong>From:</strong> ${dummyBusDetails.from}</p>
                        <p class="card-text"><strong>To:</strong> ${dummyBusDetails.to}</p>
                        <p class="card-text"><strong>Date:</strong> ${dummyBusDetails.date}</p>
                        <p class="card-text"><strong>Departure:</strong> ${dummyBusDetails.departure}</p>
                        <p class="card-text"><strong>Arrival:</strong> ${dummyBusDetails.arrival}</p>
                        <p class="card-text"><strong>Price:</strong> ${dummyBusDetails.price}</p>
                        <p class="card-text"><strong>Amenities:</strong> ${dummyBusDetails.amenities.join(', ')}</p>
                        <p class="card-text"><strong>Available Seats:</strong> ${dummyBusDetails.availableSeats}</p>
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        `;
    }
});

