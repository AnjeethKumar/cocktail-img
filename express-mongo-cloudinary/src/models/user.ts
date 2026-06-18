import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    // Add any other relevant user information here
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Add any other relevant user fields here
}, {
    timestamps: true,
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;