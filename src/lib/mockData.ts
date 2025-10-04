export interface Issue {
  id: string;
  title: string;
  description: string;
  status: "active" | "stale" | "released" | "unclaimed";
  claimedBy?: string;
  claimedAt?: Date;
  lastActivity?: Date;
  priority: "low" | "medium" | "high";
  category: string;
  nudges?: Array<{
    id: string;
    message: string;
    sentAt: Date;
    acknowledged: boolean;
  }>;
}

export const mockIssues: Issue[] = [
  {
    id: "1",
    title: "Add dark mode support to dashboard",
    description: "Implement a toggle for dark/light mode with persistent user preference",
    status: "active",
    claimedBy: "current-user",
    claimedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    priority: "high",
    category: "Feature",
  },
  {
    id: "2",
    title: "Fix authentication bug in login flow",
    description: "Users are unable to login with special characters in password",
    status: "stale",
    claimedBy: "current-user",
    claimedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    priority: "high",
    category: "Bug",
    nudges: [
      {
        id: "n1",
        message: "Hey! Just checking in on the authentication bug fix. Any progress?",
        sentAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        acknowledged: false,
      },
    ],
  },
  {
    id: "3",
    title: "Optimize database query performance",
    description: "Slow queries on the user dashboard are affecting page load times",
    status: "stale",
    claimedBy: "sarah_dev",
    claimedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
    priority: "medium",
    category: "Performance",
    nudges: [
      {
        id: "n2",
        message: "Hi Sarah! This issue has been quiet for a while. Need any help?",
        sentAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        acknowledged: false,
      },
    ],
  },
  {
    id: "4",
    title: "Add TypeScript support to API routes",
    description: "Migrate existing JavaScript API routes to TypeScript for better type safety",
    status: "unclaimed",
    priority: "medium",
    category: "Refactor",
  },
  {
    id: "5",
    title: "Implement email notifications",
    description: "Send email notifications for important user events",
    status: "unclaimed",
    priority: "low",
    category: "Feature",
  },
  {
    id: "6",
    title: "Update documentation for API v2",
    description: "Comprehensive docs update for the new API version",
    status: "released",
    claimedBy: "alex_writer",
    claimedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
    priority: "medium",
    category: "Documentation",
    nudges: [
      {
        id: "n3",
        message: "This issue has been stale for too long. We're releasing the claim to allow others to work on it.",
        sentAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        acknowledged: false,
      },
    ],
  },
  {
    id: "7",
    title: "Add unit tests for auth module",
    description: "Increase test coverage for authentication-related code",
    status: "active",
    claimedBy: "mike_tester",
    claimedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    priority: "high",
    category: "Testing",
  },
  {
    id: "8",
    title: "Improve mobile responsiveness",
    description: "Several pages don't render properly on mobile devices",
    status: "unclaimed",
    priority: "high",
    category: "Bug",
  },
];
