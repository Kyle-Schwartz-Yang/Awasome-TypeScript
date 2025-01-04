
# **Intersection:**  Оператор пересечения (&) 


> PS:📌 По сути конкатинация, не ? Скорее объединение свойств нескольких типов в один... используем для этого оператор (амперсанд)

```typescript
type Config = { protocol: "https" | "http", port: 3000 | 3001 };
type Role = { role: string };

/* Использования оператор пересечения 🧲 */
type ConfigWithRole = Config & Role; 

// ------------------------------------------------

// Можно ли сказать что это удивительно ? 
const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
}

// 
const backupConfig: Config = {
  protocol: "https",
  port: 3001,
}

```