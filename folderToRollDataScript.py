import os
import json
from PIL import Image

rolls = []

# for each folder in /public/rolls
for folder in os.listdir("./public/rolls"):
  images = []
  # for each image file in /public/rolls/{folder}
  for file in os.listdir(f"./public/rolls/{folder}"):
    if not (file.endswith(".jpg") or file.endswith(".png")):
      continue
    
    # get the image path and image width and height
    imagePath = f"/rolls/{folder}/{file}"
    
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