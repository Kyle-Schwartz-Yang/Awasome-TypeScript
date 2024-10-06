
# type Aliases 

- Теперь есть возможность сохранить перебор union в переменную 
- Это и будет называтся `type aliases`

```typescript
  type Status = "success" | "error" | "loading";

    function checkStatus(status: Status) {
      // status может быть только "success", "error", или "loading"
    }
```

