// =============================================================================

/* 
:Интерфейсы 
*/

// =============================================================================

interface Rect {
  readonly id: string
  color?: string
  size: {
    width:number
    height: number
  }
}

const react1: Rect = {
  id: '1234',
  size: {
    width:22,
    height: 33
  }
}

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =============================================================================

/* 
:Наследования интерфейса 
*/

// =============================================================================

interface ReactWithArea extends Rect {
  getArea: () => number
}

const react5: ReactWithArea = {
  id: '1234',
  size: {
    width:22,
    height: 33
  },
  getArea(): number {
    return this.size.width + this.size.height
  } 
}
// =============================================================================
/*
:Интерфасы для классов 
*/
// =============================================================================
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock{
  time: Date = new Date()
  setTime(date: Date): void {
      this.time = date
  }
}

// =============================================================================
/*
:Один тип для интерфейса 
*/
// =============================================================================


interface Style {
  [key: string]: string
}

const css: Style = {
  border: '1px solid red',
  margin: '2px',
  borderRadius: '5px',
}