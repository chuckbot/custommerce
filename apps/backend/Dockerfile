FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# En backend será 'npm run dev', en frontend igual (Vite)
CMD ["npm", "run", "dev"]