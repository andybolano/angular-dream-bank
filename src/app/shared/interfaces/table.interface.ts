export interface ITable {
  title: string;
  data: string;
  align? : Align;
  pipe? : string;
  event? : EventClick;
}


export enum Align {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum EventClick {
  REDIRECT = 'redirect',
  UPDATE = 'update',
  DELETE = 'delete'
}

export enum Pipe {
    DATE = 'date',
    CURRENCY = 'currency',
    STATUS = 'status'
}
