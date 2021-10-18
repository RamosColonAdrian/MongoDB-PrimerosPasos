db.dropDatabase()
db.products.insert([
    {
        "name": "Ryzen",
        "gen": 9,
        "description":3950,
        "ghz":4.7,
        "quantity": 14,
        "price":872.43,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 9,
        "description":5950,
        "ghz":3.4,
        "quantity": 6,
        "price":798.89,
        "tags": ["core", "gaming", "AMD",{"type":"reconditioned"}],
        "stock":true
    }, 
    {
        "name": "Ryzen",
        "gen": 9,
        "description":5900,
        "ghz":3.7,
        "quantity": 22,
        "price":549.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    }, 
    {
        "name": "Ryzen",
        "gen": 7,
        "description":2700,
        "ghz":3.8,
        "quantity": 54,
        "price":527.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    }, 
    {
        "name": "Ryzen",
        "gen": 7,
        "description":5800,
        "ghz":3.8,
        "quantity": 0,
        "price":429.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":false
    }, 
    {
        "name": "Ryzen",
        "gen": 7,
        "description":3800,
        "ghz":3.9,
        "quantity": 2,
        "price":385.08,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    }, 
    {
        "name": "Ryzen",
        "gen": 7,
        "description":5700,
        "ghz":4.6,
        "quantity": 32,
        "price":394.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 5,
        "description":3600,
        "ghz":3.8,
        "quantity": 12,
        "price":334.56,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 5,
        "description":5600,
        "ghz":3.7,
        "quantity": 0,
        "price":303.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":false
    },
    {
        "name": "Ryzen",
        "gen": 5,
        "description":3700,
        "ghz":3.6,
        "quantity": 19,
        "price":299.99,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 5,
        "description":3800,
        "ghz":3.9,
        "quantity": 76,
        "price":299.90,
        "tags": ["core", "gaming", "AMD",{"type":"reconditioned"}],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 3,
        "description":1200,
        "ghz":3.1,
        "quantity": 6,
        "price":119.66,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen": 3,
        "description":3200,
        "ghz":3.6,
        "quantity": 4,
        "price":223.90,
        "tags": ["core", "gaming", "AMD"],
        "stock":true
    },
    {
        "name": "Ryzen",
        "gen":"athlon",
        "description":3000,
        "ghz":3.5,
        "quantity": 0,
        "price":100,
        "tags": ["core", "gaming", "AMD",{"type":"reconditioned"}],
        "stock":false
    }
])
