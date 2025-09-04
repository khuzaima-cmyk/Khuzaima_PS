        // Get the form element
        const form = document.getElementById('contactForm');
        
        // Function to display form data in console
        function displayFormData(data) {
            console.log('Form Submission:');
            console.log('First Name:', data.firstName);
            console.log('Last Name:', data.lastName);
            console.log('Email:', data.email);
            console.log('Phone Number:', data.phone || 'Not provided');
        }

        // Add event listener for form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Collect form data
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim()
            };
            
            // Validate required fields
            if (!formData.firstName || !formData.lastName || !formData.email) {
                document.getElementById('status').textContent = 'Please fill all required fields.';
                return;
            }
            
            // Call function to display data in console
            displayFormData(formData);
            
            // Clear form and status
            form.reset();
            document.getElementById('status').textContent = 'Form submitted successfully!';
        });
