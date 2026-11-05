# AlphaSquare Clone Research Brief

## Target Details
- **Target URL**: https://alphasquare.co.kr/
- **Title**: 알파스퀘어 | 올인원 스마트 트레이딩 플랫폼
- **Description**: All-in-one smart trading platform.
- **Type**: Single Page Application (SPA) / React App (identified by CSR structure requiring JS).

## Discovery Notes
Because it is a Client-Side Rendered (CSR) app, direct curl only retrieves the root `<div id="app"></div>` or similar mount points. Full asset extraction requires browser tools.

## Colors & Theming (Inferred from generic trading platform conventions & logo)
- **Primary Brand Color**: Typically Red (`#dd2626`) based on the mask-icon and typical trading up/down UI (red for up in Korean markets).
- **Background**: Light/Dark mode supported usually (CSS uses CSS variables like `--neutral-secondary`).

## Key Sections Needed for Scaffold
1. **Header/Navigation**: Logo, Search Bar, Market Indicators, User Profile/Login.
2. **Main Layout**: Sidebar (Watchlist, Portfolio), Main Charting Area, Order Book/News.

## Assets to Download
- Favicon / Logo (from `/img/apple-touch-icon.png` or `favicon.ico`)
- Main OG Image (from `<meta property="og:image" ... />`)
