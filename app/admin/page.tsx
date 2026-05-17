export default function AdminPage() {
  return <div className="space-y-6"><h1 className="text-4xl font-bold">Admin Panel</h1><div className="grid md:grid-cols-3 gap-4"><div className="glass p-5">Manage users</div><div className="glass p-5">Manage plans & Stripe products</div><div className="glass p-5">Adjust credits & moderation</div></div><div className="glass p-6">Analytics, render queue oversight, failed job retries, and billing management console.</div></div>;
}
