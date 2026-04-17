import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { run } from "node:test";

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppError("JWT token não informado.", 401)
  }

  // Array desestruturado.
  const [, token] = authHeader.split(" ")

  console.log(token)

  return next()
}

export { ensureAuthenticated }