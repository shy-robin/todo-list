import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

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

@modelOptions({
  schemaOptions: {
    collection: 'items',
    timestamps: true,
  },
})
class Item {
  @prop({
    required: true,
  })
  public title!: string

  @prop()
  public description?: string

  @prop()
  public content?: string

  @prop({
    // 需要指定数组元素的类型，否则无法校验数组的元素类型
    type: Number,
  })
  public tags?: number[]

  @prop({
    enum: ItemStatus,
    default: ItemStatus.UNDO,
  })
  public status?: ItemStatus

  @prop({
    enum: ItemPriority,
    default: ItemPriority.P3,
  })
  public priority?: ItemPriority

  @prop({
    required: true,
  })
  public authorId!: number
}

export default getModelForClass(Item)
