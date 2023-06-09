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
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    create(createPatientDto: CreatePatientDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    createplandate(plandate: CreatePatientDto): Promise<any>;
    deleteplandate(value: any): Promise<any>;
    addMeal(value: any): Promise<any>;
    addGuide(value: any): Promise<any>;
    deletelan(value: any): Promise<any>;
    deleteguide(value: any): Promise<any>;
    updateplan(value: any): Promise<any>;
    updateGuide(value: any): Promise<any>;
    addpatient(value: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updatestatus(value: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    remove(id: string): void;
}
