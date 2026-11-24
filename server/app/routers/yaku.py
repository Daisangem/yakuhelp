from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def get_yaku():
    return [
        {
            "id": 1,
            "name": "Riichi",
            "description": "Declared ready hand",
            "han": 1
        },
        {
            "id": 2,
            "name": "Tanyao",
            "description": "All simples",
            "han": 1
        },
        {
            "id": 3,
            "name": "Pinfu",
            "description": "All sequences",
            "han": 1
        }
    ]
