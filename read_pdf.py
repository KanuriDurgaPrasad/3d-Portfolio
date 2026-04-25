import pypdf
import sys

try:
    reader = pypdf.PdfReader('Dp resume(Infosys experience).pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open('resume_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Done")
except Exception as e:
    print(f"Error: {e}")
