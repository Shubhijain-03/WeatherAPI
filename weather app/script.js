const apiKey = "129f2c3fecd74bcc9e670511253006";

function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!location) {
    resultDiv.innerHTML = "<p>Please enter a location.</p>";
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    })
    .then(data => {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      resultDiv.innerHTML = `<p>Temperature in <strong>${data.location.name}</strong>: <strong>${temp}°C</strong></p>
                             <p>Condition: ${condition}</p>`;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
