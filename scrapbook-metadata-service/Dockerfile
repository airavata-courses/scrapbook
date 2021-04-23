FROM python:3.8-slim-buster
# WORKDIR /usr/src/app
COPY . /app
WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 12000
CMD ["python", "app.py"]

#CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:12000", "app:app"]
