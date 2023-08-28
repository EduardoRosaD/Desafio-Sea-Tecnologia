import { Request, Response } from "express";
import httpStatus from "http-status";
import { getAllFuncionariosService, createFuncionarioService } from "@/services";

export async function getAllFuncionarios(req: Request, res: Response): Promise<Response> {
  try {
    const funcionarios = await getAllFuncionariosService();
    return res.status(httpStatus.OK).json(funcionarios);
  }
  catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
}

export async function createFuncionario(req: Request, res: Response): Promise<Response> {
  const { name, cpf, EPIs, gender, birthDate, medicalCert, role, job, active, rg } = req.body;

  const funcionario = {
    name,
    cpf,
    rg,
    gender,
    birthDate,
    medicalCert,
    role,
    active,
  };
  console.log(funcionario)
  try {


    await createFuncionarioService(funcionario);
    return res.status(httpStatus.CREATED);
  }
  catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
}