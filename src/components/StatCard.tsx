import { Card, CardContent, Typography } from '@mui/material';

interface StatCardProps {
  title: string;
  value: number;
  color: string;
}

function StatCard({ title, value, color }: StatCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        flex: 1,
        minWidth: 150,
        borderColor: color,
        borderWidth: 1,
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" sx={{ color, fontWeight: 'bold', mt: 1 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;