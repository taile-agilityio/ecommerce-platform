# United Deals - E-commerce Platform

## Overview

Welcome to United Deals - a modern, full-featured e-commerce web application built with Next.js 16 and React 19. This project demonstrates advanced web development practices including secure authentication with Better Auth, comprehensive form validation, order tracking, and optional payment integration via Stripe.

Key Features:

1. **Advanced Authentication System**
   - Multi-provider authentication (Google OAuth)
   - Traditional email/password credentials
   - Email verification with 6-digit code
   - Retry limitation mechanism
   - Secure session management and middleware protection
   - Protected routes with authorization checks

2. **Product Management**
   - Dynamic product catalog with category filtering
   - Product options selection (size, color, variant)
   - Flash deals with countdown timers
   - Frequently Bought Together recommendations
   - Wishlist functionality with login requirement
   - Product rating system

3. **Shopping Cart & Checkout**
   - Cart quantity adjustment
   - Auto-updating price calculations
   - Pre-filled customer information for logged-in users
   - Multi step checkout process

4. **Deal Management**
   - Enter and participate in product deals
   - Pending/Approved deals tracking
   - Status notification banners
   - Deal-specific product display

5. **Order Tracking**
   - Order progress tracking functionality
   - Multi-stage progress bar (Order Placed → Packaging → On The Road → Delivered)
   - Automatic stage progression based on elapsed time
   - Chronological activity timeline
   - Order ID and billing email validation

6. **Digital Wallet** (optional)
   - Add and manage payment cards
   - Card balance and account status tracking
   - Transaction history with real-time updates
   - Bank transfer and card payment options
   - PIN validation with lock after 3 failed attempts
   - Simulated processing with loading indicators

7. **Account Management**
   - Profile picture upload/update with image optimization
   - Complete profile editing with validation
   - Password change functionality with masking/visibility toggle
   - Address management (add/edit multiple addresses)

8. **Modern UI/UX**
   - Responsive design for all devices
   - Loading states with Suspense and streaming
   - Skeleton loaders for enhanced user experience
   - Intuitive navigation with breadcrumb support
   - Smooth page transitions
   - Error handling with user-friendly messages

9. **Performance Optimized**
   - Server-side rendering (SSR) and Static Site Generation (SSG)
   - Image optimization with Next.js Image component
   - Code splitting and lazy loading
   - Monorepo architecture with Turborepo

This project showcases practical applications of Next.js 16 with TypeScript in a paired programming environment, demonstrating modern e-commerce development practices, secure authentication flows, and production-ready patterns essential for building scalable web applications.

## Timeline

- **Estimation time**: 10 days (3 developers)
- **Start date**: December 15, 2025
- **End date**: December 26, 2025

## Team Size

- 3 Developers:
  - [Luan Vu](mailto:luan.vu@asnet.com.vn)
  - [Nguyen Tra Thao](mailto:nguyen.trathao@asnet.com.vn)
  - [Le Huu Tai](mailto:tai.le@asnet.com.vn)

## Technical Stacks

- **Next.js** v16.0.70
- **React** v19.2.0
- **TypeScript** v5.9.2
- **Better Auth** v1.4.6
- **React Hook Form** v7.68.0
- **Zod** v4.1.13
- **Zustand** v5.0.9
- **TailwindCSS** v4.1.17
- **Shadcn/ui**
- **Storybook** v10.1.5
- **Jest** v30.2.0
- **React Testing Library** v16.3.0
- **Husky** v9.1.7
- **Turborepo** v2.6.1
- **@sendgrid/mail** v8.1.6
- **React Icons** v5.5.0
- **twMerge** v3.4.0
- **ESLint** v9.39.1
- **Prettier** v3.7.4
- **Neon + Hasura** (Database)
- **Doppler** (Environment management)
- **GitHub Actions** (CI/CD)

## Target

The aim of this project is to create and finish a paired programming exercise within a close-to-realistic project environment that utilizes all the technical stacks trainees have acquired, while also developing their ability to collaborate effectively in team settings.

Specific learning objectives:

- Implement Next.js 16 features including App Router, Server Actions, and Server Components
- Apply advanced authentication patterns with Better Auth
- Master form validation using React Hook Form and Zod
- Implement state management with Zustand
- Build reusable UI components with Shadcn/ui and TailwindCSS
- Write comprehensive unit tests with Jest and React Testing Library
- Collaborate using pair programming methodologies
- Manage monorepo structure with Turborepo
- Deploy and maintain CI/CD pipelines with GitHub Actions

## Prerequisite

- **Visual Studio Code** version 1.105.1 or later
- **Node.js** v22.19.0 or later
- **pnpm** v9.0.0 or later
- **Git** for version control
- **Doppler CLI** for environment variable management (optional)

## Folder Structure

