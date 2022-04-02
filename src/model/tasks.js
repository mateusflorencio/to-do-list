import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: {
        name: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    checkList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CheckList",
        required: true
    }
});

export default mongoose.model("Task", taskSchema);