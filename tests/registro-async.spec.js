import { expect, test } from '@playwright/test';
import { RegistroPage } from './pages/RegistroPage';

test('Enviar transferencia', async ( { page }) => {
    const registroPage = new RegistroPage(page);

    await registroPage.irPaginaRegistro('http://localhost:5173/');
    // await registroPage.irPaginaRegistro('http://127.0.0.1:5173/'); // github Actions
    await registroPage.rellenarFormulario('0002', '4566');
    await registroPage.clickEnviarTransferencia();
    await registroPage.verificarEstadoUsiarioCreadoExitosamente();
});