const express = require("express");
const connectDb = require("./config/db");
const config = require("./config/config");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoute");
const taskRoutes = require("./routes/taskRoute");
const cors = require('cors')
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser("your_secret_key"));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src https://example.com; script-src 'self' https://apis.example.com");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
  res.setHeader("Expect-CT", 'max-age=86400, enforce, report-uri="https://example.com/report"');
  res.setHeader("Permissions-Policy", 'geolocation=(self "https://example.com"), microphone=()');

  next();
});

//routes
app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

//db connection
connectDb();

app.listen(config.port, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
