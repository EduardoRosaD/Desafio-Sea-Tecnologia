/*
  Warnings:

  - A unique constraint covering the columns `[rg]` on the table `Funcionario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rg` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "rg" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_rg_key" ON "Funcionario"("rg");
