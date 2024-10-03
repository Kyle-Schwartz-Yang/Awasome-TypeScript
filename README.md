# Awesome TypeScript

**[TypeScript](https://www.typescriptlang.org/) — это язык программирования, разработанный Microsoft**

- 🚩 Статическая типизация:💡 Позволяет задавать типы переменных, что помогает избежать ошибок во время выполнения.
- 🚩 Обратная совместимость с JavaScript:🚀 Любой валидный JavaScript-код является также валидным TypeScript-кодом.
- 🚩 Компиляция в JavaScript:↩️ TypeScript компилируется в чистый JavaScript.
- 🚩 Поддержка современных возможностей JavaScript.📜
- 🚩 Использование Angular и REACT 💨

<hr>
<!-- ------------------------------------------------------------- -->

## Установка 🔌

```bash
# Открыть список глобально установленных пакетов
npm list -g --depth=0 --json 💂🏻

# Or globally with TypeScript. 🔌
npm install -g typescript
npm install -g ts-node # Вспомогательный пакет ts-node

# Locally in your project. 🔌
npm install -D typescript
npm install -D ts-node # Вспомогательный пакет ts-node
```

<!-- ------------------------------------------------------------- -->

<hr>

## Основные команды

```bash

# Посмотреть все необходимые команды
tsc --help

# Cоздания шаблона конфигурации: tsconfig.json
tsc --init 🔌

# Включить компилятор (TS => JS)
tsc ${folder/file.ts}
tsc folder/index.ts
```

## Запустить код: 🎌

```bash

# (1) - Можно использовать плагин Code Runner
# (2) - Можно подключить js файл к .html

# (3) - Можно использовать для запуска node.js
tsc folder/index.ts
node folder/index.js
```

## Пакет ts-node 

```bash
# Запустить консоль в терминале (удобно)
ts-node

# Для быстрого просмотра (tsc folder/file.ts + node folder/file.js)
ts-node ${folder/file.ts}

```
