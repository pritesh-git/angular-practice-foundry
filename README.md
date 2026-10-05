# Angular Practice Foundry

> A modern, editorial Angular 22 workshop application showcasing practical frontend patterns: authentication, REST API data management, conversational AI UI, and Server-Side Rendering (SSR).

---

## Overview

**Angular Practice Foundry** is an experimental playground crafted with Angular 22 and Tailwind CSS v4. Designed with an editorial aesthetic—featuring warm paper tones, serif typography, and clean micro-interactions—it provides three focused workspaces to explore real-world Angular patterns without unnecessary boilerplate:

1. **Authentication & Protected Routing**: Functional route guards with SSR compatibility and persistent session handling.
2. **REST API Work**: Live data fetching from ReqRes with in-memory CRUD operations, state transitions, and accessible modal dialogs.
3. **GenAI Chat Interface**: Interactive conversational UI with prompt shortcuts, message history, and responsive composer controls.

---

## Demo Access

To access the workspaces behind the authentication guard, use the built-in demo credentials:

| Field | Value |
| :--- | :--- |
| **Email** | `admin@gmail.com` |
| **Password** | `admin1234` |

---

## Features & Workspaces

### 1. Authentication & Shell
- **Login Experience (`/login`)**: Validated login form with field-level validation and error messaging.
- **SSR-Aware Auth Guard (`authGuard`)**: Checks platform execution context (`isPlatformServer`) to ensure smooth server rendering and redirects unauthenticated users to `/login`.
- **Application Shell (`ShellComponent`)**: Top-level navigation bar with active route indicators, responsive mobile adaptations, and sign-out controls.

### 2. Workspace 01 — Overview (`/dashboard`)
- Central hub providing navigation cards to experimental workspaces.
- Design tokens and field notes emphasizing clean hierarchy and user focus.

### 3. Workspace 02 — API Work (`/api-work`)
- **Live REST API Integration**: Queries `https://reqres.in/api/users` on init with header configurations.
- **Directory Table**: Clean tabular presentation of user profiles with avatars, names, and record IDs.
- **Client-Side CRUD Operations**:
  - **Edit Dialog**: Modal dialog with template-driven form validation to update user records in place.
  - **Delete Confirmation**: Danger-themed confirmation dialog to remove records from the current view.
  - **State Handling**: Comprehensive states for loading spinners, empty views, and fetch error retries.

### 4. Workspace 03 — GenAI Chat (`/genai-chat`)
- **Conversational UI**: Multi-turn message layout with distinct sender styles and formatted timestamps.
- **Prompt Ideas**: One-click quick-start prompt cards for instant conversation priming.
- **Smart Composer**: Auto-expanding textarea with character counter and keyboard shortcuts (`Enter` to submit, `Shift + Enter` for new lines).

---

## Technology Stack

- **Framework**: [Angular 22](https://angular.dev/) (Standalone Components, modern `@if` / `@for` control flow, client hydration)
- **Server-Side Rendering**: `@angular/ssr` powered by [Express 5](https://expressjs.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) supplemented by custom CSS design variables
- **Testing**: [Vitest](https://vitest.dev/) with `jsdom`
- **Language & Tooling**: TypeScript 6, Angular CLI

---

## Project Structure

```text
src/
├── app/
│   ├── pages/
│   │   ├── chat/         # GenAI conversational interface
│   │   ├── dashboard/    # Workspace overview hub
│   │   ├── login/        # Sign-in page with validation
│   │   └── users/        # API integration, table view & CRUD modals
│   ├── shell/            # Main application layout, topbar & navigation
│   ├── auth.guard.ts     # SSR-safe functional route guard
│   ├── auth.service.ts   # Session & authentication management
│   ├── app.config.ts     # Client app configuration & hydration
│   ├── app.config.server.ts # Server-side app configuration
│   ├── app.routes.ts     # Application routing table
│   └── app.ts            # Root application component
├── styles.css            # Tailwind import & custom editorial design tokens
└── main.ts               # Application bootstrap
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- `npm` (v10+ or v11+)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/pritesh-git/angular-practice-foundry.git
cd angular-practice-foundry
npm install
```

### Development Server

Start the local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if source files change.

### Building for Production

Compile the project into production-ready browser and SSR bundles:

```bash
npm run build
```

Build outputs will be stored in `dist/angular-practice-foundry/`.

### Running with SSR (Production Mode)

To run the Node.js / Express SSR server locally after building:

```bash
npm run serve:ssr:angular-practice-foundry
```

### Running Tests

Execute unit tests with Vitest:

```bash
npm test
```

---

## License

This project is licensed under the [MIT License](LICENSE) (or private repository license).
