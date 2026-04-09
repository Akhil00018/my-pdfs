/*
// backend/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
  try {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2402827&lng=78.429358&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null ";
    const response = await fetch(apiUrl, {
      headers: {
        // add a browser-like user-agent to reduce chances of being blocked
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    // Some endpoints may return non-json or block; check status
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch (e) {
      // If the third-party returned HTML or non-JSON, forward an error
      return res.status(502).json({
        error: "Upstream returned non-JSON",
        bodySnippet: text.slice(0, 1000),
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
*/

import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
  try {
    const apiUrl =
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });

    const text = await response.text();
    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch (err) {
      return res.status(502).json({
        error: "Upstream returned non-JSON",
        bodySnippet: text.slice(0, 500),
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running on :5000"));
