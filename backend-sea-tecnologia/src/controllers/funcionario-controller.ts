import { Request, Response } from "express";
import httpStatus from "http-status";
import  { getAllFuncionariosService, createFuncionarioService} from "@/services";

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
    const { name, cpf, EPis, gender, birthDate, medicalCert, role, job, active, rg } = req.body;

    

    try {
     
    
        const funcionarioRes = await createFuncionarioService(funcionario, EPis, job);
        return res.status(httpStatus.CREATED).json(funcionarioRes);
    }
        catch (error) {
            return res.status(httpStatus.BAD_REQUEST).json(error);
            }
    }