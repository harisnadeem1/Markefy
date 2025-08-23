const app = require("./app");
const dotenv = require("dotenv");

// Force dotenv to load from server/.env
dotenv.config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
