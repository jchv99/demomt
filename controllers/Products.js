const db = require('../config/db');

class Product{
    async getProducts(){
        let results = await db.query(`SELECT * FROM PRODUCTO;`).catch(console.log);
        return results.rows;
    }

    async getProductsOwned(id){
        let results = await db.query(`SELECT * FROM PRODUCTO WHERE ownerid = ${id};`).catch(console.log);
        return results.rows;
    }

    async newProduct(product){
        await db.query(`INSERT INTO PRODUCTO (name, price, ownerID) VALUES ('${product.name}', ${product.price}, ${product.ownerID});`).catch(console.log);

        return;
    }

    async getProductID(id){
        let result = await db.query(`SELECT * FROM PRODUCTO WHERE id = ${id};`)
        return result.rows;
    }

    async updateProduct(id, product){
        await db.query(`UPDATE PRODUCTO SET name = '${product.name}',
                                            price = ${product.price}
                                            WHERE id = ${id};`).catch(console.log);

        return;
    }

    async deleteProduct(id){
        await db.query(`DELETE FROM PRODUCTO WHERE id = ${id};`);
    }
}

module.exports = Product;