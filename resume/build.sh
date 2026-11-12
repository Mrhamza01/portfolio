#!/usr/bin/env bash
# Compiles the resume and publishes it to the site at /resume.pdf.
# Requires pdflatex (TeX Live: latex-base, latex-recommended, latex-extra, lmodern, cm-super).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p build
for _ in 1 2; do
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory=build hamza-ghafoor-resume.tex >/dev/null
done
cp build/hamza-ghafoor-resume.pdf ../public/resume.pdf
echo "Wrote public/resume.pdf"
