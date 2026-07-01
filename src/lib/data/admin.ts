export interface AdminOrder {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  total: number;
  items: number;
}

export const ADMIN_ORDERS: AdminOrder[] = [
  { id: "VYD10234", customer: "Priya Sharma", email: "priya.s@example.com", date: "2026-06-28", status: "Processing", total: 1548, items: 2 },
  { id: "VYD10233", customer: "Rohit Verma", email: "rohit.v@example.com", date: "2026-06-28", status: "Pending", total: 899, items: 1 },
  { id: "VYD10232", customer: "Ananya Iyer", email: "ananya.i@example.com", date: "2026-06-27", status: "Shipped", total: 2247, items: 3 },
  { id: "VYD10231", customer: "Karan Malhotra", email: "karan.m@example.com", date: "2026-06-27", status: "Delivered", total: 449, items: 1 },
  { id: "VYD10230", customer: "Sneha Reddy", email: "sneha.r@example.com", date: "2026-06-26", status: "Delivered", total: 1298, items: 2 },
  { id: "VYD10229", customer: "Vikram Joshi", email: "vikram.j@example.com", date: "2026-06-26", status: "Cancelled", total: 749, items: 1 },
  { id: "VYD10228", customer: "Meera Nair", email: "meera.n@example.com", date: "2026-06-25", status: "Delivered", total: 3197, items: 4 },
];

export interface AdminCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  joinedDate: string;
}

export const ADMIN_CUSTOMERS: AdminCustomer[] = [
  { id: "c1", name: "Priya Sharma", email: "priya.s@example.com", phone: "9876543210", orders: 5, totalSpent: 6420, joinedDate: "2025-11-02" },
  { id: "c2", name: "Rohit Verma", email: "rohit.v@example.com", phone: "9876543211", orders: 2, totalSpent: 1798, joinedDate: "2026-01-15" },
  { id: "c3", name: "Ananya Iyer", email: "ananya.i@example.com", phone: "9876543212", orders: 8, totalSpent: 11240, joinedDate: "2025-08-20" },
  { id: "c4", name: "Karan Malhotra", email: "karan.m@example.com", phone: "9876543213", orders: 1, totalSpent: 449, joinedDate: "2026-06-10" },
  { id: "c5", name: "Sneha Reddy", email: "sneha.r@example.com", phone: "9876543214", orders: 3, totalSpent: 3894, joinedDate: "2026-02-28" },
];

export const REVENUE_TREND = [
  { month: "Jan", revenue: 284000 },
  { month: "Feb", revenue: 312000 },
  { month: "Mar", revenue: 298000 },
  { month: "Apr", revenue: 341000 },
  { month: "May", revenue: 378000 },
  { month: "Jun", revenue: 402000 },
];

export const CATEGORY_SALES = [
  { name: "Immunity", value: 28 },
  { name: "Skin Care", value: 22 },
  { name: "Digestion", value: 18 },
  { name: "Women's Health", value: 16 },
  { name: "Joint Care", value: 10 },
  { name: "Other", value: 6 },
];
