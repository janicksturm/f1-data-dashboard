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

    if (item.headshot_url) {
        card.style.backgroundImage = `url('${item.headshot_url}') `;
    } else {
        card.innerText = "No Foto found";
        card.style.textAlign = "center";
    }

    card.style.backgroundSize = "contain";
    card.style.backgroundRepeat = "no-repeat";
    card.style.backgroundPosition = "center";
    card.style.height = "200px";

    container.appendChild(card);
  });
}