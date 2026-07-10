import { Inbox } from 'lucide-react';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Check back once there is something to show.',
  action = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
