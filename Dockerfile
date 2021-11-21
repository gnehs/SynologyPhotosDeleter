
FROM node:14-alpine
WORKDIR /app
COPY . /app
RUN npm install --production --silent
# 環境設定
ENV NODE_ENV=production
EXPOSE 3001
# 啟動
CMD ["node", "index.js"]

