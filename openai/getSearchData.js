import { openai } from "../index.js";

export const getDataFromSearch = async (query) => {
  try {
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
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getImageFromSearch = async (query) => {
  try {
    const { data } = await openai.createImage({
      prompt: query,
      n: 2,
      size: "512x512",
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
