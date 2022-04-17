import { Entity } from '@loopback/repository';
export declare class appointments extends Entity {
    id?: number;
    title: string;
    description: string;
    age: number;
    illness: string;
    treatment: string;
    start: string;
    end: string;
    [prop: string]: any;
    constructor(data?: Partial<appointments>);
}
export interface appointmentsRelations {
}
export declare type appointmentsWithRelations = appointments & appointmentsRelations;
