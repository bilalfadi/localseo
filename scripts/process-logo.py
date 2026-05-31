from PIL import Image

src = r"C:\Users\HUSSNAIN.COM\.cursor\projects\d-local-seo-wiser\assets\c__Users_HUSSNAIN.COM_AppData_Roaming_Cursor_User_workspaceStorage_3e075e9b4d74cf8adc3d366cfd340f71_images_seo_wiser_logo__1_-6538aa39-2206-425b-bbe9-4d15a9f9c197.png"
out = r"d:\local seo wiser\public\seo-wiser-logo.png"
icon_out = r"d:\local seo wiser\public\seo-wiser-logo-icon.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        brightness = max(r, g, b)
        if brightness < 25:
            pixels[x, y] = (0, 0, 0, 0)
        elif brightness < 70 and abs(r - g) < 12 and abs(g - b) < 12:
            alpha = max(0, min(255, int((brightness - 25) * 6)))
            pixels[x, y] = (r, g, b, alpha)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(out, "PNG", optimize=True)

icon = img.copy()
icon.thumbnail((512, 512), Image.Resampling.LANCZOS)
icon.save(icon_out, "PNG", optimize=True)

print(f"Saved {out} size={img.size}")
