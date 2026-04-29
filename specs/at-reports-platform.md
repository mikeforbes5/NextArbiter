# AT Reports Platform

## Objective
Create a B2B SaaS platform for Automated Technical Reports / AT Reports LLC that serves environmental consulting and chemical response companies through tenant-specific portals, guided project workflows, document management, report generation, billing, payment, and project completion tracking.

## Context
Environmental consulting companies coordinate work across clients, field staff, laboratories, report reviewers, billing teams, and payment collection. The platform must support the full workflow from public/client intake through proposal, field execution, laboratory handling, report generation, QuickBooks invoicing, payment collection, release to client, and project completion.

The platform must support service-company tenants such as asbestos, mold, lead, mercury, formaldehyde, nuisance odor, and environmental site assessment providers. Each tenant operates its own client portal while AT Reports manages tenant onboarding and platform administration.

## Business Rules
- AT Reports must create or approve each service-company tenant before that tenant can operate in the platform.
- Each tenant must have isolated access to its own users, clients, projects, documents, invoices, payments, and activity logs.
- Tenant portals must support subdomain-based access and WorkOS-backed organization authentication.
- Public visitors, employees, clients, and tenant organizations must have separate access pathways.
- Permission groups must control access for platform admins, tenant admins, operations users, field staff, report writers, peer reviewers, billing users, client users, and vendor/lab users.
- Projects must move through three top-level phases: Proposal, Execution, and Payment/Completed.
- The Proposal phase must be color-coded red.
- The Execution phase must be color-coded yellow.
- The Payment/Completed phase must be color-coded green.
- Final client release of reports and invoices must be blocked unless payment is complete or the client is approved on account.
- QuickBooks, payments, email intake/notifications, file storage, audit logging, and shipping/FedEx tracking or manual shipping entry are first-class platform requirements.
- The payment provider is not selected in this spec; payment requirements must remain provider-neutral.
- Service-specific report templates may be detailed later; the v1 platform workflow must support the full service catalog through a shared workflow.

## Functional Requirements

### Public Site And Portal Access
- Provide a public AT Reports site that explains the platform and directs users to public, employee, client, and tenant access paths.
- Route tenant users to tenant-specific portals using subdomains.
- Support client registration or request-access flows for downstream clients.
- Support employee and tenant-admin access through WorkOS organizations.
- Show tenant branding and project workflow status inside each tenant portal.

### Tenant And Authentication
- Use WorkOS organizations to represent tenant companies.
- Support tenant membership, user invitations, and role/permission assignment.
- Allow AT Reports platform admins to create, approve, suspend, and configure tenant organizations.
- Allow tenant admins to invite employees, manage client access, and configure tenant-level settings.
- Enforce tenant isolation across every project, document, invoice, payment, and activity record.

### Permission Groups
- Platform admins can manage AT Reports platform settings, tenant onboarding, tenant status, and global support access.
- Tenant admins can manage tenant users, client organizations, project configuration, and tenant settings.
- Operations users can create projects, coordinate proposals, manage schedules, and advance workflow states.
- Field staff can view assigned projects, document inspections, upload photos, record samples, create COCs, and add shipment handoff details.
- Report writers can upload lab PDFs, enter or verify results, generate summary tables, draft reports, and prepare final reports.
- Peer reviewers can review draft reports, request corrections, approve reports, and manage review status.
- Billing users can create or sync QuickBooks invoices, track invoice status, reconcile payments, and control report/invoice release.
- Client users can submit inspection requests, provide project details, review proposals, upload purchase orders, view released reports/invoices, make payments, and respond to surveys.
- Vendor/lab users can access only the COCs, project context, lab intake, and report upload surfaces explicitly shared with them.

### Service Catalog
- Provide selectable project/service types for all listed service categories.
- Asbestos service types must include bulk, air, specifications, laboratory analysis, consulting, and regulations.
- Mold service types must include air, surface, culture, specifications, laboratory analysis, moisture mapping, consulting, and regulations.
- Other service types must include lead based paint, lead, mercury, formaldehyde, nuisance odors, Phase I Environmental Site Assessment, Phase II Environmental Site Assessment, and consulting.
- All service types must use the same core workflow unless a later spec defines service-specific fields or report templates.

