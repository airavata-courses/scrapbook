FROM python:3.8-slim-buster
COPY . /app
WORKDIR /app

ENV DEBUG=True
ENV PORT=5000
ENV CLIENT_ID=6383607950-8vfdgb52qqgfrkin3sonc424qamc5mkc.apps.googleusercontent.com
ENV CLIENT_SECRET=3VBr2hLv2ZJ6-jbNHYcXSM0i
ENV HOST=0.0.0.0
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
# ENTRYPOINT ["python"]
# CMD ["app/app.py"]

CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:5000", "app:app"]