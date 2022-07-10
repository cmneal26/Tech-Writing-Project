const Image = require("@11ty/eleventy-img");

module.exports.data = async function() {
  return {
    permalink: "/style.css"
  };
};

module.exports.render = async function () {
  let stats = await Image(["mongoose.jpeg", "snake.jpeg"], {
    formats: ["jpeg"],
    widths: [50],
  });



  const mongooseClass = `.mongoose {
    background-image: url(${stats.jpeg[0].url});
  }`

  const snakeClass = `.snake {
    background-image: url(${stats.jpeg[1].url});
  }`

  const kidSpecificStyles =  `${snakeClass}\n\n${mongooseClass}`;  

  return kidSpecificStyles
};