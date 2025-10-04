import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, Users, Bell, BarChart, CheckCircle2, Clock, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow mb-6 inline-block">
              <GitBranch className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Stop Cookie Lickers,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Boost Open Source Flow
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically detect stale issue claims, send friendly nudges, and release blocked work. 
            Keep your open source project moving forward without the awkward conversations.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            {user ? (
              <>
                <Link to="/contributor">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow text-lg px-8">
                    Contributor Dashboard
                  </Button>
                </Link>
                <Link to="/maintainer">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary text-lg px-8">
                    Maintainer View
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow text-lg px-8">
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="p-3 bg-success/10 rounded-lg w-fit mb-4">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Automatic Detection</h3>
            <p className="text-muted-foreground">
              AI analyzes issue comments to detect claims and monitors activity to flag stale work automatically.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="p-3 bg-warning/10 rounded-lg w-fit mb-4">
              <Bell className="h-8 w-8 text-warning" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Smart Nudging</h3>
            <p className="text-muted-foreground">
              Send friendly, automated reminders to contributors when their claims go inactive for configurable periods.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Auto-Release</h3>
            <p className="text-muted-foreground">
              Claims are automatically released if contributors don't respond, keeping issues available for others.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Built for Open Source Teams
            </h2>
            <p className="text-lg text-muted-foreground">
              Cookie Licker Detector helps maintainers manage contributions efficiently while keeping 
              contributors engaged and accountable—all without manual overhead.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">For Contributors</h4>
                  <p className="text-muted-foreground">Clear visibility into your claims and helpful reminders to stay on track.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">For Maintainers</h4>
                  <p className="text-muted-foreground">Automated workflows to manage claims without awkward confrontations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-success/10 rounded-lg mt-1">
                  <BarChart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Analytics & Insights</h4>
                  <p className="text-muted-foreground">Track claim patterns and contributor responsiveness over time.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <span className="text-sm font-medium text-muted-foreground">Count</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-success rounded-full"></div>
                  <span className="text-foreground">Active Claims</span>
                </div>
                <span className="text-2xl font-bold text-foreground">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-warning rounded-full"></div>
                  <span className="text-foreground">Stale Claims</span>
                </div>
                <span className="text-2xl font-bold text-foreground">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Released</span>
                </div>
                <span className="text-2xl font-bold text-foreground">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-muted rounded-full"></div>
                  <span className="text-foreground">Available</span>
                </div>
                <span className="text-2xl font-bold text-foreground">3</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <Card className="p-12 bg-gradient-primary border-0 shadow-glow text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Optimize Your Project?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Try Cookie Licker Detector and see how automated claim management transforms your workflow.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/contributor">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                View Demo
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
