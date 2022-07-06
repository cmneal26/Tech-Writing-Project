const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let apiUrl = "https://random-d.uk/api/v2/random";

  const randomDuck = await EleventyFetch(apiUrl, {
    duration: "1d", // save randomDuck for a day; if built before day passes, grab cached cat facts
    type: "json", // make randomDuck retrieved from API available as data in json format
  });

  return randomDuck;
};
