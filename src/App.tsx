import { ArrowRight, Plus, Scale } from 'lucide-react'

import { Button } from '@/components/ui/button'

const queue = [
  { label: 'New evidence', value: '12', tone: 'text-sky-700' },
  { label: 'Ready for review', value: '8', tone: 'text-emerald-700' },
  { label: 'Awaiting response', value: '5', tone: 'text-amber-700' },
]

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10">
        <nav className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Scale className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">NextArbiter</p>
              <h1 className="text-xl font-semibold tracking-tight">Case command center</h1>
            </div>
          </div>
          <Button>
            <Plus className="size-4" aria-hidden="true" />
            New case
          </Button>
        </nav>

        <div className="grid flex-1 gap-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Arbitration workspace
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Resolve casework with a clearer record.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Track filings, evidence, parties, and decision notes from a focused intake queue.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                Start review
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg">
                View docket
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <h3 className="text-2xl font-semibold tracking-tight">Docket health</h3>
              </div>
              <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium">25 active</div>
            </div>

            <div className="space-y-3">
              {queue.map((item) => (
                <div
                  key={item.label}
                  aria-label={`${item.label}: ${item.value}`}
                  className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3"
                  role="group"
                >
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                  <span className={`text-2xl font-semibold ${item.tone}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-md bg-muted p-4">
              <p className="text-sm font-medium">Priority file</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                ACME v. Northstar is ready for evidence reconciliation and party notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
