
fetch("https://api.openf1.org/v1/drivers?session_key=latest")
  .then((response) => response.json())
  .then((data) => {
    displayData(data)
  })
  .catch((error) => console.error("Error fetching data:", error)
);

function displayData(data) {
    const table = document.getElementById("driverTableBody");
    table.innerHTML = "";
    data.forEach((driver) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${driver.driver_number}</td>
            <td>${driver.first_name} ${driver.last_name}</td>
            <td>${driver.team_name}</td>
        `;
        table.appendChild(row);
    });
}
