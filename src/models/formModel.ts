import mongoose, { Document, Schema } from 'mongoose';

export interface IForm extends Document {
  name: string;
  email: string;
  message: string;
  phone:string;
  createdAt: Date;
}

const formSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IForm>('form', formSchema);
