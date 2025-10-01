# API Integration

## 1. Authentication
- Sử dụng OAuth2 của Zalo.
- Endpoint: `https://oauth.zaloapp.com/v4/oa/access_token`

## 2. Lấy thông tin người dùng
```http
GET https://graph.zalo.me/v2.0/me?access_token=ACCESS_TOKEN
