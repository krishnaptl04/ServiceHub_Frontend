import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Ban,
  Mail,
  MoreVertical,
  Phone,
  Search,
  Shield,
  UserPlus,
} from "lucide-react"

const UserManagement = () => {
  const users = [
    {
      id: "1",
      name: "John Customer",
      email: "customer@test.com",
      phone: "+1 234-567-8901",
      role: "customer",
      status: "active",
      joinDate: "2024-01-15",
      activity: "12 bookings",
    },
    {
      id: "2",
      name: "Sarah Provider",
      email: "provider@test.com",
      phone: "+1 234-567-8902",
      role: "provider",
      status: "active",
      joinDate: "2024-02-01",
      activity: "$3200 earned",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.j@example.com",
      phone: "+1 234-567-8903",
      role: "provider",
      status: "active",
      joinDate: "2024-01-20",
      activity: "$5400 earned",
    },
  ]

  const getRoleBadge = (role: string) => {
    if (role === "admin") return "bg-purple-100 text-purple-700"
    if (role === "provider") return "bg-green-100 text-green-700"
    return "bg-blue-100 text-blue-700"
  }

  const getStatusBadge = (status: string) => {
    if (status === "active") return "bg-green-100 text-green-700"
    if (status === "suspended") return "bg-red-100 text-red-700"
    return "bg-slate-100 text-slate-700"
  }
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage all platform users</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <StatCard title="Total Users" value="5" />
        <StatCard title="Customers" value="3" />
        <StatCard title="Providers" value="2" />
        <StatCard title="Admins" value="1" />
      </div>

      {/* Filters UI (no logic) */}
      <div className="mb-6 rounded-xl border bg-white p-6 dark:bg-slate-800">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full rounded-lg border py-3 pr-4 pl-10"
            />
          </div>

          <div className="flex gap-3">
            <select className="rounded-lg border px-4 py-3">
              <option>All Roles</option>
              <option>Customers</option>
              <option>Providers</option>
              <option>Admins</option>
            </select>

            <select className="rounded-lg border px-4 py-3">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-white dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs">User</th>
                <th className="px-6 py-3 text-left text-xs">Contact</th>
                <th className="px-6 py-3 text-left text-xs">Role</th>
                <th className="px-6 py-3 text-left text-xs">Status</th>
                <th className="px-6 py-3 text-left text-xs">Join Date</th>
                <th className="px-6 py-3 text-left text-xs">Activity</th>
                <th className="px-6 py-3 text-right text-xs">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-medium">{user.name}</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {user.phone}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${getRoleBadge(user.role)}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${getStatusBadge(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm">{user.joinDate}</td>

                  <td className="px-6 py-4 text-sm">{user.activity}</td>

                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                          <Ban className="mr-2 h-4 w-4" />
                          Suspend User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: any) {
  return (
    <div className="rounded-xl border bg-white p-6 dark:bg-slate-800">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default UserManagement
