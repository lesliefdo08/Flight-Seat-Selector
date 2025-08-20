const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const dateInput = document.getElementById('date');

const seats = document.querySelectorAll('.seat:not(.occupied)');
const seatCountSpan = document.getElementById('seatCount');
const totalPriceSpan = document.getElementById('totalPrice');
const pricePerSeatSpan = document.getElementById('pricePerSeat');
const bookBtn = document.getElementById('bookBtn');

const basePrices = {
    "Bangkok - Thailand (BKK)": 1000,
    "London - United Kingdom (LHR)": 1800,
    "New York - USA (JFK)": 2500,
    "Paris - France (CDG)": 1200,
    "Tokyo - Japan (NRT)": 2800,
    "Dubai - UAE (DXB)": 2200,
    "Sydney - Australia (SYD)": 3000,
    "Singapore (SIN)": 2000,
    "Frankfurt - Germany (FRA)": 1600,
    "Los Angeles - USA (LAX)": 2600,
    "Mumbai - India (BOM)": 1500,
    "Hong Kong (HKG)": 2100,
    "Toronto - Canada (YYZ)": 2300,
    "Cairo - Egypt (CAI)": 1700,
    "Rome - Italy (FCO)": 2700,
    "São Paulo - Brazil (GRU)": 2400,
    "Moscow - Russia (SVO)": 1900,
    "Johannesburg - South Africa (JNB)": 2000,
    "Seoul - South Korea (ICN)": 2900,
    "Istanbul - Turkey (IST)": 2200
};

let selectedSeatsCount = 0;
let currentPricePerSeat = 0;

function updatePrice() {
    const origin = originInput.value.trim();
    const destination = destinationInput.value.trim();

    if (
        origin === "" ||
        destination === "" ||
        origin === destination ||
        !(origin in basePrices) ||
        !(destination in basePrices)
    ) {
        currentPricePerSeat = 0;
        pricePerSeatSpan.textContent = "-";
        resetSeats();
        updateSummary();
        return;
    }

    // Price calculation: average of base prices divided by a factor for ticket pricing
    currentPricePerSeat = Math.floor((basePrices[origin] + basePrices[destination]) / 30);
    pricePerSeatSpan.textContent = currentPricePerSeat;
    updateSummary();
}

function resetSeats() {
    seats.forEach(seat => {
        seat.classList.remove('selected');
    });
    selectedSeatsCount = 0;
}

function updateSummary() {
    seatCountSpan.textContent = selectedSeatsCount;
    const totalPrice = selectedSeatsCount * currentPricePerSeat;
    totalPriceSpan.textContent = totalPrice;
    bookBtn.disabled = totalPrice === 0;
}

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) return;
        seat.classList.toggle('selected');

        selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
        updateSummary();
    });
});

originInput.addEventListener('input', updatePrice);
destinationInput.addEventListener('input', updatePrice);

dateInput.min = new Date().toISOString().split("T")[0];
dateInput.valueAsDate = new Date();

updatePrice();

bookBtn.addEventListener('click', () => {
    if (selectedSeatsCount === 0) return alert('Please select at least one seat');
    const origin = originInput.value.trim();
    const destination = destinationInput.value.trim();
    const date = dateInput.value;

    if (origin === "" || destination === "" || origin === destination) {
        alert('Please enter valid origin and destination, and ensure they are different.');
        return;
    }

    alert(`Booking confirmed:\nFrom: ${origin}\nTo: ${destination}\nDate: ${date}\nSeats: ${selectedSeatsCount}\nTotal: $${selectedSeatsCount * currentPricePerSeat} USD\n\nThank you for booking!`);
    resetSeats();
    updateSummary();
});