console.log("Start...");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const getResponse = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Make a blog outline about "fungal acne"`,
    suffix: "",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response, "response");
  response.data.choices?.map((choice) => {
    console.log(choice.text);
  });
};

getResponse();
