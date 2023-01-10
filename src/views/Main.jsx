const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout >
      <script defer src="/js/client.js" />
      <h1>
        Hello World
      </h1>

    </Layout>
  );
};
