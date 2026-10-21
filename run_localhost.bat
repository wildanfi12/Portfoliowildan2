@echo off
title Running Wildan Portfolio on Localhost
echo ====================================================
echo   STARTING LOCALHOST SERVER AT HTTP://LOCALHOST:3000
echo ====================================================
echo.

set "NODE_PATH=C:\Users\Khusu\AppData\Local\OpenAI\Codex\runtimes\cua_node\78fb63cda1a9e2b2\bin\node.exe"

where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    set "NODE_CMD=node"
) else if exist "%NODE_PATH%" (
    set "NODE_CMD=%NODE_PATH%"
) else (
    echo [INFO] Membuka langsung via browser...
    start "" "%~dp0index.html"
    pause
    exit /b
)

cd /d "%~dp0"
start http://localhost:3000
"%NODE_CMD%" serve.js
pause
