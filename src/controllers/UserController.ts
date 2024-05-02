import { Request, Response } from "express";
import Queue from "../lib/Queue";

async function store(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password
  }

  // Add RegistrationMail job to queue
  await Queue.add("RegistrationMail", { user });

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Usuário criado com sucesso!",
    data: user,
  });
}

export default {
  store,
};
