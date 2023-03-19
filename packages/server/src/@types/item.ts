export enum ItemStatus {
  UNDO = 0,
  DOING = 1,
  DONE = 2,
}

export enum ItemPriority {
  P0 = 0,
  P1 = 1,
  P2 = 2,
  P3 = 3,
}

export interface CreateItemRequest {
  title: string
  description?: string
  content?: string
  tags?: number[]
  status?: ItemStatus
  priority?: ItemPriority
}
