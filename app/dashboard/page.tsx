'use client'
import { useEffect, useState } from 'react'
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper
} from '@mui/material'

type Invoice = {
  id: number
  title: string
  description: string
  status: string
  due_date: string
  total_amount: number
  paid_amount: number
  balance_amount: number
  created_at: string
}

export default function Page() {
  const [invoices, setInvoices] = useState<Invoice[]>([])

  useEffect(() => {
    fetch('https://invoice-django-project.onrender.com/api/v1/invoices/')
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Total</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {invoices.map((inv) => (
            <TableRow key={inv.id}>
                <TableCell>{inv.id}</TableCell>
                <TableCell>{inv.title}</TableCell>
                <TableCell>{inv.status}</TableCell>
                <TableCell>{inv.due_date}</TableCell>
                <TableCell>{inv.total_amount}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    )
}