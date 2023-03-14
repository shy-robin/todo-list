import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  },
})
class User {
  @prop({
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 10,
  })
  username!: string

  @prop({
    required: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%*.?&]{8,20}$/,
  })
  password!: string

  @prop({
    required: true,
    match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  })
  email!: string
}

export default getModelForClass(User)
