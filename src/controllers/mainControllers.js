const renderTemplate = require('../lib/renderTemplete');
const Main = require('../views/Main');

const renderMain = (req, res) => {
  renderTemplate(Main, {  }, res);
};

module.exports = { renderMain };
