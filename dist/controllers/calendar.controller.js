"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = exports.CalendarController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
class CalendarController {
    constructor() { }
}
exports.CalendarController = CalendarController;
/* eslint-disable @typescript-eslint/naming-convention */
// Uncomment these imports to begin using these cool features!
// import { inject } from '@loopback/core';
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ApiController = class ApiController {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async create(event) {
        return this.eventRepository.create(event);
    }
    async find(filter) {
        return this.eventRepository.find(filter);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/api/calendar/create-event'),
    (0, rest_1.response)(200, {
        description: 'Event model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.appointments) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.appointments, {
                    title: 'NewEvent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/calendar/get-events'),
    (0, rest_1.response)(200, {
        description: 'Array of Event model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.appointments, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.appointments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiController.prototype, "find", null);
ApiController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AppointmentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AppointmentsRepository])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=calendar.controller.js.map