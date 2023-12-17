
  export function RecentJobs() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Surgery</p>
            <p className="text-sm text-muted-foreground">
              Day Surgery
            </p>
          </div>
          <div className="ml-auto font-medium">+$599.00</div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Cardiovascular</p>
            <p className="text-sm text-muted-foreground">Interventional cardiovascular procedures</p>
          </div>
          <div className="ml-auto font-medium">+$439.00</div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Intensive Care Unit (ICU)</p>
            <p className="text-sm text-muted-foreground">
              Patient care in ICU
            </p>
          </div>
          <div className="ml-auto font-medium">+$499.00</div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Inpatient Ward</p>
            <p className="text-sm text-muted-foreground">Patient Care in Ward</p>
          </div>
          <div className="ml-auto font-medium">+$399.00</div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Major Surgery</p>
            <p className="text-sm text-muted-foreground">Peri-operative patient care in Major Surgery Suites (MSS)</p>
          </div>
          <div className="ml-auto font-medium">+$839.00</div>
        </div>
      </div>
    )
  }