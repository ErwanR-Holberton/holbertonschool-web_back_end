#!/usr/bin/env python3
"""use async comprension"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    use async comprension
    """
    return [x async for x in async_generator()]
