export interface RoleDetails {
  jobTitle: string;
  department: string;
  experienceLevel: string;
  location: string;
  employmentType: string;
  companyName: string;
  companyCulture: string;
  industry: string;
  keyResponsibilities: string;
  requiredSkills: string;
}

export interface GeneratedRecruitmentData {
  jobDescription: {
    summary: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    cultureStatement: string;
  };
  screeningCriteria: {
    mustHave: string[];
    niceToHave: string[];
    redFlags: string[];
  };
  interviewQuestions: {
    technical: { question: string; expectedAnswer: string }[];
    behavioral: { question: string; expectedAnswer: string }[];
    cultureFit: { question: string; expectedAnswer: string }[];
  };
  evaluationRubric: {
    category: string;
    criteria: string;
    score1: string;
    score3: string;
    score5: string;
  }[];
  complianceCheck: {
    status: 'compliant' | 'warning';
    suggestions: string[];
  };
}
