function loadData() {
  const soilContainer = document.getElementById("soilData");
  const distributorContainer = document.getElementById("distributorData");

  soilContainer.innerHTML = "";
  distributorContainer.innerHTML = "";

  db.collection("soils").orderBy("timestamp", "desc").get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <strong>Soil Type:</strong> ${data.soilType}<br>
          <strong>Recommended Crop:</strong> ${data.recommendedCrop}
        `;
        soilContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading soils:", err);
    });

  db.collection("distributors").orderBy("timestamp", "desc").get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <strong>Distributor Name:</strong> ${data.name}<br>
          <strong>Location:</strong> ${data.location}
        `;
        distributorContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading distributors:", err);
    });
}
