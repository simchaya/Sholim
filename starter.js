
//code for assignment #2 Interactive Personal Website 

document.getElementById('submitButton').addEventListener("click", postEventHandler);

        async function postEventHandler(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const first_name = document.getElementById('first_name').value;
            const last_name = document.getElementById('last_name').value;

            const response = await fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, first_name, last_name }),
            });

            const data = await response.json();
            console.log(data);

            // Display user input
            document.getElementById('emailResponse').innerHTML = `<p>אימייל: ${data.email}</p>`;
            document.getElementById('firstNameResponse').innerHTML = `<p>שם פרטי: ${data.first_name}</p>`;
            document.getElementById('lastNameResponse').innerHTML = `<p>שם משפחה: ${data.last_name}</p>`;

            // Show success message and hide the form
            document.getElementById('successMessage').style.display = "block";
            document.getElementById('contactForm').reset();  // Reset form after success
        }
