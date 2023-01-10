const renderTemplate = require('../lib/renderTemplete');
const AdminLogin = require('../views/AdminLogin');

const renderAdminLogin = (req, res) => {
  renderTemplate(AdminLogin, {}, res);
};

module.exports = { renderAdminLogin };
