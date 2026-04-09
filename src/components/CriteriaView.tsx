import { GeneratedRecruitmentData } from "@/src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, HelpCircle, XCircle, AlertTriangle } from "lucide-react";

export default function CriteriaView({ 
  criteria, 
  compliance 
}: { 
  criteria: GeneratedRecruitmentData["screeningCriteria"],
  compliance: GeneratedRecruitmentData["complianceCheck"]
}) {
  return (
    <div className="space-y-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
              Must-Have
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {criteria.mustHave.map((item, i) => (
                <li key={i} className="text-sm text-emerald-900/80 flex gap-2">
                  <span className="font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-100 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
              <HelpCircle className="w-5 h-5" />
              Nice-to-Have
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {criteria.niceToHave.map((item, i) => (
                <li key={i} className="text-sm text-blue-900/80 flex gap-2">
                  <span className="font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-rose-100 bg-rose-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-rose-700">
              <XCircle className="w-5 h-5" />
              Red Flags
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {criteria.redFlags.map((item, i) => (
                <li key={i} className="text-sm text-rose-900/80 flex gap-2">
                  <span className="font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className={`border-2 ${compliance.status === 'warning' ? 'border-amber-200 bg-amber-50' : 'border-zinc-100 bg-zinc-50'}`}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertTriangle className={`w-6 h-6 ${compliance.status === 'warning' ? 'text-amber-500' : 'text-zinc-400'}`} />
            Diversity & Compliance Check
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant={compliance.status === 'compliant' ? 'default' : 'destructive'}>
              {compliance.status.toUpperCase()}
            </Badge>
            <span className="text-sm text-zinc-600">
              {compliance.status === 'compliant' 
                ? "This recruitment package follows standard diversity and inclusion guidelines."
                : "Some areas may need adjustment to ensure full compliance and inclusivity."}
            </span>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Suggestions for Improvement</h4>
            <ul className="space-y-2">
              {compliance.suggestions.map((item, i) => (
                <li key={i} className="text-sm text-zinc-700 flex gap-2">
                  <span className="text-zinc-400">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
