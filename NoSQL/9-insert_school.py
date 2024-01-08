#!/usr/bin/env python3
"""insert new doc"""


def insert_school(mongo_collection, **kwargs):
    """insert new document with"""
    return mongo_collection.insert_one(kwargs).inserted_id
