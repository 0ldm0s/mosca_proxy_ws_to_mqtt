var mosca = require('mosca');

var ascoltatore = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: 'your cloudamqp server',
  port: 1883,
  clientId: 'momo',
  username: 'your username',
  password: 'your password',
  clean: false,
};

var settings = {
  port: 1883,
  backend: ascoltatore,
  http: {
    port: 8083,
    bundle: true,
    static: './',
  },
};

var server = new mosca.Server(settings);

server.on('clientConnected', function (client) {
  console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function (packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
