import React, { useState } from "react";
import DataTable from "../components/Datatable/DataTable";
import Input from "../components/InputField/InputField";
import type { Column } from "../components/Datatable/DataTable";

interface User {
  name: string;
  age: number;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [
  { name: "John Doe", age: 28, email: "john@example.com" },
  { name: "Jane Smith", age: 34, email: "jane@example.com" },
  { name: "Alice Brown", age: 22, email: "alice@example.com" },
];

export default function DemoApp() {
  const [selected, setSelected] = useState<User[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Demo Showcase</h1>

      <section>
        <h2 className="text-xl mb-2">Input Component</h2>
        <Input
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <section>
        <h2 className="text-xl mb-2">DataTable Component</h2>
        <DataTable<User>
          data={data}
          columns={columns}
          selectable
          onRowSelect={(rows) => setSelected(rows)}
        />
        {selected.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">
            Selected: {selected.map((u) => u.name).join(", ")}
          </p>
        )}
      </section>
    </div>
  );
}
