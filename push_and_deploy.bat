@echo off
title Push dan Deploy GitHub Pages - Wildan Portfolio
color 0b
echo ========================================================
echo       WILDAN PORTFOLIO - DEPLOY GITHUB PAGES
echo ========================================================
echo.

where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    set "PATH=%LOCALAPPDATA%\GitHubDesktop\app-3.6.5\resources\app\git\cmd;%PATH%"
)

echo Mendorong perubahan ke GitHub (Portfoliowildan2)...
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [INFO] Jika diminta login, silakan authorize di pop-up browser GitHub.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ========================================================
echo [BERHASIL] Push ke GitHub Sukses!
echo ========================================================
echo.
echo GitHub Pages akan menerbitkan branch main secara otomatis.
echo Domain produksi: https://wildanportfolio.site/
echo ========================================================
echo       SELESAI! DEPLOYMENT SEDANG DIPROSES.
echo ========================================================
pause
