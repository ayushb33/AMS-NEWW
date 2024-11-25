document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected values
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travel-date').value;

    // Generate a random ticket number
    const ticketNumber = 'TICKET-' + Math.floor(Math.random() * 100000);

    // Set ticket details
    document.getElementById('ticket-number').textContent = ticketNumber;
    document.getElementById('ticket-source').textContent = source;
    document.getElementById('ticket-destination').textContent = destination;
    document.getElementById('ticket-date').textContent = travelDate;

    // Show the ticket display section
    document.getElementById('ticket-display').style.display = 'block';
});