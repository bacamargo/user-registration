FROM node:hydrogen

# Install backend dependencies
WORKDIR /user-registration/backend
COPY backend/package*.json ./
RUN npm i

# Install frontend dependencies
WORKDIR /user-registration/frontend
COPY frontend/package*.json ./
RUN yarn install

# Copy the entire project and start the app
WORKDIR /user-registration
COPY . .

CMD ["npm", "run", "start"]
EXPOSE 3000
EXPOSE 3001