import { GeneratedRecruitmentData } from "@/src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RubricView({ rubric }: { rubric: GeneratedRecruitmentData["evaluationRubric"] }) {
  return (
    <div className="py-6 overflow-x-auto">
      <Card className="border-zinc-200 shadow-sm min-w-[800px]">
        <CardHeader className="bg-zinc-50/50 border-b">
          <CardTitle className="text-xl">Evaluation Rubric</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-zinc-50/50">
                <TableHead className="w-[150px] font-bold text-zinc-900">Category</TableHead>
                <TableHead className="w-[200px] font-bold text-zinc-900">Criteria</TableHead>
                <TableHead className="font-bold text-rose-600">1 - Poor</TableHead>
                <TableHead className="font-bold text-amber-600">3 - Average</TableHead>
                <TableHead className="font-bold text-emerald-600">5 - Excellent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rubric.map((row, i) => (
                <TableRow key={i} className="hover:bg-zinc-50/30 transition-colors">
                  <TableCell className="font-medium align-top py-6">{row.category}</TableCell>
                  <TableCell className="text-sm text-zinc-500 align-top py-6">{row.criteria}</TableCell>
                  <TableCell className="text-xs leading-relaxed align-top py-6 text-zinc-600">{row.score1}</TableCell>
                  <TableCell className="text-xs leading-relaxed align-top py-6 text-zinc-600">{row.score3}</TableCell>
                  <TableCell className="text-xs leading-relaxed align-top py-6 text-zinc-600">{row.score5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
        <p className="font-medium mb-1">How to use this rubric:</p>
        <p>Use this table to standardize candidate evaluations across different interviewers. Score each category from 1 to 5 based on the descriptions provided to ensure objective and fair assessment.</p>
      </div>
    </div>
  );
}
