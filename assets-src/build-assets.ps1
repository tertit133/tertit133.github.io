# Пересобирает public/og-image.png, public/apple-touch-icon.png и картинки проектов из HTML-файлов этой папки.
# Резюме (public/resume.pdf и public/resume-en.pdf) — готовые PDF, скрипт их не трогает.
# Запуск из корня проекта: powershell -ExecutionPolicy Bypass -File assets-src\build-assets.ps1
$ErrorActionPreference = 'Stop'
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
$src = $PSScriptRoot
$public = Join-Path (Split-Path $src -Parent) 'public'
$tmp = Join-Path $env:TEMP 'portfolio-edge-profile'

function Get-FileUrl($name) { ([System.Uri](Join-Path $src $name)).AbsoluteUri }

& $edge --headless --disable-gpu --user-data-dir="$tmp" --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --screenshot="$public\og-image.png" (Get-FileUrl 'og-image.html') | Out-Null
& $edge --headless --disable-gpu --user-data-dir="$tmp" --hide-scrollbars --force-device-scale-factor=1 --window-size=180,180 --screenshot="$public\apple-touch-icon.png" (Get-FileUrl 'icon.html') | Out-Null

# Картинки проектов: каждый assets-src\projects\<имя>.html превращается в public\projects\<имя>.png (1200×750)
$projSrc = Join-Path $src 'projects'
$projOut = Join-Path $public 'projects'
if (Test-Path $projSrc) {
    New-Item -ItemType Directory -Force $projOut | Out-Null
    Get-ChildItem $projSrc -Filter *.html | ForEach-Object {
        & $edge --headless --disable-gpu --user-data-dir="$tmp" --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,750 --screenshot="$projOut\$($_.BaseName).png" ([System.Uri]$_.FullName).AbsoluteUri | Out-Null
    }
}

Get-Item "$public\og-image.png", "$public\apple-touch-icon.png" | Select-Object Name, Length, LastWriteTime
if (Test-Path $projOut) { Get-ChildItem $projOut -Filter *.png | Select-Object Name, Length, LastWriteTime }
