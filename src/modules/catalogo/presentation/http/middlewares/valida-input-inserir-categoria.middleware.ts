import { HttpErrors } from "@shared/presentation/http/http.error";
import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Esquema de validação com Zod
const inserirCategoriaSchema = z.object({
  nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres.").max(50, "O nome deve ter no máximo 50 caracteres.")
}).strict();

// Middleware de validação
const validaInputInserirCategoriaMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // Faz o parse do corpo da requisição
    inserirCategoriaSchema.parse(request.body);
    next();
  } catch (error) {
    // Verifica se o erro é do tipo ZodError
    if (error instanceof ZodError) {
      const validationError = fromZodError(error, {
        prefix: "Erro de Validação:",
        issueSeparator: " | "
      });
      return next(new HttpErrors.BadRequestError({ message: validationError.message }));
    }

    // Se não for um erro do Zod, passa para o próximo middleware
    next(error);
  }
};

export { validaInputInserirCategoriaMiddleware as validaInputInserirCategoria };
