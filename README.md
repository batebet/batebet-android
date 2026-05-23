# BateBet — App Android

APK gerado com Capacitor. Carrega `https://www.batebet.net` em WebView nativo.

## Como instalar no celular

1. Acesse a aba **Releases** deste repositório no GitHub
2. Baixe o arquivo `app-debug.apk`
3. No Android: Configurações → Segurança → **Fontes desconhecidas** (habilitar)
4. Abra o arquivo baixado e instale

## Como gerar um novo APK

Qualquer push na branch `main` gera um novo APK automaticamente via GitHub Actions.
Ou vá em **Actions → Build APK BateBet → Run workflow**.

## Estrutura

- `capacitor.config.ts` → configuração principal (URL do site, appId, etc.)
- `android/` → projeto Android gerado pelo Capacitor
- `.github/workflows/` → CI/CD para build automático
