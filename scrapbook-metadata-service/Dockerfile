FROM python:3.8-slim-buster
# WORKDIR /usr/src/app
COPY . /app
WORKDIR /app

ENV MONGO_URI=mongodb://localhost:27017/scrapbookMetadataService
ENV KAFKA_URI=localhost:9092
ENV PORT=12000
ENV DEBUG=True
ENV KAFKA_TOPIC=image
ENV HOST=0.0.0.0
ENV G_DRIVE_SERVICE=http://localhost:9090

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 12000

# CMD ["python", "app.py"]

CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:12000", "app:app"]