import { Router } from 'express';
import { getAllFuncionarios, createFuncionario } from '@/controllers';

const router = Router();

router.get('/', getAllFuncionarios);
router.post('/', createFuncionario);

export { router }