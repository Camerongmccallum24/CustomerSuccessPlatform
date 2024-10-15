import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Customer {
  id: string
  name: string
  email: string
  healthScore: number
}

const customers: Customer[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', healthScore: 85 },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', healthScore: 92 },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', healthScore: 78 },
  { id: '4', name: 'Diana Ross', email: 'diana@example.com', healthScore: 95 },
  { id: '5', name: 'Edward Norton', email: 'edward@example.com', healthScore: 88 },
]

export default function CustomerList() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Customer List</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Health Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                    ${customer.healthScore >= 90 ? 'bg-green-200 text-green-800' :
                      customer.healthScore >= 80 ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'}`}>
                    {customer.healthScore}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to 5 of 5 results
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}