# LOCATEC

## Routes

- localhost:3000 -> grafana
- localhost:9090 -> prometheus
- localhost:5000 -> flask
- localhost:8080 -> vite

## Full application

Using GNU

```bash
make run-app
```

Usingo only docker for windows (on root project)

```bash
infra/deploy/local/docker-compose up
```


## Frontend

For local run of the frontend:

```bash
npm i
npm run dev
```

## Backend

For local run of the Backend:

```bash
pip -r requirements.txt
python index.py
```

## Prometheus and grafana

User: admin 
Password: pass@123

1. Connect prometheus ass data source with

```bash
url: http://prometheus:9090
```

## Run prod

1. On EC2

```bash
sudo yum update -y
sudo yum install firewalld -y 
firewall-cmd --add-service=http --permanent
firewall-cmd --reload
sudo yum install docker -y
sudo um install git -y
sudo service docker start
git clone https://github.com/caposcar1998/LOCATEC.git
git checkout staging
sudo su
sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
```

## API


### GET /product

Get all products on locatec

**Parameters**


**Response**

```bash

// Objects found
{
    "code": 200,
    "result: []
}

or

// Error
{
    "code": 500,
    "result: error
}

```

### POST /product

Create product on locatec

**Parameters**

body params: 

```bash
{
    {"name": str , "description": str, "location": str, "finder": int, "color": str, "looker": int, "category": str}
}
```

**Response**

```bash

// Object created
{
    "code": 201,
    "result: ok
}

or

// Error
{
    "code": 500,
    "result: error
}

```

### DELETE /product/{id}

Delete one product on locatec

**Parameters**


**Response**

```bash
// Object deleted
{
    "code": 200,
    "result: "deleted"
}

or

// Error
{
    "code": 500,
    "result: error
}

```

### PUT /product/{id}

Update product on locatec

**Parameters**

body params:

```bash
{
    {"name": str , "description": str, "location": str, "finder": int, "color": str, "looker": int}
}
```

**Response**

```bash

// Object updated
{
    "code": 200,
    "result: ok
}

or

// Error
{
    "code": 500,
    "result: error
}

```

### GET /product/{id}

Returns one product

**Parameters**


**Response**

```
// Object obtained
{
    "code": 200,
    "result: product
}

or

// Error
{
    "code": 500,
    "result: error
}

```

### PUT /product/{id}/status/{status}/looker/{1}

Changes status product found

**Parameters**


**Response**

```
// Object obtained
{
    "code": 200,
    "result: ok
}

or

// Error
{
    "code": 500,
    "result: error
}

```

# References

[Grafana](https://medium.com/swlh/generate-and-track-metrics-for-flask-api-applications-using-prometheus-and-grafana-55ddd39866f0)
[centOs](https://docs.rackspace.com/support/how-to/centos-7-apache-and-php-install/)
