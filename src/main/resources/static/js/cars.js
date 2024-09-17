document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchCarsBtn').addEventListener('click', () => {
        const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Check the structure of the data
                const carsTableBody = document.getElementById('carsTableBody');
                carsTableBody.innerHTML = ''; // Clear previous content

                // Assuming the data has a 'Results' property which is an array of car makes
                data.Results.forEach(car => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${car.MakeName}</td>
                        <td>N/A</td> <!-- Model not available in this example -->
                        <td>N/A</td> <!-- Year not available in this example -->
                    `;
                    carsTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching cars:', error));
    });
});
