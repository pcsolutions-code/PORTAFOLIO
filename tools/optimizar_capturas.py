"""Convierte capturas PNG/JPG a WebP para el portafolio.

Uso:
    pip install pillow
    python tools/optimizar_capturas.py ruta/a/capturas nombre-del-proyecto

Genera en public/assets/:
    nombre-del-proyecto-01.webp      (hasta 1600 px de ancho, para ver en grande)
    nombre-del-proyecto-01-s.webp    (640 px, para miniaturas y el mosaico)
Las capturas se numeran en orden alfabético del nombre de archivo.
"""
import sys
from pathlib import Path
from PIL import Image

if len(sys.argv) != 3:
    sys.exit(__doc__)

origen, nombre = Path(sys.argv[1]), sys.argv[2]
destino = Path(__file__).resolve().parent.parent / "public" / "assets"
destino.mkdir(parents=True, exist_ok=True)

archivos = sorted(p for p in origen.iterdir() if p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"})
for n, ruta in enumerate(archivos, start=1):
    img = Image.open(ruta).convert("RGB")
    grande = img.copy(); grande.thumbnail((1600, 1600))
    chica = img.copy(); chica.thumbnail((640, 640))
    grande.save(destino / f"{nombre}-{n:02d}.webp", "WEBP", quality=80, method=6)
    chica.save(destino / f"{nombre}-{n:02d}-s.webp", "WEBP", quality=72, method=6)
    print(f"{ruta.name} -> {nombre}-{n:02d}.webp")
