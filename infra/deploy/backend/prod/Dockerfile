# start by pulling the python image
FROM python:3.9-alpine

# switch working directory
WORKDIR /app


# copy the requirements file into the image
COPY server/requirements.txt /app/requirements.txt



# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY ./server ./

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]

CMD ["index.py" ]