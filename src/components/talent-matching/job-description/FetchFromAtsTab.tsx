import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Database } from "lucide-react";
import dummyJobs from "./dummyJobs.json";

interface FetchFromAtsTabProps {
  setJobDescription: (text: string) => void;
}

const FetchFromAtsTab: React.FC<FetchFromAtsTabProps> = ({ setJobDescription }) => {
  const [selectedSystem, setSelectedSystem] = React.useState<string>("");
  const [jobId, setJobId] = React.useState<string>("");
  const [jobResults, setJobResults] = React.useState<any[]>([]);

  const handleFetch = () => {
    if (!selectedSystem) return;

    const filteredJobs = dummyJobs.filter((job) => {
      const systemMatch = job.system === selectedSystem;
      const idMatch = jobId ? job.id === jobId : true;
      return systemMatch && idMatch;
    });

    setJobResults(filteredJobs);

    if (filteredJobs.length > 0) {
      setJobDescription(filteredJobs[0].description); // Optional: set first one as description
    } else {
      setJobDescription("No matching jobs found.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-2 block">Select ATS/VMS System</label>
          <Select value={selectedSystem} onValueChange={setSelectedSystem}>
            <SelectTrigger>
              <SelectValue placeholder="Select system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ceipal">Ceipal</SelectItem>
              <SelectItem value="stafferlink">Stafferlink</SelectItem>
              <SelectItem value="sapfieldglass">SAP Fieldglass</SelectItem>
              <SelectItem value="beeline">Beeline</SelectItem>
              <SelectItem value="pontoon">Pontoon</SelectItem>
              <SelectItem value="jobdiva">JobDiva</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Job ID/Reference (optional)</label>
          <Input
            placeholder="Enter job ID or reference"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
          />
        </div>
      </div>

      <Button className="w-full md:w-auto" onClick={handleFetch}>
        <Database className="mr-2 h-4 w-4" />
        Fetch Job Details
      </Button>

      {jobResults.length > 0 && (
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobResults.map((job, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow-md bg-white hover:shadow-lg transition-all"
            >
              
              <h3 className="text-lg font-semibold mb-1">Job Required:</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mb-2">
                {job.skills.map((skill: string, idx: number) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              <p className="text-sm mb-1">
                <span className="font-semibold">Degree:</span> {job.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {job.description.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchFromAtsTab;
