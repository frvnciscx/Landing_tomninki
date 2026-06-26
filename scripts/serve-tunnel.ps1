<#
  Tomin-ki — Servidor local + Cloudflare Quick Tunnel
  Uso:
    Clic derecho > "Ejecutar con PowerShell"
    o en una terminal:  powershell -ExecutionPolicy Bypass -File .\serve-tunnel.ps1
  Opcional:  .\serve-tunnel.ps1 -Port 8090
#>
param([int]$Port = 8080)

$ErrorActionPreference = "Stop"
Set-Location -Path (Split-Path -Parent $PSScriptRoot)

Write-Host "============================================" -ForegroundColor Magenta
Write-Host "  Tomin-ki - Servidor local + Cloudflare" -ForegroundColor Magenta
Write-Host "============================================`n" -ForegroundColor Magenta

# ---- 1) Detectar Python ----
$py = $null
foreach ($cmd in @("python","py","python3")) {
  if (Get-Command $cmd -ErrorAction SilentlyContinue) { $py = $cmd; break }
}
if (-not $py) {
  Write-Host "[ERROR] No se encontro Python. Instalalo desde https://www.python.org/downloads/ (marca 'Add to PATH')." -ForegroundColor Red
  Read-Host "Enter para salir"; exit 1
}

# ---- 2) Detectar cloudflared ----
if (-not (Get-Command cloudflared -ErrorAction SilentlyContinue)) {
  Write-Host "[AVISO] No se encontro 'cloudflared'." -ForegroundColor Yellow
  $ans = Read-Host "Instalar ahora con winget? (s/n)"
  if ($ans -eq "s") {
    winget install --id Cloudflare.cloudflared -e --source winget
  } else {
    Write-Host "Instala cloudflared y vuelve a ejecutar. https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
    Read-Host "Enter para salir"; exit 1
  }
}

# ---- 3) Servidor local (proceso aparte) ----
Write-Host "Iniciando servidor local en http://localhost:$Port ..." -ForegroundColor Cyan
$server = Start-Process -FilePath $py -ArgumentList "-m","http.server","$Port" -PassThru -WindowStyle Minimized
Start-Sleep -Seconds 2
Start-Process "http://localhost:$Port"

# ---- 4) Quick Tunnel (URL temporal, sin cuenta) ----
Write-Host "`nCreando tunel publico de Cloudflare. Busca la URL https://XXXX.trycloudflare.com" -ForegroundColor Cyan
Write-Host "Ctrl+C para detener.`n" -ForegroundColor DarkGray
try {
  cloudflared tunnel --url "http://localhost:$Port"
}
finally {
  Write-Host "`nDeteniendo servidor local..." -ForegroundColor Yellow
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue }
}
