const PlaceRepository = require('../repositories/place-repository');

// Metodos de crud do controller de lugares

exports.getAll = async (request, response, next) => {
    try {
        let places = await PlaceRepository.getAll();
        response.status(200).send(places);
    } catch (ex) {
        throwException(response, "Falha ao buscar lista de usuários", ex);
    }
}

/*exports.getByName = async (request, response, next) => {
    try {
        let user = await PlaceRepository.getByName(request.params.name);
        if (user) {
            response.status(200).send(user);
        } else {
            response.status(400).send(
                'Nenhum usuário com o nome "' + request.params.name + '" foi encontrado!'
            );
        }
    } catch (ex) {
        throwException(response, "Falha ao buscar usuário por nome", ex);
    }
}*/

exports.create = async (request, response, next) => {
    try {
        request.body.password = md5(request.body.password + global.ENCRYPT_KEY);
        await PlaceRepository.create(request.body);
        response.status(200).send("Local cadastrado com sucesso!");
    } catch (ex) {
        throwException(response, "Falha ao cadastrar local", ex);
    }
}
/*
exports.update = async (request, response, next) => {
    try {
        await PlaceRepository.update(request.params.id, request.body);
        response.status(200).send({
            message: "Usuario atualizado com sucesso!",
        });
    } catch (ex) {
        throwException(response, "Falha ao atualizar usuário", ex);
    }
}

exports.delete = async (request, response, next) => {
    try {
        await PlaceRepository.delete(request.params.id);
        response.status(200).send({
            message: "Usuário deletado com sucesso!",
        });
    } catch (ex) {
        throwException(response, "Falha ao deletar usuário", ex);
    }
}
*/
exports.getPlace = async (request, response, next) => {
    try {
        let token = request.params.token;
        let data = await authService.decodeToken(token);

        response.status(200).send(data)

    } catch (ex) {
        throwException(response, "Falha ao buscar lugar pelo token", ex);
    }
}

/**
 * Recebe o objeto response, uma messagem de erro e a exceção gerada e devolve uma messagem 
 * de erro completa para o usuário.
 * 
 * @response : objeto response da requisição, usado para retornar a messagem para o usuário
 * @message : messagem de erro que será enviada para o usuário
 * @exception : exceção gerada pela tentativa de uso do banco
 */

throwException = (response, message, exception) => {
    response.status(500).send({
        message: message,
        error: {
            message: exception.message,
            type: exception.name
        }
    })
}