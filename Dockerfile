# ===== Builder =====
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# ===== Runtime =====
FROM nginx:alpine AS runner

# Copy built files từ builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (chuẩn của nginx)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]