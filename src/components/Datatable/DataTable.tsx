import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export default function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const handleSelect = (row: T) => {
    let newSelection: T[];
    if (selectable) {
      if (selectedRows.includes(row)) {
        newSelection = selectedRows.filter((r) => r !== row);
      } else {
        newSelection = [...selectedRows, row];
      }
      setSelectedRows(newSelection);
      onRowSelect?.(newSelection);
    }
  };

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;
    const direction =
      sortConfig.key === column.dataIndex && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key: column.dataIndex, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }

  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {selectable && <th className="p-2 border border-gray-200">Select</th>}
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                onClick={() => handleSort(col)}
                className={`p-2 border border-gray-200 text-left cursor-${
                  col.sortable ? "pointer" : "default"
                }`}
              >
                {col.title}
                {sortConfig.key === col.dataIndex && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className={`hover:bg-gray-50 ${
                selectedRows.includes(row) ? "bg-blue-100" : ""
              }`}
            >
              {selectable && (
                <td className="p-2 border border-gray-200 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleSelect(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="p-2 border border-gray-200">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
