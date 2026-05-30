import { expect, test } from '@playwright/test';
import { RegistroPage } from './pages/RegistroPage';

test('Automatización E2E con Arquitectura Asíncrona (Kafka + Docker)', async ( { page }) => {
    const registroPage = new RegistroPage(page);

    await registroPage.irPaginaRegistro('http://localhost:5173/');
    await registroPage.rellenarFormulario('0002', '4566');
    await registroPage.clickEnviarTransferencia();
    await registroPage.verificarEstadoUsiarioCreadoExitosamente();
});