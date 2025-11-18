const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stockRoutes = require("./routes/stocks");
const connectDB = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Stock Market Backend API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            margin: 0;
            padding: 40px;
            color: #333;
          }
          .card {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 14px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          }
          h1 {
            font-size: 26px;
            margin-bottom: 10px;
            color: #0a66c2;
          }
          p {
            font-size: 15px;
            margin: 4px 0;
            color: #444;
          }
          .endpoint {
            background: #eef4ff;
            padding: 10px 14px;
            border-radius: 8px;
            margin-top: 12px;
            font-family: monospace;
            color: #0a4abf;
          }
          .footer {
            margin-top: 20px;
            font-size: 13px;
            color: #777;
          }
          .status {
            display: inline-block;
            padding: 6px 12px;
            background: #d4f8d4;
            color: #0c7a0c;
            border-radius: 6px;
            font-size: 13px;
            font-weight: bold;
            margin-bottom: 8px;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <div class="status">● Running</div>
          <h1>Stock Market Backend API</h1>

          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Author:</strong> Your Name</p>

          <div class="endpoint">
            GET → /api/stocks
          </div>

          <div class="footer">
            © ${new Date().getFullYear()} Stock Market API Server
          </div>
        </div>
      </body>
    </html>
  `);
});

// Connect to database
connectDB();
app.use("/api/stocks", stockRoutes);

app.listen(8080, () => console.log("Backend running on port 8080"));
