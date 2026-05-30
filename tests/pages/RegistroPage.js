import { expect, test } from '@playwright/test';

export class RegistroPage {
    constructor(page) {
        this.page = page;
        this.cuentaDestinoLocator = page.getByPlaceholder("Cuenta Destino (Ej: 98765)");
        this.montoLocator = page.locator("//input[@type='number']");
        // this.password = page.locator("");
        this.enviarTransferenciaBotonLocator = page.getByRole('button', { name: "Enviar Transferencia"});
        this.estadoLocator = page.locator("#status-box");

    }

    async irPaginaRegistro(url) {
        await this.page.goto(url);
    }

    async rellenarCuentaDestino(cuentaDestion) {
        await this.cuentaDestinoLocator.fill(cuentaDestion);
    }

    async rellenarMonto(monto) {
        await this.montoLocator.fill(monto);
    }

    async rellenarFormulario(cuentaDestion, monto) {
        await this.rellenarCuentaDestino(cuentaDestion);
        await this.rellenarMonto(monto);
    }

    async clickEnviarTransferencia() {
        await this.enviarTransferenciaBotonLocator.click();
    }

    async getStatusText() {
        return await this.estadoLocator.innerText();
    }

    async verificarEstadoUsiarioCreadoExitosamente(timeoutMs = 10_000) {
    await expect(this.estadoLocator).toHaveText("Estado: Usuario Creado Exitosamente", { timeout: timeoutMs });
    }
}