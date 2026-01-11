// Example data - anonymized for public repository

export interface Token {
  id: string;
  name: string;
  symbol: string;
  image: string;
  marketCap: number;
  priceChange: number;
  description?: string;
  holders: number;
  bondingProgress: number;
  targetMc: number;
}

export interface TokenMechanic {
  id: string;
  icon: string;
  title: string;
  description: string;
  available: boolean;
}

export interface ChatMessage {
  id: string;
  time: string;
  user: string;
  message: string;
}

export interface Notification {
  id: string;
  type: 'sold' | 'purchased';
  title: string;
  description: string;
  date: string;
}

// Example data - anonymized
export const trendingTokens: Token[] = [
  {
    id: "example-1",
    name: "Example Token 1",
    symbol: "EX1",
    image: "https://via.placeholder.com/200",
    marketCap: 10000,
    priceChange: 5.5,
    description: "Example token description",
    holders: 100,
    bondingProgress: 15,
    targetMc: 100000,
  },
  {
    id: "example-2",
    name: "Example Token 2",
    symbol: "EX2",
    image: "https://via.placeholder.com/200",
    marketCap: 8500,
    priceChange: -2.3,
    description: "Example token description",
    holders: 85,
    bondingProgress: 12,
    targetMc: 100000,
  },
];

export const liveTokens: Token[] = [
  {
    id: "live-1",
    name: "New Token 1",
    symbol: "NEW1",
    image: "https://via.placeholder.com/200",
    marketCap: 5000,
    priceChange: 10.2,
    description: "Recently launched token",
    holders: 50,
    bondingProgress: 8,
    targetMc: 100000,
  },
];

export const tokenMechanics: TokenMechanic[] = [
  {
    id: "1",
    icon: "https://via.placeholder.com/24",
    title: "Buyback",
    description: "Auto buy & burn from fees",
    available: true,
  },
  {
    id: "2",
    icon: "https://via.placeholder.com/24",
    title: "Burn",
    description: "Deflationary token burns",
    available: true,
  },
  {
    id: "3",
    icon: "https://via.placeholder.com/24",
    title: "Airdrop",
    description: "Rewards to holders",
    available: true,
  },
  {
    id: "4",
    icon: "https://via.placeholder.com/24",
    title: "Auto LP",
    description: "Automatic liquidity adding",
    available: true,
  },
];

export const chatMessages: ChatMessage[] = [
  { id: "1", time: "12:00 PM", user: "User1", message: "Hello" },
  { id: "2", time: "12:01 PM", user: "User2", message: "Hi there!" },
];

export const notifications: Notification[] = [
  {
    id: "1",
    type: "purchased",
    title: "Token Purchased",
    description: "Example purchase description",
    date: "01/01/2024",
  },
];

export const navItems = [
  { icon: "https://via.placeholder.com/24", label: "Launchpad", href: "/" },
  { icon: "https://via.placeholder.com/24", label: "Agent", href: "/agent" },
  { icon: "https://via.placeholder.com/24", label: "Trending", href: "/trending" },
];

export const terminalLines = [
  { text: "INITIALIZING SYSTEM...", status: "[OK]" },
  { text: "LOADING DATA...", status: "[OK]" },
  { text: "SYSTEM READY", status: "" },
];
