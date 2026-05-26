import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
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
    url: 'http://127.0.0.1:5173',
    // reuseExistingServer: !process.env.CI,
    reuseExistingServer: true,
    cwd: '../frontend',
    timeout: 120000,
  },
  use: {
    baseURL: 'http://127.0.0.1:5173',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});