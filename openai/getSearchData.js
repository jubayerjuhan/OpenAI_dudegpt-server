import { openai } from "../index.js";

export const getDataFromSearch = async (query) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${query}`,
    suffix: "",
    temperature: 0.7,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data?.choices[0].text;
};

export const getImageFromSearch = async (query) => {
  const { data } = await openai.createImage({
    prompt: query,
    n: 2,
    size: "512x512",
  });

  return data.data;
};
