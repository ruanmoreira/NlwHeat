import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle (request: Request , response: Response) {
        const { message } = request.body;

    }
}

export { AuthenticateUserController }