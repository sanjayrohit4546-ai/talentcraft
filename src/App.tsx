/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import RecruitmentDashboard from "./components/RecruitmentDashboard";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <RecruitmentDashboard />
      <Toaster position="top-center" />
    </div>
  );
}

