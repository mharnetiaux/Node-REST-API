import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    }
});

export default mongoose.model('Items', ItemSchema);