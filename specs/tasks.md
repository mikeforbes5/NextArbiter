# Tasks

## AT Reports Platform

- Define public site pathways for public visitors, employee access, client access, and tenant organizations.
- Implement managed tenant onboarding with WorkOS organizations and subdomain-based tenant portals.
- Add permission groups for platform admins, tenant admins, operations users, field staff, report writers, peer reviewers, billing users, client users, and vendor/lab users.
- Build the full service catalog for asbestos, mold, and other environmental service categories.
- Implement proposal-phase intake, scope-of-work capture, clarifications, proposal/SOW generation, revisions, acceptance, purchase order upload, cost, schedule, payment terms, and timeline tracking.
- Implement execution-phase inspection planning, photo documentation, sampling, sample locations, condition assessment, COC generation, sample shipment/FedEx tracking, lab testing categories, lab report intake, lab PDF storage, result review, summary tables, draft reports, peer review, signatures, and final reports.
- Implement payment/completion-phase QuickBooks invoice creation/sync, invoice status tracking, report/invoice availability notifications, payment options, payment status tracking, collections follow-up, release gating, client surveys, client follow-up, next-proposal tracking, and project completion.
- Add integrations for WorkOS, QuickBooks, provider-neutral payments, email notifications/intake, FedEx or manual shipment tracking, durable file storage, and audit/activity logging.
- Model core entities including tenants, users, permission groups, clients, projects, proposals, SOWs, purchase orders, payment terms, field activities, samples, photos, COCs, shipments, lab reports/results, result summaries, technical reports, peer reviews, signatures, QuickBooks invoices, payment records, client releases, surveys, and activity logs.
- Define and test project phases, sub-statuses, document states, payment states, tenant isolation, permission boundaries, workflow transitions, release gating, integration failure handling, and audit logging.

## Theme Mode

- Add an accessible theme toggle to the primary navigation.
- Persist the selected theme in local storage.
- Toggle the document root `dark` class from app state.
- Extend Playwright tests to cover default, toggle, persistence, and existing page rendering.
