let circuitImages = {};

fetch('https://api.jolpi.ca/ergast/f1/current.json')
  .then(res => res.json())
  .then(data => {
    fetch('../images/circuitImages.json')
      .then(res => res.json())
      .then(images => {
        circuitImages = images;
        displayData(data);
      });
  }
);

function displayData(data) {
  const container = document.getElementById('race-container');
      
  data.MRData.RaceTable.Races.forEach(race => {
    const raceBox = document.createElement('div');
    raceBox.className = 'race-box'; 

    const imageUrl = circuitImages[race.Circuit.circuitName].imageUrl;
    
    raceBox.innerHTML = `
      <a href="${imageUrl}">
        <img class="race-image" src="${imageUrl}" alt="Picture of ${race.Circuit.circuitName}" />
      </a>
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