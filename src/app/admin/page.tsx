"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/sections/admin/stat-card";
import { ADMIN_ORDERS, REVENUE_TREND, CATEGORY_SALES } from "@/lib/data/admin";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import { IndianRupee, ShoppingCart, Users, Package } from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
} from "recharts";

const STATUS_VARIANT: Record<string, "gold" | "sage" | "forest" | "clay" | "outline"> = {
  Pending: "outline",
  Processing: "gold",
  Shipped: "forest",
  Delivered: "sage",
  Cancelled: "clay",
};

const PIE_COLORS = ["#c99a3d", "#8fa382", "#5c7a67", "#b5654a", "#33493c", "#8c8a7a"];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Dashboard</h1>
        <p className="text-sm text-ink-500 mt-1">Overview of store performance</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value="₹4,02,000" change="+12.4%" trend="up" icon={IndianRupee} />
        <StatCard label="Total Orders" value="1,284" change="+8.2%" trend="up" icon={ShoppingCart} />
        <StatCard label="Total Customers" value="6,942" change="+4.1%" trend="up" icon={Users} />
        <StatCard label="Products Sold" value="3,120" change="-2.3%" trend="down" icon={Package} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <Card className="p-6">
          <h3 className="font-display text-lg text-forest-900 mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={REVENUE_TREND}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c99a3d" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#c99a3d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#d8d5c6" vertical={false} />
              <XAxis dataKey="month" stroke="#8c8a7a" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#8c8a7a"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `₹${v / 1000}k`}
              />
              <Tooltip
                formatter={(value) => formatCurrency(Number(value ?? 0))}
                contentStyle={{ borderRadius: 12, border: "1px solid #d8d5c6" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#c99a3d"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-lg text-forest-900 mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={CATEGORY_SALES}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
              >
                {CATEGORY_SALES.map((entry, i) => (
                  <Cell key={entry.name} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value ?? 0}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {CATEGORY_SALES.map((cat, i) => (
              <div key={cat.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-600">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                  />
                  {cat.name}
                </span>
                <span className="text-ink-400">{cat.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent orders */}
      <Card className="p-6">
        <h3 className="font-display text-lg text-forest-900 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06]">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {ADMIN_ORDERS.slice(0, 5).map((order) => (
                <tr key={order.id} className="border-b border-ink-900/[0.04] last:border-0">
                  <td className="py-3 font-mono text-ink-900">{order.id}</td>
                  <td className="py-3 text-ink-700">{order.customer}</td>
                  <td className="py-3 text-ink-500">{formatDate(order.date)}</td>
                  <td className="py-3">
                    <Badge variant={STATUS_VARIANT[order.status]}>{order.status}</Badge>
                  </td>
                  <td className="py-3 text-right font-mono text-ink-900">
                    {formatCurrency(order.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
