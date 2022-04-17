import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RandomDataSource} from '../datasources';
import {appointments, appointmentsRelations} from '../models';

export class appointmentsRepository extends DefaultCrudRepository<
  appointments,
  typeof appointments.prototype.id,
  appointmentsRelations
> {
  constructor(
    @inject('datasources.random') dataSource: RandomDataSource,
  ) {
    super(appointments, dataSource);
  }
}
