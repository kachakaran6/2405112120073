import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const UrlTable = ({ results }) => (
  <Table className="border-2 ">
    <TableHead className="border-2">
      <TableRow className="border-2">
        <TableCell className="border-2">Original URL</TableCell>
        <TableCell className="border-2">Short URL</TableCell>
        <TableCell className="border-2">Expires At</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {results.map((r, idx) => (
        <TableRow className="border-2" key={idx}>
          <TableCell className="border-2">{r.original}</TableCell>
          <TableCell className="border-2">{r.short}</TableCell>
          <TableCell className="border-2">{r.expiry}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UrlTable;
