document.getElementById('fetchCarsBtn').addEventListener('click', () => {
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const carsTableBody = document.getElementById('carsTableBody');
            carsTableBody.innerHTML = ''; // Clear previous content

            data.Results.forEach(car => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${car.MakeName}</td>
                    <td>N/A</td>  <!-- N/A as we don't have model or year info in this example -->
                    <td>N/A</td>  <!-- N/A as we don't have model or year info in this example -->
                `;
                carsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching cars:', error));
});
