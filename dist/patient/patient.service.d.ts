/// <reference types="node_modules/mongoose/types/aggregate" />
/// <reference types="node_modules/mongoose/types/callback" />
/// <reference types="node_modules/mongoose/types/collection" />
/// <reference types="node_modules/mongoose/types/connection" />
/// <reference types="node_modules/mongoose/types/cursor" />
/// <reference types="node_modules/mongoose/types/document" />
/// <reference types="node_modules/mongoose/types/error" />
/// <reference types="node_modules/mongoose/types/expressions" />
/// <reference types="node_modules/mongoose/types/helpers" />
/// <reference types="node_modules/mongoose/types/middlewares" />
/// <reference types="node_modules/mongoose/types/indexes" />
/// <reference types="node_modules/mongoose/types/models" />
/// <reference types="node_modules/mongoose/types/mongooseoptions" />
/// <reference types="node_modules/mongoose/types/pipelinestage" />
/// <reference types="node_modules/mongoose/types/populate" />
/// <reference types="node_modules/mongoose/types/query" />
/// <reference types="node_modules/mongoose/types/schemaoptions" />
/// <reference types="node_modules/mongoose/types/schematypes" />
/// <reference types="node_modules/mongoose/types/session" />
/// <reference types="node_modules/mongoose/types/types" />
/// <reference types="node_modules/mongoose/types/utility" />
/// <reference types="node_modules/mongoose/types/validation" />
/// <reference types="node_modules/mongoose/types/virtuals" />
/// <reference types="node_modules/mongoose/types" />
/// <reference types="node_modules/mongoose/types/inferschematype" />
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';
import { Model } from 'mongoose';
export declare class PatientService {
    private readonly patientModel;
    constructor(patientModel: Model<Patient>);
    create(createPatientDto: CreatePatientDto): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    addplandate(plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addMeal(id: any, mealplan: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addGuideLine(id: any, guideline: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteMeal(pid: any, itemId: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteGuide(pid: any, itemId: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateMeal(id: any, guideline: any, plandate: any, updateGuideID: any, type: any, time: any, mealhtml: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateGuide(id: any, guideline: any, plandate: any, updateGuideID: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addPatient(obj: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateStatus(obj: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    removedeletediteplan(pid: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
