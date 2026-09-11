import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "Martin",
    role: "Developer",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
