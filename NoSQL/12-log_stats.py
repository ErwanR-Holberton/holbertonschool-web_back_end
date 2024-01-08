#!/usr/bin/env python3
"""provide stats about nginx logs"""
from pymongo import MongoClient


if __name__ == "__main__":
    """provide stats about nginx logs"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client['logs']
    collection = db['nginx']

    print(collection.count_documents({}), "logs")
    print("Methods:")
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for met in method:
        print("\tmethod", met + ":", collection.count_documents({"method": met}))
    print(collection.count_documents({"method": "GET", "path": "/status"}),
          "status check")

    client.close()
