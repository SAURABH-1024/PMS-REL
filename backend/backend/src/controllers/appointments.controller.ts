// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {
  Filter,
  repository,
  Where
} from '@loopback/repository';

import {
  post,
  param,
  get,
  getModelSchemaRef,
  requestBody,
} from '@loopback/rest';
import {appointments} from '../models';
import {appointmentsRepository} from '../repositories';


export class AppointmentsController {
  constructor(
    @repository(appointmentsRepository)
    public eventRepository: appointmentsRepository,
  ) { }
  @post('/api/calendar/create-event', {
    responses: {
      '200': {
        description: 'Appointments model instance',
        content: {'application/json': {schema: getModelSchemaRef(appointments)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(appointments, {title: 'NewEvent', exclude: ['id']}),
        },
      },
    })
    event: Omit<appointments, 'id'>,
  ): Promise<appointments> {
    return this.eventRepository.create(event);
  }

  @get('/api/calendar/appointments', {
    responses: {
      '200': {
        description: 'Array of Event model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(appointments)},
          },
        },
      },
    },
  })
  async find(
    @param.filter(appointments)
    filter?: Filter<appointments>,
  ): Promise<appointments[]> {
    return this.eventRepository.find(filter);
  }
}