### Proposal Phase
- Allow clients to register or log in before submitting an inspection request.
- Capture inspection request details, scope-of-work inputs, site details, owner details, contact details, requested schedule, known hazards, and uploaded supporting files.
- Allow employees to request clarifications from clients and track responses.
- Support proposal and SOW generation when required by the tenant.
- Capture cost, schedule, timeline to completion, and payment terms.
- Support proposal revisions and revision approval.
- Allow clients to accept the proposal or upload a purchase order.
- Allow staff to mark the project ready for execution after acceptance or purchase-order approval.

### Execution Phase
- Support inspection planning and field assignment.
- Allow field staff to upload site photos, sample location photos, and condition assessment notes.
- Track sampling media, sample collection details, sample locations, and sample identifiers.
- Generate COC records for laboratory submission.
- Track sample delivery and FedEx/shipping handoff details, either through integration or manual tracking entry.
- Support lab testing categories including bulk, PCM, TEM, direct exam, culture, and other.
- Support lab report intake through direct upload and email ingestion.
- Store lab report PDFs with the project.
- Allow report users to review lab results and extract or enter data into summary tables.
- Support draft report generation with sections for owner details, site details, background, scope of work, inspection, sample collection, sample locations, COC, laboratory results, findings, recommendations, indemnification, and closing/thanks.
- Support peer review of draft reports.
- Support report signatures.
- Support final report generation after peer review and signatures are complete.

### Payment And Completion Phase
- Create or sync QuickBooks invoices for projects.
- Track QuickBooks invoice status, invoice PDF or link, and reconciliation status.
- Notify clients when reports and invoices are available.
- Support payment options including credit card, on account, check, cash, and account approval.
- Support provider-neutral credit card payment sessions and payment status callbacks.
- Track payment status, overdue status, collections follow-up, waived status, and account-approved release.
- Gate report and invoice release based on payment completion or account approval.
- Deliver released reports and invoices through the portal and email.
- Capture client surveys after project release or completion.
- Support client follow-up and next-proposal opportunities.
- Mark a project complete after release, payment/account approval, and required follow-up tasks are complete.

### Integrations
- WorkOS must provide authentication, organization membership, and role/permission assignment.
- QuickBooks must support invoice creation, invoice status sync, invoice PDF/link storage, and reconciliation status.
- Payment integration must support credit card payment initiation, payment status callbacks, failed-payment status, and paid status.
- Email integration must support proposal availability, proposal acceptance, clarification requests, lab report intake, report/invoice availability, payment events, overdue payment, surveys, and follow-up messages.
- FedEx/shipping integration or manual shipping entry must support sample shipment tracking and handoff status.
- File storage must support proposals, purchase orders, photos, COCs, lab reports, generated reports, invoices, signatures, and client-facing releases.
- Audit/activity logging must record project state changes, document actions, release events, payment events, integration events, and user actions.

### Domain Model
- Tenant represents a service-company organization using AT Reports.
- User represents a platform, tenant, employee, client, or vendor/lab user.
- PermissionGroup represents role-based access for platform, tenant, operations, field, reporting, review, billing, client, and vendor/lab functions.
- ClientOrganization represents a downstream customer organization served by a tenant.
- ClientContact represents an individual downstream client user.
- Project represents the full lifecycle of a requested inspection, consulting, or reporting engagement.
- ServiceType represents the selected catalog item for the project.
- Proposal represents a proposed scope, cost, schedule, and terms.
- ScopeOfWork represents the work to be performed.
- PurchaseOrder represents client-issued purchase authorization.
- PaymentTerms represents agreed payment timing, method, and account approval conditions.
- FieldActivity represents inspection, documentation, sampling, and field notes.
- Sample represents collected material, air, surface, culture, or other sample records.
- Photo represents site, condition, and sample-location images.
- ChainOfCustody represents lab submission documentation.
- Shipment represents FedEx/shipping or manual sample delivery tracking.
- LabReport represents uploaded or ingested lab report PDFs.
- LabResult represents extracted or entered analytical result data.
- ResultSummary represents project-level summary tables generated from lab results.
- TechnicalReport represents draft and final client-facing report documents.
- PeerReview represents report review feedback, requested changes, and approval.
- Signature represents author, reviewer, or authorized signer approval.
- QuickBooksInvoice represents invoice identity, status, PDF/link, and reconciliation state.
- PaymentRecord represents payment attempts, status callbacks, manual payments, account approvals, and waivers.
- ClientRelease represents report/invoice release status and access controls.
- ClientSurvey represents post-release feedback.
- ActivityLog represents auditable project, document, integration, payment, and user events.

