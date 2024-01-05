#!/usr/bin/env python3
"""execute 4 async comprehension simultaneously"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    execute 4 times async comprehension in paralel
    """
    start = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    delta = time.time() - start
    return delta
