import { cn } from "@/lib/utils";
import { supabase, type LabsEnquiry } from "@/lib/supabase";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast, toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { ScrollToTop } from "@/components/ScrollToTop";

// 15 shadcn UI primitives
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function verifyPhase2Exports() {
  const testCn = cn("base-class", true && "active-class", false && "hidden-class");

  const testEnquiry: LabsEnquiry = {
    full_name: "Test User",
    email: "test@example.com",
    company: "Test Co",
    service_type: "AI Product Engineering",
    description: "Building an autonomous workflow agent",
    budget_range: "$10k - $25k",
    referral: "Direct",
    source_url: "https://labs.proquoment.in",
  };

  return {
    testCn,
    testEnquiry,
    hasSupabase: typeof supabase !== "undefined",
    hasButton: typeof Button !== "undefined",
    hasBadge: typeof Badge !== "undefined",
    hasCard: typeof Card !== "undefined",
    hasInput: typeof Input !== "undefined",
    hasLabel: typeof Label !== "undefined",
    hasSelect: typeof Select !== "undefined",
    hasTextarea: typeof Textarea !== "undefined",
    hasToast: typeof Toast !== "undefined",
    hasToaster: typeof Toaster !== "undefined",
    hasTooltip: typeof Tooltip !== "undefined",
    hasSeparator: typeof Separator !== "undefined",
    hasSkeleton: typeof Skeleton !== "undefined",
    hasSpinner: typeof Spinner !== "undefined",
    hasSonner: typeof SonnerToaster !== "undefined",
    hasScrollArea: typeof ScrollArea !== "undefined",
    hasSEO: typeof SEO !== "undefined",
    hasScrollToTop: typeof ScrollToTop !== "undefined",
    hasHooks:
      typeof useIsMobile === "function" &&
      typeof useToast === "function" &&
      typeof toast === "function",
  };
}
