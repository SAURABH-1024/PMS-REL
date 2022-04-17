export declare class CalendarController {
    constructor();
}
import { Filter } from '@loopback/repository';
import { appointments } from '../models';
import { AppointmentsRepository } from '../repositories';
export declare class ApiController {
    eventRepository: AppointmentsRepository;
    constructor(eventRepository: AppointmentsRepository);
    create(event: Omit<appointments, 'id'>): Promise<appointments>;
    find(filter?: Filter<appointments>): Promise<appointments[]>;
}
