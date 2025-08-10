fetch('https://api.jolpi.ca/ergast/f1/current.json')
    .then(response => response.json())
    .then(data => {
      displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error)
    );


function displayData(data) {
  const container = document.getElementById('race-container');
      
  data.MRData.RaceTable.Races.forEach(race => {
    const raceBox = document.createElement('div');
    raceBox.className = 'race-box';
    
    raceBox.innerHTML = `
      <img class="race-image" src="" alt="Picture of ${race.Circuit.circuitName}" />
      <div class="race-info">
        <h2>${race.raceName}</h2>
        <p><strong>Date:</strong> ${race.date}</p>
        <p><strong>Name:</strong> ${race.Circuit.circuitName}</p>
        <p><strong>Location:</strong> ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
        <a href="${race.Circuit.url}">See more on Wikipedia</a>
      </div>
    `;
    container.appendChild(raceBox);
  });
}