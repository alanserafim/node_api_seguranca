const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require("jsonwebtoken")

class AuthService {

    async login(dto) {
        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })
        if (!usuario){
            throw new Error('Usuário não cadastrado')
        }
        const senhaIguais = await compare(dto.senha, usuario.senha)

        if(!senhaIguais){
            throw new Error("Usuário ou senha incorreta")
        }
        const accessToken = sign({
            id: usuario.id, 
            emai: usuario.email
        }, 
        process.env.SECRET_KEY, {
            expiresIn: 86400
        })
        return { accessToken }
    }

}

module.exports = AuthService