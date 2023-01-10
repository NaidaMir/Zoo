const renderTemplate = require('../lib/renderTemplete');
const Animals = require('../views/Animals');

const renderAnimals = (req, res) => {
  renderTemplate(Animals, {}, res);
};

module.exports = { renderAnimals };
