"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientSchema = void 0;
const mongoose = require("mongoose");
const mealplan = new mongoose.Schema({
    mealhtml: String,
    time: String,
    type: String
}, { timestamps: true });
const guideline = new mongoose.Schema({
    guidehtml: String,
}, { timestamps: true });
const plandate = new mongoose.Schema({
    start: Date,
    end: Date,
    public: Boolean,
    mealplan: [mealplan],
    guideline: [guideline],
});
exports.PatientSchema = new mongoose.Schema({
    age: Number,
    complaints: String,
    email: String,
    height: Number,
    name: String,
    phone: String,
    weight: Number,
    plandate: [plandate]
}, { timestamps: true });
//# sourceMappingURL=patient.schema.js.map