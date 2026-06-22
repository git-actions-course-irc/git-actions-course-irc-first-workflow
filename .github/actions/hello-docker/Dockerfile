FROM node:22-alpine

COPY entrypoint.sh /entrypoint.sh

COPY entrypoint.sh /cleanup.sh

RUN chmod +x /entrypoint.sh

RUN chmod +x /cleanup.sh


ENTRYPOINT ["/entrypoint.sh"]

CMD ["World"]