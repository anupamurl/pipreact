"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientProviders = void 0;
const patient_schema_1 = require("./schemas/patient.schema");
exports.patientProviders = [
    {
        provide: 'PATIENT_MODEL',
        useFactory: (mongoose) => mongoose.model('Patient', patient_schema_1.PatientSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=patient.providers.js.map