const stats = [
  { label: 'Years of Service', value: '5+' },
  { label: 'Number of Patients Served', value: '100+' },
  { label: 'Days of Availability Within a Week', value: '6' },
  { label: 'Fast Response Time', value: '<5 mins' },
];

export function StatsStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-main grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
            <p className="text-3xl font-bold text-brand-700">{stat.value}</p>
            <p className="mt-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}