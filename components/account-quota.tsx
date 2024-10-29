import { Progress } from "@/components/ui/progress";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const accountLimits = {
  max: 5,
  current: 3,
};

type CardProps = React.ComponentProps<typeof Card>;
const calc = (value: number) => Math.min(100, Math.max(0, value));

export function AccountQuota({ className, ...props }: CardProps) {
  return (
    <Card className={cn()} {...props}>
      <CardTitle className="text-center text-md mt-4 mb-2 ">
        Account Usage
      </CardTitle>
      <CardContent className="w-full">
        <Progress
          value={calc((accountLimits.current / accountLimits.max) * 100)}
          max={100}
          className="bg-muted"
        />
        <label className="text-center text-xs text-muted">
          {accountLimits.current} of {accountLimits.max} worlds
        </label>
      </CardContent>
    </Card>
  );
}
