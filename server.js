import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

/*
  ❗ HIER KOMT DE INSTAGRAM GRAPH API ❗
  ------------------------------------------------
  Vereist:
  - Instagram Business of Creator account
  - Meta Developer App
  - Access Token
  - Media ID van de video

  Endpoint voorbeeld:
  https://graph.facebook.com/v19.0/{MEDIA_ID}
    ?fields=video_views
    &access_token=ACCESS_TOKEN
*/

app.get("/api/views", async (req, res) => {
  try {
    // ⛔ Tijdelijke demo-waarde (vervang dit)
    const demoViews = Math.floor(100000 + Math.random() * 500);
    const json = await response.json();
    
    res.json({
      views: json.video_views,
      updatedAt: new Date().toISOString()
    });

    res.json({
      views: demoViews,
      updatedAt: new Date().toISOString()
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch views" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
