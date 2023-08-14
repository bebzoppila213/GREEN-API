# Добрый день!!!
## Представляю вашему вниманию инструкцию по запуску этого проекта

###  Зайдите в консоль и введите вот эту команду.
```docker run -d --hostname my-rabbit  --name some-rabbit -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3-management```
### Установите все необходимые зависимости. 
```npm install```
### Запустите первый сервер. 
```node .\server1.js```
### Запустите второй сервер. 
```node .\server2.js```
### Откройте в браузере страницу и наслаждайтесь результатом. 
```[Ccskrf](http://localhost:3008/) ```