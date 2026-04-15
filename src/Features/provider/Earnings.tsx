import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import {
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  TrendingUp,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const Earnings = () => {
  const earningsData = [
    { month: "Jan", earnings: 2400 },
    { month: "Feb", earnings: 3200 },
    { month: "Mar", earnings: 2800 },
    { month: "Apr", earnings: 3600 },
    { month: "May", earnings: 4200 },
    { month: "Jun", earnings: 3900 },
  ]

  const transactions = [
    {
      id: "1",
      date: "Mar 15, 2024",
      customer: "John Smith",
      service: "Plumbing Repair",
      amount: 150,
      status: "Completed",
    },
    {
      id: "2",
      date: "Mar 14, 2024",
      customer: "Emily Brown",
      service: "Emergency Fix",
      amount: 280,
      status: "Completed",
    },
    {
      id: "3",
      date: "Mar 13, 2024",
      customer: "Michael Johnson",
      service: "Installation",
      amount: 420,
      status: "Processing",
    },
    {
      id: "4",
      date: "Mar 12, 2024",
      customer: "Sarah Williams",
      service: "Maintenance",
      amount: 180,
      status: "Completed",
    },
    {
      id: "5",
      date: "Mar 11, 2024",
      customer: "David Lee",
      service: "Consultation",
      amount: 80,
      status: "Pending",
    },
  ]
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Earnings</h1>
          <p className="text-muted-foreground">Track your income</p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <CreditCard className="mr-2 h-4 w-4" />
            Payout Settings
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-green-500 p-6 text-white">
          <div className="mb-2 flex gap-2">
            <DollarSign />
            Total Earnings
          </div>
          <div className="text-4xl font-bold">$8,450</div>
        </div>

        <div className="rounded-xl border p-6">
          <div className="mb-2 flex gap-2">
            <TrendingUp />
            Pending
          </div>
          <div className="text-3xl font-bold">$580</div>
        </div>

        <div className="rounded-xl border p-6">
          <div className="mb-2 flex gap-2">
            <Calendar />
            Next Payout
          </div>
          <div className="text-3xl font-bold">Mar 20</div>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-8 rounded-xl border p-6">
        <h2 className="mb-4 font-semibold">Earnings Overview</h2>

        <div className="mb-4 flex gap-2">
          <button className="rounded bg-primary px-3 py-1 text-white">
            Month
          </button>
          <button className="rounded border px-3 py-1">Week</button>
          <button className="rounded border px-3 py-1">Year</button>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#f97316"
                fill="#f97316"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border">
        <div className="border-b p-4 font-semibold">Recent Transactions</div>

        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left text-sm">Date</th>
              <th className="p-3 text-left text-sm">Customer</th>
              <th className="p-3 text-left text-sm">Service</th>
              <th className="p-3 text-left text-sm">Amount</th>
              <th className="p-3 text-left text-sm">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-3">{t.date}</td>
                <td className="p-3">{t.customer}</td>
                <td className="p-3">{t.service}</td>
                <td className="p-3 font-semibold">${t.amount}</td>
                <td className="p-3">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Earnings
