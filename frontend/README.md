# College Event Registration Platform - Frontend

A modern React frontend for college event registration built with Vite, TypeScript, and Tailwind CSS.

## Features

- 📱 Mobile-first responsive design
- 🔐 JWT authentication with auto-refresh
- 📋 Event listing and registration
- 📊 User dashboard for tracking registrations
- 🎨 Accessible UI components (shadcn/ui patterns)
- ⚡ Fast development with Vite HMR

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS 3
- React Router DOM v6
- TanStack React Query
- React Hook Form + Zod
- Axios
- Radix UI primitives

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local:
VITE_API_BASE_URL=http://localhost:8000/api
```

### 3. Run Development Server

```bash
npm run dev
```

App will be available at http://localhost:5173

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI components (Button, Input, etc.)
│   │   ├── auth/       # Auth-related components
│   │   └── common/     # Shared components
│   ├── context/        # React Context providers
│   │   └── AuthContext.tsx
│   ├── layouts/        # Page layouts
│   │   └── RootLayout.tsx
│   ├── lib/            # Utilities and helpers
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── pages/          # Page components
│   │   ├── HomePage.tsx
│   │   ├── EventDetailPage.tsx
│   │   ├── RegisterEventPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── SignupPage.tsx
│   ├── services/       # API service layer
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── eventsService.ts
│   │   └── registrationsService.ts
│   ├── types/          # TypeScript definitions
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | HomePage | Public |
| `/event/:id` | EventDetailPage | Public |
| `/login` | LoginPage | Public |
| `/signup` | SignupPage | Public |
| `/register/:id` | RegisterEventPage | Protected |
| `/success` | SuccessPage | Protected |
| `/dashboard` | DashboardPage | Protected |

## API Integration

The frontend uses a centralized API client with:

- **Automatic token management**: Access tokens stored in localStorage
- **Token refresh**: Automatic refresh on 401 errors
- **Error handling**: Consistent error response parsing
- **Type safety**: Full TypeScript types for API responses

### Example API Call

```typescript
import { eventsService } from '@/services';

// In a component with React Query
const { data: events } = useQuery({
  queryKey: ['events'],
  queryFn: () => eventsService.getEvents({ upcoming: true }),
});
```

## Form Validation

Forms use React Hook Form with Zod schemas:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '@/lib/validations';

const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
  resolver: zodResolver(loginSchema),
});
```

## UI Components

Components follow shadcn/ui patterns with:

- Tailwind CSS for styling
- Radix UI primitives for accessibility
- Class Variance Authority for variants

### Adding Components

UI components are in `src/components/ui/`. To add more shadcn/ui components:

1. Create component file in `src/components/ui/`
2. Use Radix primitives where needed
3. Style with Tailwind using `cn()` utility
4. Export from `src/components/ui/index.ts`

## Error Handling Patterns

```tsx
// Loading state
if (isLoading) {
  return <LoadingState message="Loading..." />;
}

// Error state with retry
if (error) {
  return (
    <ErrorState
      title="Failed to load"
      message={getErrorMessage(error)}
      onRetry={() => refetch()}
    />
  );
}

// Empty state
if (!data?.length) {
  return <EmptyState title="No items" description="..." />;
}
```

## Building for Production

```bash
npm run build
```

Output will be in `dist/` folder. Deploy to any static hosting:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Nginx

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `/api` |
| `VITE_APP_ENV` | Environment name | `development` |

## Contributing

1. Follow TypeScript best practices
2. Use functional components with hooks
3. Keep business logic in services, not components
4. Write accessible markup
5. Test on mobile viewports
