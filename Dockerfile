FROM nginx


# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build ./build

ADD certs/server.crt /etc/nginx/server.crt
ADD certs/server.key /etc/nginx/server.key
ADD conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
