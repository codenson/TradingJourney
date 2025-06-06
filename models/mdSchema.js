// models/mdSchema.js
import mongoose from 'mongoose';

const sumMemSchema = new mongoose.Schema({
    name: String,
    memText: String,
    createdAt: { type: Date, default: Date.now }
});

const HistoricPropt = mongoose.model('HistoricPropt', sumMemSchema);

export default HistoricPropt;
