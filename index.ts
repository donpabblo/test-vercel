import express from "express";
import path from "path";
import api from "./backend/api";

const app = express();
app.use("/", express.static(path.join(process.cwd(), '/dist/test-vercel/')));
const PORT = process.env.PORT || 3000;
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is up and running @ http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to quit.`);
});

module.exports = app;

