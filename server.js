const nxb = require("node-xmpp-bosh");
const PORT = process.env.PORT || 5280;

const server_options = {
  port: PORT,
  host: '0.0.0.0',
  path: '/http-bind/',
  logging: 'INFO'
};

const bosh_server = nxb.start_bosh(server_options);
const ws_server = nxb.start_websocket(bosh_server, server_options);

console.info("Server running on port " + PORT);

/*

const SocketServer = require('ws').Server;
const url = require('url');

const wss = new SocketServer({server});

wss.on('connection', function connection(ws) {
  console.info("connection");
  const location = url.parse(ws.upgradeReq.url, true); //???
});

package.json -
    "ws": "^2.3.1"

*/