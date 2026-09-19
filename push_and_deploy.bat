@echo off
title Push ke GitHub dan Deploy ke Vercel - Wildan Portfolio
color 0b
echo ========================================================
echo       WILDAN PORTFOLIO - PUSH KE GITHUB DAN VERCEL
echo ========================================================
echo.

where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    set "PATH=%LOCALAPPDATA%\GitHubDesktop\app-3.6.5\resources\app\git\cmd;%PATH%"
)

echo [1/2] Mendorong perubahan ke GitHub (Portfoliowildan2)...
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
echo [2/2] Melakukan deployment ke Vercel...
echo (Jika belum login, Vercel akan membuka browser untuk verifikasi)
echo.
call npx vercel --prod

echo.
echo ========================================================
echo       SELESAI! Website Anda berhasil di-deploy!
echo ========================================================
pause
