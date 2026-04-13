import React from "react"

const Topbar = () => {
  return (
    <div>
      <div className="border-b">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="rounded bg-primary px-4 py-2 text-sm text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
