"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ADMIN_CUSTOMERS } from "@/lib/data/admin";
import { formatCurrency, formatDate, getInitials } from "@/lib/utils/format";
import { Search, Mail } from "lucide-react";

export default function AdminCustomersPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      ADMIN_CUSTOMERS.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.email.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Customers</h1>
        <p className="text-sm text-ink-500 mt-1">{ADMIN_CUSTOMERS.length} registered customers</p>
      </div>

      <Card className="p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" />
          <Input
            placeholder="Search customers..."
            className="pl-10 h-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium">Orders</th>
                <th className="p-4 font-medium text-right">Total Spent</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr key={customer.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-sage-400/15 flex items-center justify-center font-display text-xs text-forest-800 shrink-0">
                        {getInitials(customer.name)}
                      </div>
                      <div>
                        <p className="text-ink-900 font-medium">{customer.name}</p>
                        <p className="text-xs text-ink-400">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-ink-500">{customer.phone}</td>
                  <td className="p-4 text-ink-500">{formatDate(customer.joinedDate)}</td>
                  <td className="p-4 text-ink-600">{customer.orders}</td>
                  <td className="p-4 text-right font-mono text-ink-900">
                    {formatCurrency(customer.totalSpent)}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-ink-400 hover:text-forest-900" aria-label="Email customer">
                      <Mail className="h-4 w-4" />
                    </button>
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
