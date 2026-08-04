# React + Docker Sample

## Build the image
```bash
docker build -t react-docker-app .
```

## Run the container
```bash
docker run -p 8080:80 react-docker-app
```

Then open **http://localhost:8080** in your browser — the sample React page will load.

## (Optional) Local dev without Docker
```bash
npm install
npm run dev
```
