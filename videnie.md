# Видение

## Информационная система мониторинга системы управления документами

Цель моей ВКР выполнить реальную производственную задачу. Нужно сделать свою систему мониторинга, в которой будут отображены графики, различные таблицы, поведение системы управления документами. Также нужно реализовать отправку уведомлений по запросам пользователей, например в случае большой заполненности на дисках файловых хранилищ, отправить сообщение на почту пользователя, или в случае какой-либо ошибки в системе, также направить уведомление пользователю. Сервер и backend на Node.js, СУБД Postgres, frontend пока HTML(в производственных условиях пока нет возможности написать на чем то другом интерфейс).

PS. На рабочем компьютере начал делать сервер и html, сбор данных в свою БД(возникла проблема со сбором данных из elasticsearch), изучаю как подлючить БД к своей системе. По сути я делаю подобие Grafana.(Закоммитить код пока не могу, нужно перенести все на свой пк)
