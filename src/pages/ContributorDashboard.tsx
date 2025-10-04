import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, GitBranch, Clock, CheckCircle2 } from "lucide-react";
import { IssueCard } from "@/components/IssueCard";
import { Navigation } from "@/components/Navigation";
import { mockIssues } from "@/lib/mockData";
import { useAuth } from "@/hooks/useAuth";

const ContributorDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [issues] = useState(mockIssues);
  const myClaimedIssues = issues.filter(i => i.claimedBy === "current-user");
  const availableIssues = issues.filter(i => !i.claimedBy);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation role="contributor" />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">My Claims</p>
                <p className="text-3xl font-bold text-foreground">{myClaimedIssues.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-3xl font-bold text-foreground">
                  {myClaimedIssues.filter(i => i.status === "active").length}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Needs Action</p>
                <p className="text-3xl font-bold text-foreground">
                  {myClaimedIssues.filter(i => i.status === "stale").length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* My Claimed Issues */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Claimed Issues</h2>
            <Badge variant="secondary" className="text-sm">
              <Bell className="h-4 w-4 mr-1" />
              {myClaimedIssues.filter(i => i.nudges && i.nudges.length > 0).length} Nudges
            </Badge>
          </div>

          <div className="space-y-4">
            {myClaimedIssues.length > 0 ? (
              myClaimedIssues.map(issue => (
                <IssueCard key={issue.id} issue={issue} role="contributor" />
              ))
            ) : (
              <Card className="p-8 text-center bg-card border-border">
                <p className="text-muted-foreground">You haven't claimed any issues yet.</p>
              </Card>
            )}
          </div>
        </section>

        {/* Available Issues */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Available Issues</h2>
          <div className="space-y-4">
            {availableIssues.map(issue => (
              <IssueCard key={issue.id} issue={issue} role="contributor" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContributorDashboard;
