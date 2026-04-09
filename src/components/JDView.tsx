import { GeneratedRecruitmentData } from "@/src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function JDView({ data }: { data: GeneratedRecruitmentData["jobDescription"] }) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto py-6">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Role Summary</h2>
        <p className="text-zinc-600 leading-relaxed">{data.summary}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Key Responsibilities</h2>
        <ul className="grid gap-3">
          {data.responsibilities.map((item, i) => (
            <li key={i} className="flex gap-3 text-zinc-600">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Requirements & Qualifications</h2>
        <ul className="grid gap-3">
          {data.requirements.map((item, i) => (
            <li key={i} className="flex gap-3 text-zinc-600">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Benefits & Perks</h2>
        <div className="flex flex-wrap gap-2">
          {data.benefits.map((item, i) => (
            <Badge key={i} variant="secondary" className="px-3 py-1 text-sm font-medium">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 italic">
        <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2 not-italic">
          <AlertCircle className="w-5 h-5 text-zinc-400" />
          Our Culture
        </h2>
        <p className="text-zinc-600 leading-relaxed">"{data.cultureStatement}"</p>
      </section>
    </div>
  );
}
