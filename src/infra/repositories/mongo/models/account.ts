import { model, Schema } from 'mongoose';
import { Account } from '../../../../domain/entities';

const accountSchema = new Schema<Account>({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profiles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Profile'
    }
  ]
});

const AccountModel = model<Account>('Account', accountSchema);

export default AccountModel;
