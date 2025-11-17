# 🎯 Ismlar Ma'nosi Bot - Professional Name Recommendation System

> **Advanced Telegram bot with AI-powered name recommendations and professional parent-based name matching**

## 🌟 Key Features

### 🎨 Smart Name Generation
- **Professional Algorithm**: Names start with **father's first letter** and end with **mother's last letters**
- **Phonetic Analysis**: Advanced sound similarity matching
- **Cultural Context**: Uzbek and Russian alphabets support
- **Random Variation**: Different recommendations each time
- **Scoring System**: Transparent 150+ point scoring

### 💳 Payment Integration
- **One-time Premium**: 5,555 UZS - Lifetime access
- **Multiple Providers**: Click, Payme, UzCard
- **Secure Transactions**: Professional error handling

### 🤖 Telegram Bot Features
- Name meaning search
- Personalized recommendations
- Trend analysis
- Quiz-based profiling
- Premium content access

## 🚀 Project Overview

This is a premium Telegram bot with advanced payment integration that has been fully migrated from MongoDB to PostgreSQL. The bot supports multiple payment providers and includes a sophisticated name recommendation system.

### ✨ Recent Updates (v2.0.0)
- ✅ **Professional Name Matching**: Father's first letter + Mother's ending letters
- ✅ **Phonetic Groups**: 11 phonetic similarity groups
- ✅ **Random Shuffle**: New names every time
- ✅ **Score System**: 50+ points for first letter, 40+ for ending match
- ✅ **API Ready**: generatePersonalizedNames endpoint
- ✅ **Code Quality**: Senior-level refactoring

## 🏗️ Database Schema

### PostgreSQL Tables:
- `users` - User management with Telegram integration
- `plans` - Subscription plans and pricing
- `transactions` - Payment transactions tracking
- `user_cards` - User payment cards management
- `user_subscriptions` - Active subscriptions
- `user_payments` - Payment history

## 💳 Payment Providers

### 1. **Click** 
- One-time payments ✅
- Subscription payments ✅
- Webhook integration ✅

### 2. **Payme**
- JSON-RPC API integration ✅
- Transaction management ✅
- Webhook support ✅

### 3. **UzCard**
- API integration ✅
- Card management ✅
- One-time payments ✅

## 🔧 Tech Stack

- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL + TypeORM
- **Bot Framework**: Grammy (Telegram Bot API)
- **Payment**: Click, Payme, UzCard APIs
- **Validation**: Class Validator
- **Logging**: Winston Logger

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/kamol0815/ism.git
cd ism

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
pnpm run migration:run

# Start the application
pnpm run start:dev
```

### Environment Variables

```env
# Database
POSTGRES_URI=postgres://user:password@host:port/database

# Bot Configuration
BOT_TOKEN=your_telegram_bot_token
APP_PORT=8980
BASE_URL=your_server_url

# Payment Providers
PAYME_MERCHANT_ID=your_payme_merchant_id
PAYME_PASSWORD=your_payme_password
CLICK_SERVICE_ID=your_click_service_id
CLICK_SECRET=your_click_secret
UZCARD_LOGIN=your_uzcard_login
UZCARD_PASSWORD=your_uzcard_password
```

## 📊 Key Features

- 🤖 **Telegram Bot**: Full-featured bot with subscription management
- 💰 **Multiple Payments**: Support for 3 major payment providers
- 📱 **Mobile Friendly**: Optimized payment flows for mobile users
- �� **Secure**: Professional security measures and validation
- 📈 **Scalable**: TypeORM with proper database design
- 📋 **Logging**: Comprehensive logging for debugging and monitoring

## 🔍 API Endpoints

- `POST /api/payme` - Payme webhook endpoint
- `POST /api/click` - Click webhook endpoint
- `GET /api/uzcard-api/*` - UzCard API endpoints
- `GET /api/payment-link/*` - Payment link generation
- `POST /api/subscription/*` - Subscription management

## 🛠️ Development

### Database Operations

```bash
# Generate migration
pnpm run migration:generate

# Run migrations
pnpm run migration:run

# Revert migration
pnpm run migration:revert
```

### Testing

```bash
# Run tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

## 🏆 Migration Achievements

- **51 files changed** with comprehensive refactoring
- **9,709 insertions, 3,287 deletions** - major codebase improvement
- **100% MongoDB removal** - no legacy code remaining
- **Professional error handling** - production-ready code
- **Enhanced logging** - debugging and monitoring capabilities
- **TypeORM integration** - modern ORM with proper relationships
- **UUID support** - PostgreSQL best practices

## 🔗 Links

- [Repository](https://github.com/kamol0815/ism)
- [Issues](https://github.com/kamol0815/ism/issues)

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using NestJS, PostgreSQL, and TypeORM**
