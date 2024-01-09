#!/usr/bin/env python3
"""return page indexes"""


def index_range(page, page_size):
    """return page indexes"""
    return ((page - 1 * page_size), page * page_size)
