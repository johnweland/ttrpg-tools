import { Progress } from "@/components/ui/progress";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";

const accountLimits = {
  max: 5,
  current: 4,
};

type CardProps = React.ComponentProps<typeof Card>;
const calc = (value: number) => Math.min(100, Math.max(0, value));

export function AccountQuota({ className, ...props }: CardProps) {
  const { state } = useSidebar();
  return (
    <Card
      className={
        (cn("w-auto", className), state == "collapsed" ? "hidden" : "")
      }
      {...props}
    >
      <CardTitle className="text-center text-md mt-4 mb-2 ">
        Worlds Quota
      </CardTitle>
      <CardContent className="w-full">
        <Progress
          value={calc((accountLimits.current / accountLimits.max) * 100)}
          max={100}
          className="bg-muted"
        />
        <label className="text-center text-xs">
          {accountLimits.current} of {accountLimits.max} worlds
        </label>
      </CardContent>
    </Card>
  );
}
