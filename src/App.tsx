import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  CreditCard,
  FileText,
  FlaskConical,
  LogIn,
  Moon,
  ShieldCheck,
  Sun,
  Truck,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const accessPaths = [
  { label: 'Public access', detail: 'Service overview and tenant inquiry', icon: Building2 },
  { label: 'Employee access', detail: 'Operations, field, reports, and billing', icon: ShieldCheck },
  { label: 'Client access', detail: 'Requests, proposals, reports, and invoices', icon: Users },
]

const workflowPhases = [
  {
    label: 'Proposal',
    color: 'bg-red-500',
    tone: 'text-red-700 dark:text-red-300',
    status: 'Scope, cost, schedule, PO',
    count: '14',
  },
  {
    label: 'Execution',
    color: 'bg-yellow-400',
    tone: 'text-yellow-700 dark:text-yellow-300',
    status: 'Field, COC, lab, report',
    count: '9',
  },
  {
    label: 'Payment / Completed',
    color: 'bg-green-500',
    tone: 'text-green-700 dark:text-green-300',
    status: 'Invoice, payment, release',
    count: '6',
  },
]

const serviceCatalog = [
  {
    name: 'Asbestos',
    items: ['Bulk', 'Air', 'Specifications', 'Laboratory analysis', 'Consulting', 'Regulations'],
  },
  {
    name: 'Mold',
    items: [
      'Air',
      'Surface',
      'Culture',
      'Specifications',
      'Laboratory analysis',
      'Moisture mapping',
      'Consulting',
      'Regulations',
    ],
  },
  {
    name: 'Other',
    items: [
      'Lead based paint',
      'Lead',
      'Mercury',
      'Formaldehyde',
      'Nuisance odors',
      'Phase I ESA',
      'Phase II ESA',
      'Consulting',
    ],
  },
]

const projectSteps = [
  { label: 'Client request', icon: LogIn },
  { label: 'Proposal / SOW', icon: FileText },
  { label: 'Field sampling', icon: ClipboardCheck },
  { label: 'COC + shipment', icon: Truck },
  { label: 'Lab results', icon: FlaskConical },
  { label: 'Invoice + payment', icon: CreditCard },
]

type Theme = 'light' | 'dark'

function getSavedTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  try {
    return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)

    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // Keep the in-session theme active even if storage is unavailable.
    }
  }, [isDark, theme])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 md:px-8">
        <nav className="flex flex-col gap-4 border-b border-border pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Automated Technical Reports</p>
              <h1 className="text-xl font-semibold">AT Reports</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {accessPaths.map((path) => (
              <Button key={path.label} variant="outline">
                <path.icon className="size-4" aria-hidden="true" />
                {path.label}
              </Button>
            ))}
            <Button
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              size="icon"
              type="button"
              variant="outline"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? (
                <Sun className="size-4" aria-hidden="true" />
              ) : (
                <Moon className="size-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </nav>

        <div className="grid flex-1 gap-6 py-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="flex min-h-[620px] overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="flex w-12 shrink-0 flex-col">
              <div className="flex flex-1 items-center justify-center bg-red-500 px-2 text-center text-[10px] font-semibold uppercase leading-4 text-white">
                Asbestos
              </div>
              <div className="flex flex-1 items-center justify-center bg-yellow-400 px-2 text-center text-[10px] font-semibold uppercase leading-4 text-slate-950">
                Mold
              </div>
              <div className="flex flex-1 items-center justify-center bg-green-500 px-2 text-center text-[10px] font-semibold uppercase leading-4 text-white">
                Environmental
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 md:p-7">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase text-muted-foreground">
                    Environmental consulting platform
                  </p>
                  <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">
                    Proposal, execution, and payment in one tenant portal.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                    AT Reports coordinates client intake, field documentation, COCs, lab reports,
                    technical reports, invoices, payments, and release controls for environmental
                    service companies.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {accessPaths.map((path) => (
                    <div key={path.label} className="rounded-md border border-border bg-background p-4">
                      <path.icon className="mb-3 size-5 text-primary" aria-hidden="true" />
                      <h3 className="text-sm font-semibold">{path.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{path.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">
                  View tenant portal
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button variant="outline" size="lg">
                  Client request intake
                </Button>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">AAMECC tenant portal</p>
                  <h2 className="text-2xl font-semibold">Project workflow board</h2>
                </div>
                <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium">
                  WorkOS organization ready
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {workflowPhases.map((phase) => (
                  <div
                    key={phase.label}
                    aria-label={`${phase.label}: ${phase.count} projects`}
                    className="rounded-md border border-border bg-background p-4"
                    role="group"
                  >
                    <div className={`mb-4 h-2 rounded-full ${phase.color}`} />
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{phase.label}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{phase.status}</p>
                      </div>
                      <span className={`text-3xl font-semibold ${phase.tone}`}>{phase.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="mb-5">
                <p className="text-sm text-muted-foreground">Shared workflow</p>
                <h2 className="text-2xl font-semibold">Project lifecycle</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {projectSteps.map((step) => (
                  <div key={step.label} className="flex items-center gap-3 rounded-md bg-muted p-3">
                    <step.icon className="size-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="mb-5">
                <p className="text-sm text-muted-foreground">Selectable service types</p>
                <h2 className="text-2xl font-semibold">Service catalog</h2>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {serviceCatalog.map((category) => (
                  <div key={category.name} className="rounded-md border border-border bg-background p-4">
                    <h3 className="font-semibold">{category.name}</h3>
                    <ul className="mt-3 space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
