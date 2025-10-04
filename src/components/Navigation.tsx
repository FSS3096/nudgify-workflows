import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Home, LayoutDashboard, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface NavigationProps {
  role?: "contributor" | "maintainer";
}

export const Navigation = ({ role }: NavigationProps) => {
  const { user, signOut } = useAuth();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
            <GitBranch className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            Cookie Licker
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              
              {role === "contributor" && (
                <Link to="/contributor">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    My Dashboard
                  </Button>
                </Link>
              )}
              
              {role === "maintainer" && (
                <Link to="/maintainer">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Maintainer View
                  </Button>
                </Link>
              )}

              <Badge variant="secondary" className="capitalize">
                {role || "User"}
              </Badge>

              <Button variant="outline" size="sm" className="gap-2 border-primary/50 hover:border-primary" onClick={signOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
