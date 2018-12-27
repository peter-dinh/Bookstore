 FROM python:3
 ENV PYTHONUNBUFFERED 1
 RUN mkdir /BookStore
 WORKDIR /BookStore
 ADD requirements.txt /BookStore/
 RUN pip install -r requirements.txt
 ADD . /BookStore/