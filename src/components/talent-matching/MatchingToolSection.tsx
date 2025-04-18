
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TalentMatchingContainer from "./TalentMatchingContainer";
import AnalyticsTabContent from "./analytics/AnalyticsTabContent";
import { Sparkles } from "lucide-react";
import { SectionCard, SectionHeader } from "@/components/ui/section-card";
import ImportForm from "./data-acquisition/ImportForm";

const MatchingToolSection: React.FC = () => {
  return (
    <SectionCard>
      <SectionHeader 
        title="AI Job Matching Tool" 
        icon={<Sparkles className="h-5 w-5 text-adept" />} 
      />
      
      <Tabs defaultValue="matching" className="w-full ">
      <TabsList className="w-full max-w-3xl h-[50px] mx-auto mb-6 bg-background border border-border  rounded-lg flex flex-wrap shadow-sm">

      <TabsTrigger value="matching" className="flex-1 py-2 data-[state=active]:bg-adept data-[state=active]:text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            AI Job Matching
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1 py-2 data-[state=active]:bg-adept data-[state=active]:text-white">
            Performance Analytics
          </TabsTrigger>
          <TabsTrigger value="Form" className="flex-1 py-2 data-[state=active]:bg-adept data-[state=active]:text-white">
            Import
          </TabsTrigger>
        </TabsList>
        <TabsContent value="matching">
          <TalentMatchingContainer />
        </TabsContent>
        <TabsContent value="Form">
          <ImportForm />
        </TabsContent>
        <TabsContent value="analytics">
          <AnalyticsTabContent />
        </TabsContent>
      </Tabs>
    </SectionCard>
  );
};

export default MatchingToolSection;
