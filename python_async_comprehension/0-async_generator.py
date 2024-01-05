#!/usr/bin/env python3
"""generate 10 numbers"""
import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    this function
    generates 10 numbers
    and return a list
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
