FROM tiangolo/uwsgi-nginx-flask:python3.8
RUN pip install requests
RUN mkdir /app/users

ENV LISTEN_PORT 10003
EXPOSE 10003

VOLUME /app

COPY ./app /app



