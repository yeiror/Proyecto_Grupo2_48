const faker = require('faker');

class CateringService{

    constructor(){
        this.products=[];
        this.generate();
    }
    generate(){
    const products = [];
    
    const limit = 10;
    for (let index = 0; index < limit; index++) {
        this.products.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
        });
       
    }; 
}}
module.exports = CateringService;