import React, { useState } from 'react';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

function createData(name: string, code: string, population: number, size: number) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const UserList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

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
              .map((row) => {
                return (
                  <tr key={row.code} className="hover:bg-gray-100">
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <td key={column.id} className="text-right">
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="p-3">
        <select
          className="py-1 px-2 border border-gray-300 rounded"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          {[5, 10].map((value) => (
            <option key={value} value={value}>
              {value} rows
            </option>
          ))}
        </select>
        <span className="ml-2">
          {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length}
        </span>
        <button
          onClick={() => handleChangePage(null, page - 1)}
          disabled={page === 0}
          className="py-1 px-2 ml-2 border border-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handleChangePage(null, page + 1)}
          disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
          className="py-1 px-2 ml-2 border border-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
