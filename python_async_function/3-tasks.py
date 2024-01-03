#!/usr/bin/env python3
"""create a task"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay):
    """create a task"""
    return asyncio.ensure_future(wait_random(max_delay))
