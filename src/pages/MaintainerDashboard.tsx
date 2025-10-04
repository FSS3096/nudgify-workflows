import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react";
import { IssueCard } from "@/components/IssueCard";
import { Navigation } from "@/components/Navigation";
import { mockIssues } from "@/lib/mockData";

const MaintainerDashboard = () => {
  const [issues] = useState(mockIssues);
  const activeIssues = issues.filter(i => i.status === "active");
  const staleIssues = issues.filter(i => i.status === "stale");
  const releasedIssues = issues.filter(i => i.status === "released");
  const unclaimedIssues = issues.filter(i => !i.claimedBy);

  return (
    <div className="min-h-screen bg-background">
      <Navigation role="maintainer" />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Claims</p>
                <p className="text-3xl font-bold text-foreground">{activeIssues.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stale Claims</p>
                <p className="text-3xl font-bold text-foreground">{staleIssues.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Released</p>
                <p className="text-3xl font-bold text-foreground">{releasedIssues.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unclaimed</p>
                <p className="text-3xl font-bold text-foreground">{unclaimedIssues.length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Issues Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 bg-secondary">
            <TabsTrigger value="all">All Issues</TabsTrigger>
            <TabsTrigger value="active">
              Active
              <Badge variant="secondary" className="ml-2 bg-success/20 text-success border-0">
                {activeIssues.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="stale">
              Stale
              <Badge variant="secondary" className="ml-2 bg-warning/20 text-warning border-0">
                {staleIssues.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="released">
              Released
              <Badge variant="secondary" className="ml-2 bg-destructive/20 text-destructive border-0">
                {releasedIssues.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {issues.map(issue => (
              <IssueCard key={issue.id} issue={issue} role="maintainer" />
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {activeIssues.map(issue => (
              <IssueCard key={issue.id} issue={issue} role="maintainer" />
            ))}
          </TabsContent>

          <TabsContent value="stale" className="space-y-4">
            {staleIssues.length > 0 ? (
              staleIssues.map(issue => (
                <IssueCard key={issue.id} issue={issue} role="maintainer" />
              ))
            ) : (
              <Card className="p-8 text-center bg-card border-border">
                <p className="text-muted-foreground">No stale claims! Everything is running smoothly.</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="released" className="space-y-4">
            {releasedIssues.length > 0 ? (
              releasedIssues.map(issue => (
                <IssueCard key={issue.id} issue={issue} role="maintainer" />
              ))
            ) : (
              <Card className="p-8 text-center bg-card border-border">
                <p className="text-muted-foreground">No released claims yet.</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MaintainerDashboard;
