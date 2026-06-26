#!/usr/bin/env bash
# Tomin-ki — Servidor local + Cloudflare Quick Tunnel (macOS / Linux)
# Uso:  chmod +x serve-tunnel.sh && ./serve-tunnel.sh   (o: ./serve-tunnel.sh 8090)
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${1:-8080}"

echo "============================================"
echo "  Tomin-ki - Servidor local + Cloudflare"
echo "============================================"

# 1) Python
if command -v python3 >/dev/null 2>&1; then PY=python3
elif command -v python >/dev/null 2>&1; then PY=python
else echo "[ERROR] Instala Python 3 (https://www.python.org/downloads/)"; exit 1; fi

# 2) cloudflared
if ! command -v cloudflared >/dev/null 2>&1; then
  echo "[AVISO] No se encontro 'cloudflared'."
  echo "  macOS:  brew install cloudflared"
  echo "  Linux:  https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
  exit 1
fi

# 3) Servidor local
echo "Iniciando servidor local en http://localhost:${PORT} ..."
"$PY" -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'echo; echo "Deteniendo servidor local..."; kill "$SERVER_PID" 2>/dev/null || true' EXIT
sleep 2

# Abrir navegador (best-effort)
( command -v open >/dev/null && open "http://localhost:${PORT}" ) || \
( command -v xdg-open >/dev/null && xdg-open "http://localhost:${PORT}" ) || true

# 4) Quick Tunnel (URL temporal trycloudflare.com)
echo
echo "Creando tunel publico de Cloudflare. Busca la URL https://XXXX.trycloudflare.com"
echo "Ctrl+C para detener."
echo
cloudflared tunnel --url "http://localhost:${PORT}"
