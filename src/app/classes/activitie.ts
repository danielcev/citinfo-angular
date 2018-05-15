

export class Activitie{
    name:string;
    description:string;
    image:string;
    price:string;
    city:string;
    url:string;

    constructor(name: string, description: string, image:string, price:string, city:string, url:string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.city = city;
        this.url = url;
    }
}