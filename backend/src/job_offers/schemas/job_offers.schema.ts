import * as mongoose from 'mongoose';

export const JobOfferSchema = new mongoose.Schema({
    title: String,
    seniority: String,
    status: String,
    localtion: String,
    workScheduleType: String,
    openSince: Date,
    details: String,
});