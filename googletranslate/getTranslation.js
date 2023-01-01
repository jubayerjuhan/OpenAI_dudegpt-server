import axios from "axios";

export const getTranslation = async (string) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", string);
  encodedParams.append("target", "bn");
  encodedParams.append("source", "en");

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f31dd70fb4mshb2781fdf89d320ap19f0a8jsnf1dc0aba9c9d",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function ({ data }) {
      console.log(data.data);
      return data.data.translations[0]?.translatedText;
    })
    .catch(function (error) {
      console.error(error);
    });
};
