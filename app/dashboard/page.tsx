'use client'
import { useEffect, useState } from 'react'
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper
} from '@mui/material'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/invoices/`)
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
            <TableRow
                key={inv.id}
                onClick={() => router.push(`/dashboard/${inv.id}`)}
                sx={{ cursor: 'pointer' }}
            >
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