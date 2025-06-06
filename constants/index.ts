export const Images = {
  bg: require("../assets/images/bg.jpeg"),
};

export const transactions = [
  {
    id: "txn_001",
    description: "Wallet funded via bank transfer",
    amount: "20.00",
    status: "successful",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-22",
    time: "08:45 AM",
  },
  {
    id: "txn_002",
    description: "Purchased RMB at ¥140.00 rate",
    amount: "140.00",
    status: "completed",
    direction: "outgoing",
    type: "rmb purchase",
    recipient: "Zhou Wei",
    date: "2025-05-21",
    time: "03:10 PM",
  },
  {
    id: "txn_003",
    description: "Electricity bill payment",
    amount: "35.00",
    status: "successful",
    direction: "outgoing",
    type: "bill payment",
    recipient: "Ikeja Electric",
    date: "2025-05-20",
    time: "10:22 AM",
  },
  {
    id: "txn_004",
    description: "Withdrawal to bank account",
    amount: "200.00",
    status: "pending",
    direction: "outgoing",
    type: "withdrawal",
    date: "2025-05-19",
    time: "06:30 PM",
  },
  {
    id: "txn_005",
    description: "Wallet funded via USSD",
    amount: "50.00",
    status: "completed",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-18",
    time: "07:15 AM",
  },
  {
    id: "txn_006",
    description: "Purchased RMB at low rate",
    amount: "100.00",
    status: "successful",
    direction: "outgoing",
    type: "rmb purchase",
    recipient: "Liu Peng",
    date: "2025-05-18",
    time: "02:45 PM",
  },
  {
    id: "txn_016",
    description: "Got paid for freelance job",
    amount: "300.00",
    status: "successful",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-18",
    time: "09:00 PM",
  },
  {
    id: "txn_017",
    description: "Netflix subscription",
    amount: "12.99",
    status: "completed",
    direction: "outgoing",
    type: "bill payment",
    recipient: "Netflix",
    date: "2025-05-18",
    time: "11:00 PM",
  },
  {
    id: "txn_007",
    description: "Airtime top-up (MTN)",
    amount: "15.00",
    status: "completed",
    direction: "outgoing",
    type: "bill payment",
    recipient: "MTN Nigeria",
    date: "2025-05-17",
    time: "11:30 AM",
  },
  {
    id: "txn_008",
    description: "Received refund for failed transaction",
    amount: "30.00",
    status: "successful",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-17",
    time: "01:05 PM",
  },
  {
    id: "txn_018",
    description: "Gifted funds from friend",
    amount: "100.00",
    status: "successful",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-17",
    time: "06:20 PM",
  },
  {
    id: "txn_009",
    description: "Withdrew to Opay",
    amount: "75.00",
    status: "completed",
    direction: "outgoing",
    type: "withdrawal",
    date: "2025-05-16",
    time: "05:00 PM",
  },
  {
    id: "txn_010",
    description: "Utility bill payment",
    amount: "60.00",
    status: "pending",
    direction: "outgoing",
    type: "bill payment",
    recipient: "Abuja DisCo",
    date: "2025-05-15",
    time: "09:15 AM",
  },
  {
    id: "txn_011",
    description: "Purchased RMB at discount rate",
    amount: "120.00",
    status: "successful",
    direction: "outgoing",
    type: "rmb purchase",
    recipient: "Chen Mei",
    date: "2025-05-14",
    time: "12:30 PM",
  },
  {
    id: "txn_012",
    description: "DSTV subscription payment",
    amount: "20.00",
    status: "completed",
    direction: "outgoing",
    type: "bill payment",
    recipient: "Multichoice",
    date: "2025-05-13",
    time: "04:45 PM",
  },
  {
    id: "txn_013",
    description: "Wallet top-up via mobile",
    amount: "80.00",
    status: "successful",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-13",
    time: "07:50 AM",
  },
  {
    id: "txn_014",
    description: "Purchased RMB quick trade",
    amount: "95.00",
    status: "completed",
    direction: "outgoing",
    type: "rmb purchase",
    recipient: "Zhang Yi",
    date: "2025-05-12",
    time: "03:05 PM",
  },
  {
    id: "txn_015",
    description: "Water bill payment",
    amount: "18.00",
    status: "successful",
    direction: "outgoing",
    type: "bill payment",
    recipient: "Lagos Water Corp",
    date: "2025-05-12",
    time: "08:10 AM",
  },
  {
    id: "txn_019",
    description: "Wallet funded via Flutterwave",
    amount: "60.00",
    status: "completed",
    direction: "incoming",
    type: "wallet fund",
    date: "2025-05-12",
    time: "06:55 PM",
  },
];

export const gradientColors = {
  from: "rgba(46, 58, 89, 0.4)",
  to: "rgba(76, 90, 114, 0.5)",
};

export const greens = {
  from: "#042f28",
  through: "#9bf2c8",
  to: "#b0f3d2",
};

export const gradientGreens = {
  from: "rgba(4, 47, 40, 0.5)",
  through: "rgba(155, 242, 200, 0.5)",
  to: "rgba(176, 243, 210, 0.5)",
};

export const colors = {
  primary: "#4F46E5", // Main action (buttons, links)
  secondary: "#10B981", // Secondary action

  // Backgrounds & surfaces
  background: "#F9FAFB", // App/page background
  surface: "#FFFFFF", // Cards, modals, sheets

  from: "#2E3A59",
  to: "#4C5A72",

  // Borders & separators
  border: "#E5E7EB", // Input borders, dividers

  // Text
  textPrimary: "#111827", // Main text
  textSecondary: "#6B7280", // Captions, secondary labels

  // Accent & status
  accent: "#F59E0B", // Highlights, tags
  error: "#EF4444", // Errors, destructive actions
  success: "#22C55E", // Successful actions
  warning: "#F97316", // Warnings, alerts
  info: "#3B82F6", // Tips, neutral messages
};
