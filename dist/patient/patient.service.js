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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let PatientService = class PatientService {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }
    create(createPatientDto) {
        const createdCat = this.patientModel.create(createPatientDto);
        return createdCat;
    }
    findAll() {
        return this.patientModel.find().exec();
    }
    async addplandate(plandate) {
        let id = plandate.id;
        let plandateval = plandate.plandate;
        return await this.patientModel.findByIdAndUpdate(id, { $push: { plandate: plandateval } }, { new: true }).exec();
    }
    async addMeal(id, mealplan, plandate) {
        return await this.patientModel.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$push": { 'plandate.$.mealplan': mealplan } }, { new: true }).exec();
    }
    async addGuideLine(id, guideline, plandate) {
        return await this.patientModel.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$push": { 'plandate.$.guideline': { guidehtml: guideline } } }, { new: true }).exec();
    }
    async deleteMeal(pid, itemId, plandate) {
        return await this.patientModel.findOneAndUpdate({ _id: pid, 'plandate._id': plandate }, { $pull: { 'plandate.$.mealplan': { _id: itemId } } }, { new: true }).exec();
    }
    async deleteGuide(pid, itemId, plandate) {
        return await this.patientModel.findOneAndUpdate({ _id: pid, 'plandate._id': plandate }, { $pull: { 'plandate.$.guideline': { _id: itemId } } }, { new: true }).exec();
    }
    async updateMeal(id, guideline, plandate, updateGuideID, type, time, mealhtml) {
        return await this.patientModel.findOneAndUpdate({ _id: id, "plandate._id": plandate }, {
            "$set": {
                'plandate.$.mealplan.$[outer].mealhtml': mealhtml,
                'plandate.$.mealplan.$[outer].time': time,
                'plandate.$.mealplan.$[outer].type': type,
            }
        }, {
            arrayFilters: [
                { "outer._id": updateGuideID }
            ],
            new: true
        }).exec();
    }
    async updateGuide(id, guideline, plandate, updateGuideID) {
        console.log("==");
        console.log(id, guideline, plandate, updateGuideID);
        return await this.patientModel.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$set": { 'plandate.$.guideline.$[outer].guidehtml': guideline } }, {
            arrayFilters: [
                { "outer._id": updateGuideID }
            ],
            new: true,
        }).exec();
    }
    async addPatient(obj) {
        return await this.patientModel.create(obj);
    }
    async updateStatus(obj) {
        return await this.patientModel.findOneAndUpdate({ _id: obj.id, "plandate._id": obj.did }, { $set: { "plandate.$.public": obj.status } }, { new: true }).exec();
    }
    removedeletediteplan(pid, plandate) {
        return this.patientModel.findOneAndUpdate({ _id: pid }, { $pull: { plandate: { _id: plandate } } }, { new: true }).exec();
    }
};
PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PATIENT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map