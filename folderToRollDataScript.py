import os
import json
from PIL import Image

rolls = []

# for each folder in /public/rolls
for folder in os.listdir("./public/rolls"):
  images = []
  # for each image file in /public/rolls/{folder}
  for filename in os.listdir(f"./public/rolls/{folder}"):
    if not (filename.lower().endswith(".jpg") or filename.lower().endswith(".png")):
      continue
    
    # get the image path and image width and height
    imagePath = f"/rolls/{folder}/{filename}"
    
    # get the image width and height
    imageWidth, imageHeight = Image.open(f"./public{imagePath}").size
    
    # add the image path and dimensions to the roll data
    images.append({
      "path": imagePath,
      "width": imageWidth,
      "height": imageHeight,
    })

  rolls.append({
    'id': '',
    'name': '',
    'chineseName': '',
    'description': '',
    'developedDate': '',
    'forewordPath': f"/public/rolls/{folder}/foreword.md",
    'epiloguePath': f"/public/rolls/{folder}/epilogue.md",
    'thumbnailPath': '/public/roll_thumbs/...',
    'images': images,
    'camera': {
      'brand': "Olympus",
      'model': "Pen f3.5",
      'notes': "",
    },
    'filmStock': {
      'brand': "Kodak",
      'model': "ColorPlus",
      'speed': 200,
    },
  })

# write the roll data to a JSON file
with open("./rollDataScriptOutput.json", "w") as f:
  f.write(json.dumps(rolls, indent=2))