import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.batebet.app',
  appName: 'BateBet',
  webDir: 'www',
  server: {
    url: 'https://www.batebet.net',
    // Mantém estes domínios DENTRO do app (WebView) em vez de abrir o navegador.
    // Sem isso, ao navegar pro dashboard (subdomínio diferente) o Android
    // abria o Chrome externo. Agora o dashboard abre em modo app.
    allowNavigation: [
      'www.batebet.net',
      'batebet.net',
      'dashboard.batebet.net',
      '*.batebet.net'
    ],
    cleartext: false
  }
};

export default config;
