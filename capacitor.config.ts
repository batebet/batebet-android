import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId:   'net.batebet.app',
  appName: 'BateBet',
  webDir:  'www',

  // Carrega o site diretamente — sem precisar empacotar arquivos
  server: {
    url:        'https://www.batebet.net',
    cleartext:  false,
    androidScheme: 'https',
  },

  android: {
    allowMixedContent: false,
    captureInput:      true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
