import React from "react";
import { useArticle } from "../contexts/ArticleContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { formatCurrency } from "../utils/helpers";

function PriceBreaks() {
  const { article } = useArticle();
  const { price_breaks, unit, currency } = article;

  function createData(price_break, price) {
    return { price_break, price };
  }

  const rows = Object.entries(price_breaks).map(([key, value]) =>
    createData(key, value)
  );
  return (
    <TableContainer>
      <Table sx={{ width: "230px" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography variant="body2">Price breaks</Typography>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.price_break}>
              <StyledTableCell>
                ex {row.price_break} {unit}
              </StyledTableCell>
              <StyledTableCell>
                {formatCurrency(row.price, currency)}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceBreaks;

const StyledTableCell = styled(TableCell)({
  padding: "5px 12px",
  textAlign: "right",
});
