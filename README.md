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

# References

[Grafana](https://medium.com/swlh/generate-and-track-metrics-for-flask-api-applications-using-prometheus-and-grafana-55ddd39866f0)