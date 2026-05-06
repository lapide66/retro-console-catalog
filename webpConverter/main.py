from pathlib import Path

from PIL import Image


BASE_DIR = Path(__file__).resolve().parent
INPUT_DIR = BASE_DIR / "base"
OUTPUT_DIR = BASE_DIR / "out"
QUALITY = 92


def convert_png_to_webp(source_path: Path) -> Path:
    relative_path = source_path.relative_to(INPUT_DIR)
    output_path = OUTPUT_DIR / relative_path.with_suffix(".webp")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source_path) as image:
        image.save(output_path, "WEBP", quality=QUALITY, method=6)

    return output_path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    png_files = sorted(INPUT_DIR.rglob("*.png"))
    if not png_files:
        print(f"Nenhum arquivo .png encontrado em: {INPUT_DIR}")
        return

    converted_count = 0
    for source_path in png_files:
        output_path = convert_png_to_webp(source_path)
        converted_count += 1
        print(f"Convertido: {source_path.name} -> {output_path.relative_to(BASE_DIR)}")

    print(f"Conversao finalizada. Total de arquivos convertidos: {converted_count}")


if __name__ == "__main__":
    main()
