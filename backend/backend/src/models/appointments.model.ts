import {Entity, model, property} from '@loopback/repository';

@model()
export class appointments extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'string',
    required: true,
  })
  illness: string;

  @property({
    type: 'string',
    required: true,
  })
  treatment: string;

  @property({
    type: 'date',
    required: true,
  })
  start: string;

  @property({
    type: 'date',
    required: true,
  })
  end: string;


  constructor(data?: Partial<appointments>) {
    super(data);
  }
}

export interface appointmentsRelations {
  // describe navigational properties here
}

export type appointmentsWithRelations = appointments & appointmentsRelations;
