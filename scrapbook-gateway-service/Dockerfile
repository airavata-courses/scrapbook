FROM python:3.8-slim-buster
# WORKDIR /usr/src/app
COPY . /app
WORKDIR /app


ENV PORT=8081
ENV DEBUG=True
ENV HOST=0.0.0.0
ENV AUTH_SERVICE=http://0.0.0.0:5000
ENV USER_SERVICE=http://0.0.0.0:3000
ENV SESSION_SERVICE=http://0.0.0.0:3500
ENV IMAGE_SERVICE=http://0.0.0.0:8080
ENV G_DRIVE_SERVICE=http://0.0.0.0:9090
ENV MDE_SERVICE=http://0.0.0.0:12000

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# COPY . .
EXPOSE 8081

CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:8081", "app:app"]