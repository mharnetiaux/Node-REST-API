import mongoose from 'mongoose';
import {Schema} from 'mongoose';


const ItemSchema = new Schema(
    {
        item: { type: String, required: true },
    },
    {
        versionKey: false
    }
);

export default mongoose.model('item', ItemSchema);