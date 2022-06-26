const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let apiUrl = "https://cat-fact.herokuapp.com/facts";

  const catFacts = await EleventyFetch(apiUrl, {
    duration: "1d", // save catFacts for a day; if built before day passes, grab cached cat facts
    type: "json"    // make catFacts retrieved from API available as data in json format
  });

  return catFacts

};