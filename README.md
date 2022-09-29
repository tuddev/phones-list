# Contacts list

## О проекте

Contacts List - это реализация списка контактов с поиском по имени, номеру телефона и email. В проекте есть возможности редактирования и удаления контактов, а так же реализованы регистрация и вход пользователей. Все контакты и данные пользователей при дев-разработке хранятся в `json-server` локально. 

## Сделано с использованием 

- Node v16.16.0
- TypeScript
- React & React Hooks
- MobX
- MUI

## Getting started

### Скачивание репозитория

`git clone https://github.com/tuddev/phones-list.git`

### Установка зависимостей

`yarn`

### Запуск проекта 

1 Вариант:
  - В первой консли `yarn start` - запуск проекта
  - Во второй консли `yarn start-json-server` - запуск `json-server`

2 Вариант:
  - `yarn dev` - запускается пакет `concurrently`, который запускает `json-server` и проект одновременно

## Детали реализации

`Contacts List` - обычное SPA, состоящее из трех страниц. Список контактов защищен через `ProtectedRoute` и доступен только после авторизации. 

Контакты хранятся в `json-server` в поле `contacts`.

Пользователи хранятся в `json-server` в поле `users`.

Данные внутри приложения хранятся в MobX сторах.

Также в проекте есть сервисы - это просто core-логика. В них происходят запросы и управление данными в `localStorage`.

Логика http-клиента(прослойка между сервисами и запросами axios) реализована в классе `HttpClient`.
В нем явно указана ссылка на адрес backend-сервера. Пока это только `localhost`. При развертывании на удаленных серверах нужно будет использовать `env` файл, в котором указать `url` для разных окружений.

## Что можно улучшить

- добавить алерты на основные действия с конктами;