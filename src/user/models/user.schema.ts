import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as S } from 'mongoose';

import { IUser } from './user.dto';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
  @Prop({ required: true })
  firstName: string;
  // @Prop({ required: true })
  middleName: string;
  // @Prop({ required: true })
  lastName: string;
  // @Prop({ required: true })
  phoneNo: string;
  mobileNo: string;
  // @Prop({ required: true, type: S.Types.ObjectId })
  employeeId: string;
  // @Prop({ required: true })
  loginAccess: boolean;
  roleMap: any[];
  // @Prop({ required: true, type: S.Types.ObjectId })
  _id: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);