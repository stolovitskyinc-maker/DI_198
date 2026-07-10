export default function LoadingSpinner({ fullScreen = true, label }) {
  return (
    <div className={fullScreen ? 'fixed inset-0 flex flex-col items-center justify-center gap-3' : 'flex flex-col items-center justify-center gap-3 py-16'}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-800" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}
