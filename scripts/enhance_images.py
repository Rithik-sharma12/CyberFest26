from PIL import Image, ImageEnhance
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMAGES = [ROOT / 'images' / 'EARKAI.jpeg', ROOT / 'images' / 'STARKWAYS.jpeg']

for img_path in IMAGES:
    if not img_path.exists():
        print(f"Skipping missing file: {img_path}")
        continue

    # backup original if not already backed up
    backup = img_path.with_suffix(img_path.suffix + '.bak')
    if not backup.exists():
        img_path.replace(backup)
        # restore the name for processing
        backup.replace(img_path)

    # open image
    img = Image.open(img_path)
    img = img.convert('RGB')

    # enhancements
    img = ImageEnhance.Brightness(img).enhance(1.25)
    img = ImageEnhance.Contrast(img).enhance(1.15)
    img = ImageEnhance.Sharpness(img).enhance(1.8)

    # save back (overwrite)
    img.save(img_path, format='JPEG', quality=95)
    print(f"Enhanced and saved: {img_path}")
