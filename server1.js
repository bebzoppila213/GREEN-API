const libs = require("./libs")
const express = require('express')
const app = express()
const port = 3008



app.get('/', async(req, res) => {
    console.log("Пришёл запрос");
    const rabbit = new libs.RabbitMq()
    await rabbit.init()

    rabbit.sendMessages("task", JSON.stringify({ value1: 5, value2: 10 }))
    const msg = await rabbit.getMessages("result")
    const result = JSON.parse(msg.content.toString())

    console.log(`Отправка результата клиенту`);
    res.send(`Результат ${result['result']}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})