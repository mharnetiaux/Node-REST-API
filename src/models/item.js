import mongoose, {Schema} from 'mongoose';


const ItemSchema = new Schema(
    {
        item: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false
    }
);

ItemSchema.pre('save', next => {
    let now = new Date();
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export default mongoose.model('item', ItemSchema);