        const form = document.getElementById('registrationForm');
        const messageDiv = document.getElementById('message');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            messageDiv.textContent = '';
            
            const formData = new FormData(form);
            const mobile = formData.get('mobileNo');
            const email = formData.get('email');
            
            // Basic validation
            if (mobile.length !== 10 || !/^[0-9]+$/.test(mobile)) {
                messageDiv.textContent = 'Mobile number must be 10 digits';
                messageDiv.className = 'error';
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                messageDiv.textContent = 'Please enter valid email';
                messageDiv.className = 'error';
                return;
            }
            
            // Success
            messageDiv.textContent = 'Registration successful!';
            messageDiv.className = 'success';
            console.log('Form data:', Object.fromEntries(formData));
        });

        // Only allow numbers in mobile field
        document.getElementById('mobileNo').addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });