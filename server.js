const nxb = require("node-xmpp-bosh");
const PORT = process.env.PORT || 5280;

const server_options = {
  port: PORT,
  host: '0.0.0.0',
  path: '/http-bind/',
  logging: 'INFO'
};

const bosh_server = nxb.start_bosh(server_options);

console.info("Server running on port " + PORT);
