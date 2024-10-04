import mongoose from "mongoose";

const EmployeeScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true
    },
    dob: {
        type: String,
    },
    doj: {
        type: String
    },
}, { timestamps: true });

export const EmployeeModel = mongoose.model('Employee', EmployeeScheme);