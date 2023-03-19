import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { Types } from 'mongoose'
import { ItemStatus, ItemPriority } from '../@types/item'

@modelOptions({
  schemaOptions: {
    collection: 'items',
    timestamps: true,
  },
})
export class Item {
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
    index: true,
  })
  public authorId!: Types.ObjectId
}

export default getModelForClass(Item)
