import json

side = ["regular", "switch"]
edge = ["HS", "TS"]
rotationSide = ["Frontside", "Backside"]
rotation = [180, 360, 540, 720, 900, 1080]
invert = ["none", "front flip", "back flip"]

jsonFile = open("tricks.json", "w")

for s in side:
    for e in edge:
        for rs in rotationSide:
            for i in invert:
                for r in rotation:
                    currInvert = i
                    currSide = s

                    if i == "none":
                        currInvert = ""
                    if s == "regular":
                        currSide = ""

                    trickName = f"{currSide} {e} {rs} {r} {currInvert}"
                    trickName = trickName.strip()

                    trickDic = {}
                    trickDic["name"] = trickName
                    trickDic["side"] = s
                    trickDic["edge"] = e
                    trickDic["rotation direction"] = rs
                    trickDic["rotation"] = r
                    trickDic["invert"] = i

                    jString = json.dumps(trickDic, indent=4)
                    jsonFile.write(jString + "\n")

jsonFile.close()
