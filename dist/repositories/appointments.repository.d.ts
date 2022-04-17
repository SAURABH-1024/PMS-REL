import { DefaultCrudRepository } from '@loopback/repository';
import { RandomDataSource } from '../datasources';
import { Appointments, AppointmentsRelations } from '../models';
export declare class AppointmentsRepository extends DefaultCrudRepository<Appointments, typeof Appointments.prototype.id, AppointmentsRelations> {
    constructor(dataSource: RandomDataSource);
}
