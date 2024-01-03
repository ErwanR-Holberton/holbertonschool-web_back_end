#!/usr/bin/env python3
"""wait some time"""
import random
import time


def wait_random(max):
    """sleep between 0 and max"""
    time.sleep(random.random() * max)
