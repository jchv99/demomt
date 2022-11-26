const db = require('../config/db');

class Users{
    async register(userinfo){
        console.log(userinfo.email, userinfo.password);
    }

    async login(userinfo){
        let result = await db.query(`select exists(select 1 from USUARIO where username = ${userinfo.username} and password = ${userinfo.password};)`)
        return result.rows;
    }
}