import { Log } from "../models/Log.model.js";

/**
 * Create a new log entry
 */
export const createLog = async (req, res) => {
  try {
    const { message, level = "info", meta = {} } = req.body;
    const log = await Log.create({ message, level, meta });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Get the most recent logs
 */
export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 }).limit(5);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};