from fastapi import FastAPI

app = FastAPI()


@app.post("/variable_a")
async def variable_a(data: dict):
    print(data)
    # do long running task
    text = "Data is being processed"
    return {"text": text}


@app.post("/variable_b")
async def variable_b(data: dict):
    print(data)
    # do long running task
    text = "Data is being processed please wait"
    return {
        "text": text,
        "medias": {
            "images": [
                {
                    "link": "https://sarufi-media.s3.amazonaws.com/Screenshot_2024-03-13_103320-removebg-preview-36b6e4cd-e.png",
                    "caption": "Your Receipt",
                }
            ]
        },
    }
