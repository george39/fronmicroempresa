import { stringify } from 'querystring';

export class Ingresos {
    constructor(
        public id: string,
        public registros: any[]
    ) {}
}