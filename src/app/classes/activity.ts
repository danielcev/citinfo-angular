import { Direction } from './direction';

export enum AcType{
    museum = 0,
    tour,
    trip,
    touristicBus
}

export class Activity{
    id: number;
    name:string;
    description:string;
    image:string;
    price:string;
    city:string;
    url:string;
    direction:Direction;
    type: AcType;

    constructor(id: number, name: string, description: string, image:string, price:string, city:string, url:string, direction: Direction, type: AcType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.city = city;
        this.url = url;
        this.direction = direction;
        this.type = type;
    }
}