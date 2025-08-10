fetch('https://api.jolpi.ca/ergast/f1/current.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error)
    );