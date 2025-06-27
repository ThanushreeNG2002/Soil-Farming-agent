
// js/user.js

function loadData() {
  // Load Soil Data
  db.collection("soils").orderBy("timestamp", "desc").get().then(snapshot => {
    let soilHTML = "<ul>";
    snapshot.forEach(doc => {
      const data = doc.data();
      soilHTML += `<li><strong>${data.soilType}</strong>: ${data.recommendedCrop}</li>`;
    });
    soilHTML += "</ul>";
    document.getElementById("soilData").innerHTML = soilHTML;
  }).catch(err => {
    console.error("Error loading soils:", err);
  });

  // Load Distributor Data
  db.collection("distributors").orderBy("timestamp", "desc").get().then(snapshot => {
    let distHTML = "<ul>";
    snapshot.forEach(doc => {
      const data = doc.data();
      distHTML += `<li><strong>${data.name}</strong> - ${data.location}</li>`;
    });
    distHTML += "</ul>";
    document.getElementById("distributorData").innerHTML = distHTML;
  }).catch(err => {
    console.error("Error loading distributors:", err);
  });
}
