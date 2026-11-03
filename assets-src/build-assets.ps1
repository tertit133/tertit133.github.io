# Пересобирает public/resume.pdf и public/og-image.png из HTML-файлов этой папки.
# Запуск: powershell -ExecutionPolicy Bypass -File assets-src\build-assets.ps1
$ErrorActionPreference = 'Stop'
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
$src = $PSScriptRoot
$public = Join-Path (Split-Path $src -Parent) 'public'
$tmp = Join-Path $env:TEMP 'portfolio-edge-profile'

$resumeUrl = ([System.Uri](Join-Path $src 'resume.html')).AbsoluteUri
$ogUrl = ([System.Uri](Join-Path $src 'og-image.html')).AbsoluteUri

& $edge --headless --disable-gpu --user-data-dir="$tmp" --no-pdf-header-footer --print-to-pdf="$public\resume.pdf" $resumeUrl | Out-Null
& $edge --headless --disable-gpu --user-data-dir="$tmp" --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --screenshot="$public\og-image.png" $ogUrl | Out-Null

Get-Item "$public\resume.pdf", "$public\og-image.png" | Select-Object Name, Length
