const BaseController = require("./base.controller")
const qs = require("qs");
const url = require("url");
const DeleteModel=require('../models/delete.model')
class DeleteController {
    async deleteMovies(req,res){
        try{
            let id=qs.parse(url.parse(req.url).query).id
            await DeleteModel.disableKey()
            await DeleteModel.deleteMovies(id)
            await DeleteModel.enableKey()
            let html= await BaseController.getTemplate('./src/views/admin.html')
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(html);
            res.end()
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports =new DeleteController()