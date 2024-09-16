'use strict';

const { MQTTClient } = require('node-mqtt-client');

/**
 * Class representing a Logger that utilizes MQTT for logging messages.
 */
class Logger {
    static #MQTTClient = null;
    static #instance = null;
    static suffix = 'logs';

    /**
     * Create a Logger object. Private to prevent direct instantiation.
     * @throws {Error} If an attempt is made to create multiple instances.
     */
    constructor() {
        if (Logger.#instance instanceof Logger)
            throw new Error('Cannot create multiple instances of Logger.');
    }

    /**
     * Initialize the Logger with an MQTT client.
     * @param {MQTTClient} MQTTClient - The MQTT client to use for logging.
     * @returns {Logger} The singleton instance of the Logger.
     * @throws {Error} If the MQTTClient does not have a publish method.
     */
    static initialize(MQTTClient) {
        if (false === (mqttClient instanceof MQTTClient))
            throw new Error('The mqttClient parameter must be an instance of MQTTClient.');
        if (this.#instance instanceof Logger) return this.#instance;
        if (typeof MQTTClient.publish !== 'function')
            throw new Error('The instance of MQTTClient does not have a public method to publish messages.');

        this.#instance = new Logger();
        this.#MQTTClient = MQTTClient;

        console.log('Logger initialized.');
        return this.#instance;
    }

    /**
     * Log a message using the MQTT client.
     * @param {string} message - The message to log.
     * @param {string} topic - The MQTT topic suffix to publish to (optional).
     */
    static log(message, topic = '') {
        if (false === (this.#instance instanceof Logger)) {
            console.error('Logger not initialized.');
            return;
        } else {
            const logMessage = `[${new Date().toISOString()}] ${message}`;
            this.#MQTTClient.publish(this.suffix + topic, logMessage);
        }
    }
}

module.exports = {
    Logger,
    MQTTClient
};
