import mongoose from "mongoose";
const Schema = mongoose.Schema;

const codeSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Code = mongoose.model('code', codeSchema);

export default Code;