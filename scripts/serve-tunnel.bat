@echo off
setlocal
title Tomin-ki - Local + Cloudflare Tunnel
cd /d "%~dp0.."
set "PORT=8080"

echo ============================================
echo   Tomin-ki - Servidor local + Cloudflare
echo ============================================
echo.

REM 1) Detectar Python
set "PY="
where python >nul 2>nul && set "PY=python"
if not defined PY where py >nul 2>nul && set "PY=py"
if not defined PY goto NOPY

REM 2) Detectar cloudflared
where cloudflared >nul 2>nul
if errorlevel 1 goto NOCF
goto RUN

:RUN
echo Iniciando servidor local en http://localhost:%PORT% ...
start "Tomin-ki server - no cerrar" cmd /c "%PY% -m http.server %PORT%"
timeout /t 2 >nul
start "" "http://localhost:%PORT%"
echo.
echo Creando tunel publico de Cloudflare...
echo Copia la URL https://XXXX.trycloudflare.com que aparezca abajo.
echo Ctrl+C para detener.
echo.
cloudflared tunnel --url http://localhost:%PORT%
echo.
echo Tunel detenido. Cierra la ventana del servidor para detenerlo del todo.
pause
goto END

:NOPY
echo [ERROR] No se encontro Python.
echo Instalalo desde https://www.python.org/downloads/  y marca "Add python.exe to PATH".
pause
goto END

:NOCF
echo [AVISO] No se encontro cloudflared.
set /p INSTALL="Instalar ahora con winget? s/n: "
if /i "%INSTALL%"=="s" goto INSTALLCF
echo Instala cloudflared manualmente y vuelve a ejecutar:
echo https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/
pause
goto END

:INSTALLCF
winget install --id Cloudflare.cloudflared -e --source winget
where cloudflared >nul 2>nul
if errorlevel 1 goto CFFAIL
goto RUN

:CFFAIL
echo No se pudo instalar cloudflared. Instalalo manualmente y vuelve a ejecutar.
pause
goto END

:END
endlocal
