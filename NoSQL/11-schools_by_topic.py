#!/usr/bin/env python3
"""return list of school"""


def schools_by_topic(mongo_collection, topic):
    """return list of school"""
    return [match for match in mongo_collection.find({'topics': topic})]
