/*
  Warnings:

  - You are about to drop the column `descricao` on the `Atividade` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Epi` table. All the data in the column will be lost.
  - You are about to drop the column `atestado` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `ativo` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Funcionario` table. All the data in the column will be lost.
  - Added the required column `name` to the `Atividade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Epi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicalCert` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atividade" DROP COLUMN "descricao",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Epi" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Funcionario" DROP COLUMN "atestado",
DROP COLUMN "ativo",
DROP COLUMN "cargo",
DROP COLUMN "nome",
DROP COLUMN "sexo",
ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "medicalCert" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
