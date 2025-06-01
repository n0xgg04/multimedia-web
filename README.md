# Multimedia Web (not a final project)

A modern, full-stack social multimedia platform built with Next.js, featuring rich content sharing, user interactions, and community management capabilities.

## 🚀 Features

### Core Features
- **User Authentication & Authorization** - Secure user registration and login system
- **Rich Content Publishing** - Create and share multimedia posts with attachments
- **Social Interactions** - Like, comment, and engage with community content
- **User Profiles** - Customizable user profiles with profile pictures
- **Organization Management** - Create and manage organizations with ratings and followers
- **Content Categorization** - Organize posts by categories for better discovery
- **Real-time Updates** - Dynamic content updates and notifications

### Advanced Features
- **Follow System** - Follow users and organizations for personalized feeds
- **Content Moderation** - Hide or delete inappropriate content
- **View Tracking** - Analytics for post views and engagement
- **Permission Controls** - Granular control over comments and likes

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with Compiler optimization
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Mantine** - Modern React components library
- **Motion** - Smooth animations and transitions

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Prisma** - Type-safe database ORM
- **Kysely** - SQL query builder
- **Row Level Security** - Database-level security policies

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS preprocessing
- **Turbopack** - Fast development builds
- **React Query** - Server state management
- **Zustand** - Client state management

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- PostgreSQL database (via Supabase)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/n0xgg04/multimedia-web.git
cd multimedia-web
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="your-postgresql-connection-string"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
```

### 4. Database Setup
```bash
# Generate Prisma client
pnpm prisma:generate

# Push database schema
pnpm prisma:db:push

# Generate Supabase types
pnpm supabase:generate
```

### 5. Run the Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
multimedia-web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (api)/          # API routes
│   │   └── (fe)/           # Frontend routes
│   │       ├── (public)/   # Public pages (landing, auth, blog)
│   │       └── (protected)/ # Protected pages (profile, dashboard)
│   ├── components/         # Reusable UI components
│   ├── shared/            # Shared utilities and providers
│   ├── styles/            # Global styles and CSS
│   └── generated/         # Generated Prisma/Kysely types
├── prisma/                # Database schema and migrations
├── supabase/             # Supabase configuration
└── public/               # Static assets
```

## 🧩 Available Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm prisma:generate` - Generate the Prisma client
- `pnpm prisma:db:push` - Push the schema to the database
- `pnpm supabase:generate` - Generate Supabase TypeScript types

## 🔐 Authentication & Authorization

The application implements a multi-role authentication system:

- **Students** - Basic users who can create posts and interact with content
- **Teachers** - Educators with enhanced privileges
- **Organizations** - Institutional accounts with special features
- **Admins** - Full administrative access

## 🛡️ Security Features

- Row Level Security (RLS) policies in Supabase
- Type-safe database operations with Prisma
- Input validation with Zod schemas
- Secure authentication flows
- Protected routes and API endpoints

## 🎨 UI/UX Features

- Smooth animations and transitions
- Modern, clean interface
- Accessible components
- Toast notifications for user feedback

## 📸 Media Management

- Image upload and management
- Optimized media delivery
- Support for multiple file types
- Automatic image optimization
- Responsive image components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the documentation
- Review existing discussions

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

---

Built with ❤️ using Next.js and modern web technologies.

##### Preview:
<img src="https://ibb.co/7xKwp8Bk" alt="N"/>



