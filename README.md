
# Node MQTT Logger

This is a lightweight and efficient logger designed for Node.js applications, utilizing MQTT to provide centralized log management. It's particularly suitable for distributed systems where traceability and log persistence are crucial. The logger ensures easy integration with any MQTT client and offers a straightforward interface for initializing the logger and logging messages.

## Features

- **Centralized Logging:** Utilizes MQTT for log management, enabling centralized storage and analysis.
- **Easy Integration:** Compatible with any standard MQTT client.
- **Scalable:** Designed to handle high throughput and large volumes of log data efficiently.
- **Singleton Pattern:** Prevents multiple instances to ensure consistent logging throughout the application.

## Installation

Install the package via npm:

```bash
npm install node-log-mqtt
```

## Usage

Here is a quick guide on how to use the Node MQTT Logger in your project:

### Importing

First, import the package into your Node.js application:

```javascript
const { Logger, MQTTClient } = require('node-log-mqtt');
```

### Configuring the MQTT Client

Create and configure the MQTT client as follows:

```javascript
const mqttClient = new MQTTClient();
mqttClient.host = 'mqtt.fabris.io';
mqttClient.port = 8883;
mqttClient.protocol = MQTTClient.Protocol.MQTTS;
mqttClient.certificateManager.loadCertificates(
  'authority.pem',
  'certificate.pem',
  'key.pem'
);
mqttClient.connect();
```

### Initializing the Logger

Initialize the logger with the configured MQTT client:

```javascript
Logger.initialize(mqttClient);
```

### Logging Messages

To log messages, simply call the `log` method:

```javascript
Logger.log('This is a test message', '/debug');
```

The logger will prepend a timestamp to your message and publish it to the MQTT topic specified.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ubyte-source/node-log-mqtt/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [ubyte.it](https://ubyte.it/)

See also the list of [contributors](https://github.com/ubyte-source/node-log-mqtt/blob/main/CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ubyte-source/node-log-mqtt/blob/main/LICENSE) file for details.
