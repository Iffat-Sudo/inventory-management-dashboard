interface StatCardProps {
  title: string;
  value: number;
  color: string;
}

function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: `1px solid ${color}`,
        borderRadius: '8px',
        padding: '20px',
        flex: 1,
        minWidth: '150px',
      }}
    >
      <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{title}</p>
      <h2 style={{ margin: '8px 0 0', color: color }}>{value}</h2>
    </div>
  );
}

export default StatCard;