### States
- Project phases must include Proposal, Execution, and Payment/Completed.
- Proposal sub-statuses must include request received, clarification requested, proposal draft, proposal sent, revision requested, revision sent, accepted, purchase order received, and ready for execution.
- Execution sub-statuses must include scheduled, field work in progress, field work complete, COC generated, samples shipped, awaiting lab, lab report received, results reviewed, report drafting, peer review, signatures pending, and final report ready.
- Payment/completion sub-statuses must include invoice draft, invoice sent, payment pending, payment received, approved on account, release ready, released, survey sent, follow-up pending, and complete.
- Document states must include draft, sent, accepted, rejected, revised, uploaded, reviewed, final, released, and archived.
- Payment states must include not invoiced, invoice draft, invoice sent, payment pending, paid, approved on account, overdue, collections, and waived.

## Non-Functional Requirements
- The platform must enforce tenant isolation in every data access path.
- The platform must provide auditability for workflow, billing, release, and integration actions.
- The platform must support responsive portal use by office, field, billing, and client users.
- The platform must preserve uploaded project documents and generated artifacts in a durable file store.
- The platform must protect unreleased reports and invoices from unauthorized client access.
- The platform must expose clear project state and phase color status for scanning.
- The platform must be designed so future service-specific report templates can be added without replacing the core workflow.
- The platform must avoid hard-coding one tenant's workflow in a way that prevents other environmental consulting companies from using the same service.

## Acceptance Criteria
- A platform admin can create or approve a tenant organization and configure its tenant portal.
- A tenant admin can invite employees, assign permission groups, manage clients, and view only that tenant's data.
- A client user can register or request access, submit an inspection request, provide project details, accept a proposal or upload a purchase order, view released reports/invoices, and pay or view account-approved status.
- An operations user can create a project, select a service type from the full catalog, coordinate scope/cost/schedule, and advance proposal statuses.
- A field user can record inspection details, photos, sampling details, sample locations, COCs, and shipment handoff details.
- A report writer can upload lab PDFs, enter or verify lab results, generate summary tables, and create draft/final report records.
- A peer reviewer can review draft reports, request changes, and approve reports.
- A billing user can create or sync QuickBooks invoices, track invoice status, reconcile payments, and manage release gating.
- The system blocks client access to final reports and invoices unless payment is complete or the client is approved on account.
- The system creates or records notifications for proposal availability, proposal acceptance, clarification requests, report/invoice availability, payment events, overdue payment, survey, and follow-up.
- The system records auditable activity for project transitions, document uploads, report releases, invoice actions, payment actions, and integration events.
- The service catalog includes asbestos, mold, and other environmental service categories listed in this spec.
- The workflow can complete from request intake through proposal, execution, report, invoice, payment/account approval, release, survey, follow-up, and project completion.

## Error Cases
- If WorkOS authentication or organization lookup fails, the user must not gain tenant access and should receive a recoverable authentication error.
- If a user lacks permission for a project action, the action must be blocked and logged where appropriate.
- If QuickBooks invoice creation or sync fails, the project must retain a retryable invoice-sync error without losing billing data.
- If payment initiation or callback processing fails, the payment record must remain pending or failed with enough detail for retry or manual reconciliation.
- If email delivery fails, the notification must be retryable or marked failed for staff follow-up.
- If lab report email ingestion fails, staff must still be able to upload the PDF manually.
- If FedEx/shipping integration fails, staff must be able to enter shipment handoff and tracking details manually.
- If file upload fails, the project must not advance to a state that depends on that file unless a permitted manual override is recorded.
- If a report is not final, payment is incomplete, and account approval is missing, client release must be blocked.

## Out Of Scope
- Service-specific report template details beyond the shared report sections listed in this spec.
- Automated extraction of every possible lab PDF format.
- Selection of a specific credit card payment provider.
- Mobile-native applications outside the responsive web portal.
- Accounting workflows beyond QuickBooks invoice status, invoice links/PDFs, and reconciliation status.
- Laboratory LIMS integrations beyond lab report intake and vendor/lab access.
- Automated FedEx label purchasing unless added by a later shipping spec.
- Any seed example report numbers or tenant-specific hard-coded report identifiers.
