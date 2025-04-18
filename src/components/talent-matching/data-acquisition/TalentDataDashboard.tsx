
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DataSource, ImportStats } from "@/components/talent-matching/types";
import { getDataSources, startDataSourceScraper } from "@/components/talent-matching/data-acquisition/Talentdataservice";
import { useToast } from "@/hooks/use-toast";
import { Database, GithubIcon, Linkedin, FileText, Router, UserPlus, Upload, RefreshCw } from "lucide-react";
import ImportForm from "./ImportForm";

const TalentDataDashboard: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("sources");
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [importStats, setImportStats] = useState<ImportStats[]>([]);
  const [selectedSource, setSelectedSource] = useState<DataSource | null>(null);
  
  // Load data sources on mount
  React.useEffect(() => {
    const loadDataSources = async () => {
      setIsLoading(true);
      try {
        const sources = await getDataSources();
        setDataSources(sources);
      } catch (error) {
        console.error("Error loading data sources:", error);
        toast({
          title: "Error",
          description: "Failed to load data sources",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDataSources();
  }, [toast]);
  
  const handleStartScraper = async (sourceId: string) => {
    setIsLoading(true);
    try {
      const success = await startDataSourceScraper(sourceId, { maxCandidates: 100 });
      
      if (success) {
        toast({
          title: "Scraper Started",
          description: "The data acquisition process has started successfully",
        });
      } else {
        throw new Error("Failed to start scraper");
      }
    } catch (error) {
      console.error("Error starting scraper:", error);
      toast({
        title: "Error",
        description: "Failed to start the data acquisition process",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleImportComplete = (stats: ImportStats) => {
    setImportStats(prev => [stats, ...prev]);
    
    toast({
      title: "Import Complete",
      description: `Successfully imported ${stats.successfulImports} candidates from ${stats.sources.join(", ")}`,
    });
    
    // Switch to history tab
    setActiveTab("history");
  };
  
  return (
    <div className="space-y-6">
    
      
     
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="">
          <TabsTrigger value="import">Import</TabsTrigger>
        </TabsList>
        
        {/* <TabsContent value="sources" className="p-1">
          <DataSourcesList 
            dataSources={dataSources} 
            onStartScraper={handleStartScraper}
            isLoading={isLoading}
            onSelectSource={setSelectedSource}
          />
        </TabsContent> */}
        
        <TabsContent value="import" className="p-1">
          <ImportForm 
            dataSources={dataSources}
            onImportComplete={handleImportComplete}
            selectedSource={selectedSource}
          />
        </TabsContent>
        
        {/* <TabsContent value="history" className="p-1">
          <ImportHistory 
            importStats={importStats}
          />
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default TalentDataDashboard;
