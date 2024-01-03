#!/usr/bin/env python3
"""wait for multiple routines and get their result in order of return"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_append(ret_list, max_delay):
    ret_list.append(await wait_random(max_delay))


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """sleep between 0 and max"""
    delays = []
    tasks = [wait_append(delays, max_delay) for _ in range(n)]
    await asyncio.gather(*tasks)
    return delays
