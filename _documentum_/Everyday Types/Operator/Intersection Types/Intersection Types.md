
### Оператор пересечения (&) 

-  Так можна об'єднувати [[Type Aliases]] які в свою чергу били створенні за допомогою [[Type Union]]
-  Оператор _ampersand_(&) об'єднує декілька Type Aliases в один.

```typescript
type Config = { protocol: "https" | "http", port: 3000 | 3001 };
type Role = { role: string };

/* Использования оператор пересечения 🧲 */
type ConfigWithRole = Config & Role;  // **Intersection

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