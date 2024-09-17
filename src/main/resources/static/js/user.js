// Fetch Single User
document.getElementById('fetchUserBtn').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    if (userId) {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const userDetailsDiv = document.getElementById('userDetails');
                userDetailsDiv.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Website:</strong> ${data.website}</p>
                `;
            })
            .catch(error => console.error('Error fetching user:', error));
    } else {
        alert('Please enter a valid user ID');
    }
});

// Fetch All Users
document.getElementById('fetchAllUsersBtn').addEventListener('click', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const usersTableBody = document.getElementById('usersTableBody');
            usersTableBody.innerHTML = ''; // Clear previous table content

            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                `;
                usersTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
