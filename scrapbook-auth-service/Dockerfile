FROM python:3.8-slim-buster
COPY . /app
WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
# ENTRYPOINT ["python"]
# CMD ["app/app.py"]
# CMD ["python", "app.py"]
CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:5000", "app:app"]
