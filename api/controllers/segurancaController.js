const SegurancaService = require("../services/SegurancaService")
const segurancaService = new SegurancaService()

class SegurancaController {

    static async cadastrarAcl(req, res){
        const { roles, permissoes } = req.body
        const { usuarioId } = req
        try {
            const acl = await segurancaService.cadastrarAcl({ roles, permissoes, usuarioId})
            res.status(201).send(acl)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

}

module.exports = SegurancaController