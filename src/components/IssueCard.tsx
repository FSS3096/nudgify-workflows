import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Issue } from "@/lib/mockData";
import { Clock, AlertCircle, CheckCircle2, XCircle, MessageSquare, Bell } from "lucide-react";
import { toast } from "sonner";

interface IssueCardProps {
  issue: Issue;
  role: "contributor" | "maintainer";
}

export const IssueCard = ({ issue, role }: IssueCardProps) => {
  const getStatusColor = (status: Issue["status"]) => {
    switch (status) {
      case "active":
        return "bg-success/20 text-success border-success/30";
      case "stale":
        return "bg-warning/20 text-warning border-warning/30";
      case "released":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "unclaimed":
        return "bg-muted/50 text-muted-foreground border-border";
    }
  };

  const getStatusIcon = (status: Issue["status"]) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="h-4 w-4" />;
      case "stale":
        return <Clock className="h-4 w-4" />;
      case "released":
        return <XCircle className="h-4 w-4" />;
      case "unclaimed":
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: Issue["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium":
        return "bg-warning/20 text-warning border-warning/30";
      case "low":
        return "bg-muted/50 text-muted-foreground border-border";
    }
  };

  const handleClaim = () => {
    toast.success("Issue claimed successfully!", {
      description: "You can now start working on this issue.",
    });
  };

  const handleRelease = () => {
    toast.info("Claim released", {
      description: "This issue is now available for others to claim.",
    });
  };

  const handleNudge = () => {
    toast.success("Nudge sent!", {
      description: "A friendly reminder has been sent to the contributor.",
    });
  };

  const handleAcknowledge = () => {
    toast.success("Nudge acknowledged", {
      description: "The maintainer has been notified of your progress.",
    });
  };

  const timeSince = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const days = Math.floor(seconds / 86400);
    if (days > 0) return `${days}d ago`;
    const hours = Math.floor(seconds / 3600);
    if (hours > 0) return `${hours}h ago`;
    return "just now";
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getStatusColor(issue.status)}>
                {getStatusIcon(issue.status)}
                <span className="ml-1 capitalize">{issue.status}</span>
              </Badge>
              <Badge className={getPriorityColor(issue.priority)}>
                {issue.priority}
              </Badge>
              <Badge variant="outline">{issue.category}</Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {issue.title}
            </h3>
            <p className="text-sm text-muted-foreground">{issue.description}</p>
          </div>
        </div>

        {/* Metadata */}
        {issue.claimedBy && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Claimed by: <span className="text-foreground font-medium">{issue.claimedBy}</span></span>
            {issue.claimedAt && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {timeSince(issue.claimedAt)}
              </span>
            )}
            {issue.lastActivity && (
              <span className="flex items-center gap-1">
                Last activity: {timeSince(issue.lastActivity)}
              </span>
            )}
          </div>
        )}

        {/* Nudges */}
        {issue.nudges && issue.nudges.length > 0 && (
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Bell className="h-5 w-5 text-warning mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">Recent Nudge</p>
                <p className="text-sm text-muted-foreground">{issue.nudges[0].message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Sent {timeSince(issue.nudges[0].sentAt)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          {role === "contributor" && (
            <>
              {issue.status === "unclaimed" && (
                <Button onClick={handleClaim} className="bg-primary hover:bg-primary/90">
                  Claim Issue
                </Button>
              )}
              {issue.claimedBy === "current-user" && (
                <>
                  <Button onClick={handleRelease} variant="outline">
                    Release Claim
                  </Button>
                  {issue.nudges && issue.nudges.length > 0 && !issue.nudges[0].acknowledged && (
                    <Button onClick={handleAcknowledge} variant="outline" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Acknowledge Nudge
                    </Button>
                  )}
                </>
              )}
            </>
          )}
          
          {role === "maintainer" && (
            <>
              {issue.claimedBy && issue.status !== "released" && (
                <>
                  <Button onClick={handleNudge} variant="outline" className="gap-2">
                    <Bell className="h-4 w-4" />
                    Send Nudge
                  </Button>
                  <Button onClick={handleRelease} variant="outline" className="text-destructive border-destructive/50 hover:bg-destructive/10">
                    Release Claim
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
};
