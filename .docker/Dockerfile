FROM node:16-slim

RUN apt update && apt install -y --no-install-recommends \
  git \
  ca-certificates

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "yarn install && tail -f /dev/null" ]