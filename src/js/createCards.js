fetch("https://api.openf1.org/v1/drivers?session_key=latest")
  .then((response) => response.json())
  .then((data) => {
    cards(data)
  })
  .catch((error) => console.error("Error fetching data:", error)
);

function cards(data) {
  const container = document.getElementById("card-div");

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = `card`;

    const inner = document.createElement("div");
    inner.className = `card-inner`;

    const front = document.createElement("div");
    front.className = `card-front`;

    if (item.headshot_url) {
      front.style.backgroundImage = `url('${item.headshot_url}')`;
    } else {
      front.textContent = `No Foto of ${item.last_name}`;
    }

    front.style.display = "flex";
    front.style.alignItems = "center";
    front.style.justifyContent = "center";

    const back = document.createElement("div");
    back.className = "card-back";
    back.innerHTML = `
      <div>
        <h3>${item.first_name} ${item.last_name}</h3>
        <p>${item.driver_number}</p>
        <p>${item.team_name}</p>
      </div>
    `;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    container.appendChild(card);
  });
}