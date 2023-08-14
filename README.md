# Добрый день!!!
## Представляю вашему вниманию инструкцию по запуску этого проекта

1. Зайдите в консоль и введите вот эту команду.
```docker run -d --hostname my-rabbit  --name some-rabbit -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3-management```
2. Установите все необходимые зависимости. 
```npm install```
3. Запустите первый сервер. 
```node .\server1.js```
4. Запустите второй сервер. 
```node .\server2.js```
5. Откройте в браузере страницу и наслаждайтесь результатом. 
```[Ccskrf](http://localhost:3008/) ```