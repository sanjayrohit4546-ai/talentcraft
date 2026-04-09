import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RoleDetails } from "@/src/types";
import { Briefcase, Building2, Users, Target, Sparkles } from "lucide-react";

interface RoleInputFormProps {
  onSubmit: (details: RoleDetails) => void;
  isLoading: boolean;
}

export default function RoleInputForm({ onSubmit, isLoading }: RoleInputFormProps) {
  const [details, setDetails] = useState<RoleDetails>({
    jobTitle: "",
    department: "",
    experienceLevel: "Mid-Level",
    location: "Remote",
    employmentType: "Full-time",
    companyName: "",
    companyCulture: "",
    industry: "",
    keyResponsibilities: "",
    requiredSkills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-zinc-200 shadow-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 text-primary mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">AI Recruitment Engine</span>
        </div>
        <CardTitle className="text-3xl font-bold tracking-tight">Define the Role</CardTitle>
        <CardDescription>
          Provide the core details of the position and your company culture to generate a tailored recruitment package.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">Position Details</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g. Senior Full Stack Engineer"
                  value={details.jobTitle}
                  onChange={(e) => setDetails({ ...details, jobTitle: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  placeholder="e.g. Engineering"
                  value={details.department}
                  onChange={(e) => setDetails({ ...details, department: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Experience Level</Label>
                  <Select
                    value={details.experienceLevel}
                    onValueChange={(v) => setDetails({ ...details, experienceLevel: v })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                      <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                      <SelectItem value="Senior">Senior</SelectItem>
                      <SelectItem value="Lead">Lead</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Employment Type</Label>
                  <Select
                    value={details.employmentType}
                    onValueChange={(v) => setDetails({ ...details, employmentType: v })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Building2 className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">Company Context</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="e.g. TechFlow Inc."
                  value={details.companyName}
                  onChange={(e) => setDetails({ ...details, companyName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g. FinTech, Healthcare"
                  value={details.industry}
                  onChange={(e) => setDetails({ ...details, industry: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g. Remote, New York, NY"
                  value={details.location}
                  onChange={(e) => setDetails({ ...details, location: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">Culture & Requirements</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyCulture">Company Culture & Values</Label>
                <Textarea
                  id="companyCulture"
                  placeholder="Describe your company's work environment, values, and what makes it unique..."
                  className="min-h-[100px]"
                  value={details.companyCulture}
                  onChange={(e) => setDetails({ ...details, companyCulture: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Target className="w-4 h-4" />
                <span className="text-xs font-medium uppercase">Role Specifics</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keyResponsibilities">Key Responsibilities</Label>
                <Textarea
                  id="keyResponsibilities"
                  placeholder="List the main tasks and goals for this position..."
                  className="min-h-[100px]"
                  value={details.keyResponsibilities}
                  onChange={(e) => setDetails({ ...details, keyResponsibilities: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requiredSkills">Required Skills & Qualifications</Label>
                <Textarea
                  id="requiredSkills"
                  placeholder="List technical skills, soft skills, and certifications..."
                  className="min-h-[100px]"
                  value={details.requiredSkills}
                  onChange={(e) => setDetails({ ...details, requiredSkills: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating Recruitment Package...
              </div>
            ) : (
              "Generate Package"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
