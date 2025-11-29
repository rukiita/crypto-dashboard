# Simple Crypto Dashboard
![Kapture 2025-11-25 at 06 27 40](https://github.com/user-attachments/assets/6a9d2ab3-6387-44f0-9ceb-f07f420578ba)


You can access this app from https://crypto-dashboard-seven-psi.vercel.app/

A high-performance cryptocurrency dashboard built with modern React patterns. This project was conceived as a "Level-Up Challenge" following a Todo App, completed within a strict **3-day deadline**.

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Language** | TypeScript |
| **Framework** | Next.js |
| **State/Cache** | TanStack Query, Context API |
| **Hooks** | Custom Hooks (useDebounce, etc.) |
| **UI/UX** | Shadcn UI, Recharts, Tailwind CSS |

## 🎯 The Challenge

**Goal:** Build a production-ready crypto dashboard in 3 days.
**Requirements:**
* Efficient search with `useDebounce`.
* Server State Management with Caching & Error Boundaries.
* Interactive Graphs & Pagination.
* Implementation using Next.js App Router.

---

## 📖 Development Journey & Technical Decisions

### Day 1: Architecture & API Strategy

**1. Routing Strategy: Dashboard vs. Dynamic Routes**
Initially, I considered using Dynamic Routing (`/coins/[id]`) for details. However, I pivoted to a **Single-Page Dashboard architecture** where selecting a coin updates the graph instantly.
* **Reason:** This reduces page transitions and redundant API requests, providing a smoother, app-like UX similar to professional trading platforms.

**2. API Selection: Documentation First**
I evaluated CoinGecko and CoinCap.
* **Challenge:** CoinGecko's documentation was sparse, and WebSocket features were paid.
* **Decision:** Adopted **CoinCap REST API** due to its superior documentation and reliable free tier.
* **Learning:** Thoroughly assessing documentation *before* implementation saves significant debugging time.

**3. State Management: Moving to TanStack Query**
I started with `useEffect` for data fetching but quickly refactored to **TanStack Query**.
* **Reason:** To adhere to React best practices by separating **Server State** from UI State, ensuring scalability and easier onboarding for future team members.

### Day 2: Feature Logic & Architectural Hurdles

**1. Chart Implementation**
Due to the tight deadline, I leveraged AI to prototype the Recharts component, then reverse-engineered the code to fully understand and customize the configuration.

**2. The "Layout vs. State" Dilemma (Major Challenge)**
I faced a difficult architectural decision regarding the Search Bar (Header) and the Chart (Page).
* **Requirement:** Selecting a coin in the Header suggestions should update the Chart in `page.tsx`.
* **Problem:** The Header is located in `layout.tsx` for persistence. Moving it to `page.tsx` would solve the data passing issue but break the layout semantics (the header would unmount on route changes).
* **Resolution:** I realized that `layout.tsx` and `page.tsx` cannot share state via props directly. This highlighted the need for a global state solution.

### Day 3: Solution & Polish

**1. Context API Implementation**
To solve the Day 2 dilemma, I implemented the **Context API** (`SelectedCoinProvider`).
* **Result:** This allowed the `SearchCoinBar` (in Layout) to update the `selectedCoinId`, which the `MarketsChart` (in Page) consumes, preserving the correct layout structure.

**2. Deployment**
Refactored the codebase, fixed type safety issues, and deployed to **Vercel**.

---

## 💡 Key Takeaways & Future Improvements

**Achievements:**
* Successfully simulated a real-world development cycle using **TanStack Query**, **useDebounce**, and **Recharts**.
* Improved debugging skills by effectively analyzing API headers and using strategic logging.
* Balanced the use of AI for speed with critical thinking for architectural decisions.

**Future Improvements:**
* **Deeper TanStack Query Integration:** Utilize features like `keepPreviousData` for smoother pagination UX.
* **Next.js Features:** Explore more App Router specific features like Intercepting Routes.
* **Testing:** Implement **E2E tests** with Playwright (planned as the next step since unit tests were skipped due to time constraints).






