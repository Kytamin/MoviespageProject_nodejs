const BaseModel = require('./base.model');
class DeleteModel extends BaseModel{

    async deleteMovies(id){
        const sql=`DELETE FROM Movies where id=${id}`
        return await this.querySql(sql)
    }
    async disableKey(){
        const sql=`SET FOREIGN_KEY_CHECKS=0`
        return await  this.querySql(sql)
    }
    async enableKey(){
        const sql=`SET FOREIGN_KEY_CHECKS=1`
        return await this.querySql(sql)
    }

}
module.exports = new DeleteModel()