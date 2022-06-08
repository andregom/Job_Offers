import * as mongoose from 'mongoose';
import { IJobOffer } from "../../../../shared/interafces/job_offers/job_offers";

const SENIORITY_POSSIBLE_VALUES = [
    "Júnior", "Pleno", "Sênior", "Operacional", "Técnico", "Trainee", "Especialista", "Estagiário", "Outro"
] as const;

const WORK_SCHEDULE_POSSIBLE_VALUES = [
    'Full-Time', 'Part-Time', 'Flexible', 'Flexible Hours', 'Other',
] as const;

const STATUS_POSSIBLE_VALUES = [
    'Open', 'Closed', 'Paused'
] as const;

interface IJobOfferBackend
    extends IJobOffer, mongoose.Document {
    id: string
}

export const JobOfferSchema = new mongoose.Schema({
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
    seniority: { type: String, enum: SENIORITY_POSSIBLE_VALUES, required: true, default: SENIORITY_POSSIBLE_VALUES[0] },
    status: { type: String, enum: STATUS_POSSIBLE_VALUES, required: true, default: STATUS_POSSIBLE_VALUES[0] },
    localtion: { type: String, required: true },
    workScheduleType: { type: String, enum: WORK_SCHEDULE_POSSIBLE_VALUES, required: true, default: WORK_SCHEDULE_POSSIBLE_VALUES[0] },
    openSince: { type: Date, required: true },
    details: { type: String, required: false },
});

export const JobOffer: mongoose.Model<IJobOfferBackend> = mongoose.model('JobOffer', JobOfferSchema);