import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Chip,
  Button,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";

function getStatusColor(status: string): "warning" | "info" | "success" {
  if (status === "pending") return "warning";
  if (status === "shipped") return "info";
  return "success";
}

function PurchaseOrders() {
  const orders = useSelector((state: RootState) => state.orders.items);

  return (
    <Box>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Purchase Orders
        </Typography>
        <Button component={Link} to="/orders/new" variant="contained">
          + Add Order
        </Button>
      </Stack>

      {orders.length === 0 ? (
        <Typography color="text.secondary">
          No purchase orders found.
        </Typography>
      ) : (
        <TableContainer component={Paper} variant="outlined" sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order #</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Value (SEK)</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.orderNumber}</TableCell>
                  <TableCell>{order.supplierName}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status)}
                      size="small"
                      sx={{ textTransform: "capitalize" }}
                    />
                  </TableCell>
                  <TableCell>{order.orderValue}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default PurchaseOrders;
