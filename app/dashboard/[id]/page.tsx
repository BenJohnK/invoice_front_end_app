'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

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
  const params = useParams()
  const id = params.id as string

  const [invoice, setInvoice] = useState<Invoice | null>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/invoices/${id}/`)
      .then(res => res.json())
      .then(data => setInvoice(data))
  }, [id])

  if (!invoice) return <div>Loading</div>

  return (
    <div>
      <h2>{invoice.title}</h2>
      <p>{invoice.description}</p>
      <p>Status: {invoice.status}</p>
      <p>Total: {invoice.total_amount}</p>
    </div>
  )
}