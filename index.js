import {
  getDataFromSearch,
  getImageFromSearch,
} from "./openai/getSearchData.js";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
import { Configuration, OpenAIApi } from "openai";
import { getTranslation } from "./googletranslate/getTranslation.js";

app.use(cors());

// open ai api configuration
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
export const openai = new OpenAIApi(configuration);

app.post("/search", async (req, res, next) => {
  const result = await getDataFromSearch(req.query.q);
  const translated = await getTranslation(result);
  res.status(200).json({
    result: result,
    success: true,
    translated: translated,
  });
});
app.post("/searchimage", async (req, res, next) => {
  const result = await getImageFromSearch(req.query.q);
  res.status(200).json({
    images: result,
    success: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App Listening On Port ${process.env.PORT}`);
});
