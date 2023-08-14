const libs = require("./libs");

async function main() {
    console.log(`Инициализация сервера 2`);
    const rabbit = new libs.RabbitMq()
    await rabbit.init()

    rabbit.onMessagesHandler("task", (msg) => {
        const data = JSON.parse(msg.content.toString())
        rabbit.sendMessages("result", JSON.stringify({ result: data['value1'] + data['value2'] }))
    })
}

main();