#!/usr/bin/env python3
"""list all docs"""


def list_all(mongo_collection):
    """list all files"""
    return [file for file in mongo_collection.find()]

