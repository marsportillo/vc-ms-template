import express from "express";
import { config } from "./config/index.js";
import { connectDatabase } from "./config/mongoDBConnection.js";
import indexRoutes from "./routes/index.routes.js";
import logRoutes from "./routes/log.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: config.serviceName,
    timestamp: new Date().toISOString(),
  });
});

app.use("/api", indexRoutes);
app.use("/api/logs", logRoutes);

async function start() {
  await connectDatabase(config.mongoUri);

  app.listen(config.port, () => {
    console.log(`[${config.serviceName}] listening on port ${config.port}`);
  });
}

start();