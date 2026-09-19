@echo off
title Upload Portfolio to GitHub
echo ====================================================
echo   UPLOADING PORTFOLIO TO GITHUB (wildanfi12/wildanportfolio)
echo ====================================================
echo.
cd /d "C:\Users\Khusu\.gemini\antigravity\scratch\creative-studio-portfolio"
"C:\Users\Khusu\AppData\Local\github-copilot-git-2.53.0-4\cmd\git.exe" push -u origin main
echo.
echo ====================================================
echo   SELESAI! SILAKAN KEMBALI KE VERCEL DAN KLIK DEPLOY.
echo ====================================================
pause
