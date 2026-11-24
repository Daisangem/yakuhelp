from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.routers import yaku

app = FastAPI(
    title="Yakuhelper API",
    version="1.0.0"
)

STATIC_DIR = Path(__file__).parent / "static"

app.include_router(
    yaku.router,
    prefix="/api/yaku",
    tags=["Yaku"]
)

app.mount(
    "/static",
    StaticFiles(directory=STATIC_DIR),
    name="static"
)


@app.get("/api/health")
async def health():
    return {"status": "healthy"}


@app.get("/")
async def serve_frontend():
    return FileResponse(STATIC_DIR / "index.html")
