export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold">{title}</h2>

      {subtitle && (
        <p className="text-muted mt-3">{subtitle}</p>
      )}
    </div>
  );
}