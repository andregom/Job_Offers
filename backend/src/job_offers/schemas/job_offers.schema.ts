import * as mongoose from 'mongoose';
import { IJobOffer } from "../../../../shared/interafces/job_offers";
import { seniority } from "../../../../shared/interafces/seniority_levels";
import { SeniorityValues } from "../../../../shared/interafces/enums/seniority_values";
import { WorkScheduleType, workScheduleType } from "../../../../shared/interafces/work_schedule_type";
import { Status, status } from "../../../../shared/interafces/status";

interface IJobOfferBackend 
    extends IJobOffer, mongoose.Document {
        id: string
}

export const JobOfferSchema = new mongoose.Schema({
    id: String,
    imgLogo: {
        fieldname: String,
        originalname: String,
        encoding: String,
        mimetype: String,
        buffer: { type: String, data: [Array] },
        size: Number,
        required: false
    },
    enterprise: { type: String, required: true },
    position: { type: String, required: true },
    seniority: { type: String, enum: SeniorityValues, required: true },
    status: { type: String, required: true },
    localtion: { type: String, required: true },
    workScheduleType: { type: String, required: true },
    openSince: { type: Date, required: true },
    details: { type: String, required: false },
});

export const JobOffer: mongoose.Model<IJobOfferBackend> = mongoose.model('JobOffer', JobOfferSchema);