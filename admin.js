
function postSoil() {
  const soilType = document.getElementById("soilType").value;
  const crop = document.getElementById("recommendedCrop").value;

  db.collection("soils").add({
    soilType: soilType,
    recommendedCrop: crop,
    timestamp: new Date()
  })
  .then(() => {
    alert("Soil details posted successfully!");
    document.getElementById("soilType").value = "";
    document.getElementById("recommendedCrop").value = "";
  })
  .catch(error => {
    console.error("Error posting soil details:", error);
    alert("Failed to post soil details");
  });
}

function postDistributor() {
  const name = document.getElementById("distributorName").value;
  const location = document.getElementById("location").value;

  db.collection("distributors").add({
    name: name,
    location: location,
    timestamp: new Date()
  })
  .then(() => {
    alert("Distributor details posted successfully!");
    document.getElementById("distributorName").value = "";
    document.getElementById("location").value = "";
  })
  .catch(error => {
    console.error("Error posting distributor details:", error);
    alert("Failed to post distributor details");
  });
}
