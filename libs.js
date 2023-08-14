const amqplib = require("amqplib");

class RabbitMq {
    connect = null;

    async init() {
        if (!this.conn) {
            this.conn = await amqplib.connect("amqp://user:password@localhost");
        }
    }

    async sendMessages(messageName, messages) {
        console.log(`Сообщение ${messageName} отправлено`);
        const ch = await this.conn.createChannel();

        await ch.assertQueue(messageName);
        ch.sendToQueue(messageName, Buffer.from(messages));

        await ch.close();
    }

    async onMessagesHandler(messageName, callback) {
        console.log(`Поставлен обработчик на сообщение ${messageName}`);
        const ch = await this.conn.createChannel();
        await ch.assertQueue(messageName);

        ch.consume(messageName, async(msg) => {
            ch.ack(msg);
            callback(msg);
        });
    }

    async getMessages(messageName) {
        console.log(`Ожидание сообщения ${messageName}`);
        const ch = await this.conn.createChannel();
        await ch.assertQueue(messageName);

        const messages = await new Promise((resolve) => {
            ch.consume(messageName, (msg) => {
                ch.ack(msg);
                resolve(msg)
            })
        })

        ch.close()

        return messages
    }

    async closeConnections() {
        this.conn.close()
    }
}

exports.RabbitMq = RabbitMq;