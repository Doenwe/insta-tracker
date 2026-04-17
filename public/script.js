async function loadViews() {
  try {
    const res = await fetch("/api/views");
    const data = await res.json();

    document.getElementById("views").textContent =
      data.views.toLocaleString("nl-NL");

    document.getElementById("updated").textContent =
      "Laatste update: " + new Date(data.updatedAt).toLocaleTimeString();
  } catch (e) {
    document.getElementById("views").textContent = "Fout";
  }
}

// Initieel laden
loadViews();

// Elke 30 seconden vernieuwen
setInterval(loadViews, 30000);