```
ecommerce-platform/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── .husky/                  # Git hooks
├── apps/
│   └── web/                 # Main Next.js application
│       ├── public/
│       │   ├── assets/
│       │   ├── fonts/
│       │   └── images/
│       └── src/
│           ├── app/         # Next.js App Router
│           │   ├── (auth)/
│           │   ├── (legal-documentation)/
│           │   └── (workspace)/
│           ├── components/
│           │   └── layout/
│           ├── configs/
│           ├── helpers/
│           ├── hooks/
│           └── providers/
├── packages/
│   ├── api/                 # API client and utilities
│   ├── constants/           # Shared constants
│   ├── eslint-config/       # Shared ESLint configurations
│   ├── hooks/               # Shared React hooks
│   ├── jest-config/         # Shared Jest configurations
│   ├── models/              # Data models and schemas
│   ├── services/            # Business logic services
│   ├── stores/              # Zustand stores
│   ├── types/               # TypeScript type definitions
│   ├── typescript-config/   # Shared TypeScript configurations
│   ├── ui/                  # Shared UI components (Shadcn/ui)
│   └── utils/               # Shared utility functions
├── .editorconfig
├── .eslintignore
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── eslint.config.js
├── husky.config.js
├── meta.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Step by Step to Run This App in Your Local

| Command                                                               | Action                             |
| --------------------------------------------------------------------- | ---------------------------------- |
| `git clone https://github.com/taile-agilityio/ecommerce-platform.git` | Download the source code           |
| `cd ecommerce-platform`                                               | Move to project folder             |
| `pnpm install`                                                        | Install dependencies               |
| `cp .env.example .env.local`                                          | Create environment variables file  |
| _Configure your .env.local file_                                      | Add required environment variables |
| `pnpm build`                                                          | Build the application              |
| `pnpm dev`                                                            | Start development server           |
| **Open new terminal for Storybook**                                   |                                    |
| `pnpm run storybook`                                                  | Run Storybook component library    |
| **Implement unit tests**                                              |                                    |
| `pnpm run test`                                                       | Run unit tests                     |
| `pnpm run test:coverage`                                              | Run tests with coverage report     |

### Environment Variables

Create a `.env.local` file in the `apps/web` directory with the following variables:

```env
# Database
DATABASE_URL=your_neon_database_url

# Better Auth
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com

# Hasura
HASURA_ADMIN_SECRET=your_hasura_admin_secret
HASURA_GRAPHQL_URL=your_hasura_graphql_url
```

**Notes:**

- Contact our team for the .env file.
- The application will run on `http://localhost:3000` by default
- Storybook will run on `http://localhost:6006`

## Features Documentation

### Authentication Features

- **Login**: Email/password and Google OAuth authentication
- **Signup**: Registration with email verification
- **Email Verification**: 6-digit code with resend functionality and retry limits
- **Protected Routes**: Automatic redirection for unauthorized access

### Shopping Features

- **Product Catalog**: Browse products with category filters and search
- **Flash Deals**: Time-limited offers with countdown timers
- **Shopping Cart**: Add/remove items with real-time price updates
- **Wishlist**: Save favorite products (requires login)
- **Checkout**: Multi-step checkout with shipping and payment

### Account Features

- **Profile Management**: Edit personal information and upload profile picture
- **Password Management**: Secure password change with validation
- **Address Book**: Manage multiple shipping addresses
- **Order History**: View complete order details with reorder option

### Payment Features

- **Digital Wallet**: Add cards, track balance, view transaction history
- **Fund Wallet**: Bank transfer or card payment with PIN validation
- **Mock Transactions**: Test PIN "1234" with simulated processing

### Order Features

- **Order Tracking**: Real-time progress with 4-stage tracking
- **Order Timeline**: Chronological activity display
- **Order Support**: Inquiry functionality for order assistance

## Turborepo Commands

This project uses Turborepo for monorepo management:

```bash
# Build all packages
pnpm build

# Build specific package
pnpm build --filter=web

# Development mode for all packages
pnpm dev

# Development mode for specific package
pnpm dev --filter=web

# Run tests across all packages
pnpm test

# Run tests for specific package
pnpm test --filter=@repo/ui

# Lint all packages
pnpm lint

# Format code
pnpm format
```

## Testing

This project uses Jest and React Testing Library for comprehensive testing:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage

# Run tests for specific package
pnpm test --filter=@repo/ui
```

## Contributing

We welcome contributions from all team members. Please follow these guidelines:

1. Create a feature branch from `main`
2. Follow the commit message convention (Conventional Commits)
3. Write tests for new features
4. Ensure all tests pass before submitting PR
5. Request code review from at least one team member
6. Squash commits before merging

## Helpful Links

- [Figma Design](https://www.figma.com/design/ifyMWcsIlTcUzBvE0YmcxR/E-commerce-Open-Source-UI-Design--Community-?node-id=0-1&p=f&t=KdlghPcxFZAkO0UG-0)
- [Jira Board](https://asnet-team-vnz9w16y.atlassian.net/jira/software/projects/KAN/list?jql=project%20%3D%20%22KAN%22%20ORDER%20BY%20created%20DESC)
- [Practice Plan](https://docs.google.com/document/d/1B-N2lHH7Mn1m1geD49PelmJ6lvjgGYwmovszM5PlYtw/edit?tab=t.0#heading=h.no3fp2ha8p7e)
- [Deployment Link]()
- [Storybook Documentation]()
- [Unit test Documentation]()

## Turborepo Resources

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

## Acknowledgments

Special thanks to the training team and mentors and supporters who provided guidance and support throughout this paired programming exercise. This collaborative effort has been instrumental in developing both technical skills and teamwork abilities.
