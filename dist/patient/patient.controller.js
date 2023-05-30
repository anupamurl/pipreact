"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const create_patient_dto_1 = require("./dto/create-patient.dto");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    create(createPatientDto) {
        return this.patientService.create(createPatientDto);
    }
    async createplandate(plandate) {
        let data = await this.patientService.addplandate(plandate);
        return data['plandate'];
    }
    async deleteplandate(value) {
        var pid = value.id;
        var plandate = value.pid;
        let data = await this.patientService.removedeletediteplan(pid, plandate);
        return data['plandate'];
    }
    async addMeal(value) {
        let id = value.id;
        let mealplan = value.mealplan;
        let plandate = value.plandate;
        let data = await this.patientService.addMeal(id, mealplan, plandate);
        var d = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return d;
    }
    async addGuide(value) {
        let id = value.id;
        let guideline = value.guideline;
        let plandate = value.plandate;
        let data = await this.patientService.addGuideLine(id, guideline, plandate);
        console.log(data);
        var finalData = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return finalData;
    }
    async deletelan(value) {
        let pid = value.pid;
        let itemId = value.itemId;
        let plandate = value.plandate;
        let data = await this.patientService.deleteMeal(pid, itemId, plandate);
        console.log(data);
        var finalData = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return finalData;
    }
    async deleteguide(value) {
        let pid = value.pid;
        let itemId = value.itemId;
        let plandate = value.plandate;
        let data = await this.patientService.deleteGuide(pid, itemId, plandate);
        var finalData = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return finalData;
    }
    async updateplan(value) {
        let id = value.pid;
        let guideline = value.guideline;
        let plandate = value.plandate;
        let updateGuideID = value._id;
        let type = value.type;
        let time = value.time;
        let mealhtml = value.mealhtml;
        let data = await this.patientService.updateMeal(id, guideline, plandate, updateGuideID, type, time, mealhtml);
        var finalData = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return finalData;
    }
    async updateGuide(value) {
        let id = value.id;
        let guideline = value.guideline;
        let plandate = value.plandate;
        let updateGuideID = value.updateGuideID;
        console.log(value);
        console.log(id, guideline, plandate, updateGuideID);
        let data = await this.patientService.updateGuide(id, guideline, plandate, updateGuideID);
        console.log(data);
        var finalData = data['plandate'].find(node => {
            return node._id == plandate;
        });
        return finalData;
    }
    async addpatient(value) {
        let patientData = {
            name: value.name,
            email: value.email,
            complaints: value.complaints,
            age: value.age,
            height: value.height,
            phone: value.phone,
            weight: value.weight
        };
        let data = await this.patientService.addPatient(patientData);
        return data;
    }
    async updatestatus(value) {
        let patientData = {
            "id": value.id,
            "did": value.did,
            "status": value.status
        };
        let data = await this.patientService.updateStatus(patientData);
        return data;
    }
    findAll() {
        return this.patientService.findAll();
    }
    remove(id) {
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/addplandate"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "createplandate", null);
__decorate([
    (0, common_1.Post)("/deleteplandate"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deleteplandate", null);
__decorate([
    (0, common_1.Post)("/addMeal"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "addMeal", null);
__decorate([
    (0, common_1.Post)("/addguideline"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "addGuide", null);
__decorate([
    (0, common_1.Post)("/deletelan"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deletelan", null);
__decorate([
    (0, common_1.Post)("/deleteguide"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deleteguide", null);
__decorate([
    (0, common_1.Post)("/updateplan"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updateplan", null);
__decorate([
    (0, common_1.Post)("/updateGuide"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updateGuide", null);
__decorate([
    (0, common_1.Post)("/addpatient"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "addpatient", null);
__decorate([
    (0, common_1.Post)("/updatestatus"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatestatus", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "remove", null);
PatientController = __decorate([
    (0, common_1.Controller)('patient'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
exports.PatientController = PatientController;
//# sourceMappingURL=patient.controller.js.map