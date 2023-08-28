import { Funcionario, Atividade, Epi } from "@prisma/client";
import { createFuncionario, getAllFuncionarios, createAtividade, createEpi  } from "@/repositories";

export async function createFuncionarioService(funcionario: any ): Promise<Funcionario> {
    return await createFuncionario(funcionario);

}

export async function getAllFuncionariosService(): Promise<Funcionario[]> {
    return await getAllFuncionarios();
}