import axios from "axios";
/*
 receber code (string) OK
 recuperar o acess_token no github OK
 verificar se o usuario existe no db
  --- SIM = Gera um token
  --- NAO = Cria no db, gera um token
  retornar o token com as infos do user
*/

class AuthenticateUserService {
    async execute (code: string) {
        const url = "https://github.com/login/oauth/access_token"
        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code, 
            },
            headers: {
                "Accept": "application/json"
            }
        })
        return response.data;
    }

}

export { AuthenticateUserService }
