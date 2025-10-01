# System Architecture

```mermaid
flowchart TD
  subgraph Client
    ZMA[Zalo Mini App]
  end

  subgraph Server
    API[Backend API]
    DB[(Database)]
  end

  subgraph Zalo
    OAuth[Zalo OAuth]
    OA[Zalo OA API]
    Pay[ZaloPay API]
  end

  ZMA -->|OAuth2| OAuth
  ZMA -->|REST| API
  API --> DB
  API --> OA
  API --> Pay
