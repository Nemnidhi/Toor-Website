@echo off
REM Local preview of the website on port 4310 (content and enquiries kept in .\data, not in git).
cd /d "%~dp0"
if "%DATA_DIR%"=="" set DATA_DIR=%~dp0data
npx next dev -p 4310
