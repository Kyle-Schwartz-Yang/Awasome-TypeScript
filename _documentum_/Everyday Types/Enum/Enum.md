# Enum (перечисление)

> `Enum` (перечисление) в TypeScript - это способ определить набор именованных констант.

### Числовой enum ( Автоматичская нумерация значений )

> Стандартный

```ts
enum eDirections {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}
```

### Строковой enum

```ts
enum eDirections {
  TOP = "TOP SIDE",
  RIGHT = "RIGHT SIDE",
  BOTTOM = "BOTTOM SIDE",
  LEFT = "LEFT SIDE",
}
```

### Числовой enum (установленные значения)

```ts
enum eDirections {
  TOP = 33,
  RIGHT = 20,
  BOTTOM = 10,
  LEFT = 2,
}

// Т!льки числов! можуть мати додатков! операц!:

enum eExample {
  TOP = 10,
  RIGHT = TOP * 2,
  BOTTOM = LEFT * 2,
  LEFT = 20,
}
```

### Гетерогенні енумерації (heterogeneous enums)

> Компинация строковых и числовых значений. Але ёх використання насправд! **це погана практика**

```ts
enum eDirections {
  TOP = 1,
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM",
  LEFT = 2,
}
```

# Ускорение Enum

> Вариант позволяющий ускорить немного работу enum

- Лучше компилируются и поэтому выстрее работает
- Однако есть серьезные минусы (которые приводят к багам)
- Поэтому самые популярными остаются `Стандартный`

```ts
const enum eDirections {
  TOP = "TOP SIDE",
  RIGHT = "RIGHT SIDE",
  BOTTOM = "BOTTOM SIDE",
  LEFT = "LEFT SIDE",
}
```
