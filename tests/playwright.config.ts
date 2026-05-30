import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  workers: 1, // 1 solo worker para que los 3 tests se ejecuten de forma secuencial y no en paralelo
  timeout: 120_000,
  expect: {
    timeout: 25_000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  webServer: { // para evitar el error de que el frontend no se levanta
    command: 'npm run dev -- --host 0.0.0.0 --port 5173',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    cwd: '../frontend',
    timeout: 120000,
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});