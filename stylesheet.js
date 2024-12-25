
        function generateReceipt() {
            // Get input values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const movie = document.getElementById('movie').value;

            // Validate inputs
            if (!name || !email || !movie) {
                alert('Please fill in all fields!');
                return;
            }

            // Display receipt
            const receiptContent = `
                Thank you, <strong>${name}</strong>!<br>
                You have rented the movie: <strong>${movie}</strong>.<br>
                A confirmation has been sent to: <strong>${email}</strong>.
            `;
            document.getElementById('receiptContent').innerHTML = receiptContent;
            document.getElementById('receipt').style.display = 'block';
        }
    
    