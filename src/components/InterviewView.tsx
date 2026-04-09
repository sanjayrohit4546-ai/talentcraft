import { GeneratedRecruitmentData } from "@/src/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, UserCheck, Heart } from "lucide-react";

export default function InterviewView({ questions }: { questions: GeneratedRecruitmentData["interviewQuestions"] }) {
  const sections = [
    { id: "technical", title: "Technical Proficiency", icon: MessageSquare, data: questions.technical, color: "text-blue-600" },
    { id: "behavioral", title: "Behavioral & Situational", icon: UserCheck, data: questions.behavioral, color: "text-purple-600" },
    { id: "culture", title: "Culture & Values Fit", icon: Heart, data: questions.cultureFit, color: "text-rose-600" },
  ];

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      {sections.map((section) => (
        <section key={section.id} className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-zinc-100 ${section.color}`}>
              <section.icon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {section.data.map((q, i) => (
              <AccordionItem key={i} value={`${section.id}-${i}`} className="border rounded-xl px-4 bg-white shadow-sm">
                <AccordionTrigger className="hover:no-underline py-4 text-left font-medium text-zinc-900">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest">Expected Answer / Key Points</Badge>
                    </div>
                    <p className="text-zinc-600 leading-relaxed bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                      {q.expectedAnswer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}
