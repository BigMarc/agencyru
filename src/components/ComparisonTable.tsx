import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  solo: boolean;
  agency: boolean;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-4 text-text-secondary font-semibold text-sm">
              Функция
            </th>
            <th className="text-center py-4 px-4 text-text-secondary font-semibold text-sm">
              Самостоятельно
            </th>
            <th className="text-center py-4 px-4 text-accent font-semibold text-sm">
              С Bunny Agency
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-4 text-white text-sm font-medium">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-center">
                {row.solo ? (
                  <Check className="w-5 h-5 text-success inline-block" />
                ) : (
                  <X className="w-5 h-5 text-danger inline-block" />
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {row.agency ? (
                  <Check className="w-5 h-5 text-success inline-block" />
                ) : (
                  <X className="w-5 h-5 text-danger inline-block" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
