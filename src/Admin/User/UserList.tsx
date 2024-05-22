import React, { useState } from 'react';

interface UserData {
  username: string;
  categories: string;
  population: number;
  size: number;
}

const UserList: React.FC<{ user: UserData }> = ({ user }) => {
  // Define columns
  const columns = [
    { id: 'username', label: 'Username', minWidth: 170 },
    { id: 'categories', label: 'Categories', minWidth: 170 },
  ];

  // Create data row
  const rows = user
    ? [{ username: user.username, categories: user.categories }]
    : [];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="max-h-440 overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.id} className="min-w-[170px] text-left">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {columns.map((column) => (
                    <td key={column.id} className="text-right">
                      {row[column.id as keyof typeof row]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="p-3">
        <span className="ml-2">
          {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length}
        </span>
      </div>
    </div>
  );
};

export default UserList;
