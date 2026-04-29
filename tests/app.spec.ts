import { expect, test } from '@playwright/test'

test.describe('AT Reports foundation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => window.localStorage.clear())
  })

  test('renders the public access and portal shell', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('AT Reports')
    await expect(page.getByRole('heading', { name: 'AT Reports' })).toBeVisible()
    await expect(
      page.getByRole('heading', {
        name: 'Proposal, execution, and payment in one tenant portal.',
      }),
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'Public access' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Employee access' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Client access' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'View tenant portal' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Client request intake' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
  })

  test('shows tenant workflow phases with red yellow green stages', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('AAMECC tenant portal')).toBeVisible()
    await expect(page.getByText('WorkOS organization ready')).toBeVisible()
    await expect(page.getByRole('group', { name: 'Proposal: 14 projects' })).toBeVisible()
    await expect(page.getByRole('group', { name: 'Execution: 9 projects' })).toBeVisible()
    await expect(page.getByRole('group', { name: 'Payment / Completed: 6 projects' })).toBeVisible()
    await expect(page.getByText('Scope, cost, schedule, PO')).toBeVisible()
    await expect(page.getByText('Field, COC, lab, report')).toBeVisible()
    await expect(page.getByText('Invoice, payment, release')).toBeVisible()
  })

  test('shows shared lifecycle and full service catalog', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Project lifecycle' })).toBeVisible()
    await expect(page.getByText('Client request', { exact: true })).toBeVisible()
    await expect(page.getByText('Proposal / SOW')).toBeVisible()
    await expect(page.getByText('COC + shipment')).toBeVisible()
    await expect(page.getByText('Invoice + payment')).toBeVisible()

    await expect(page.getByRole('heading', { name: 'Service catalog' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Asbestos' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Mold' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Other' })).toBeVisible()
    await expect(page.getByText('Laboratory analysis').first()).toBeVisible()
    await expect(page.getByText('Moisture mapping')).toBeVisible()
    await expect(page.getByText('Phase I ESA')).toBeVisible()
    await expect(page.getByText('Phase II ESA')).toBeVisible()
  })

  test('defaults to light mode when no preference is saved', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('html')).not.toHaveClass(/dark/)
    await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
  })

  test('toggles and persists dark and light modes', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'Switch to dark mode' }).click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()
    await expect.poll(() => page.evaluate(() => window.localStorage.getItem('theme'))).toBe('dark')

    await page.reload()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()

    await page.getByRole('button', { name: 'Switch to light mode' }).click()
    await expect(page.locator('html')).not.toHaveClass(/dark/)
    await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
    await expect.poll(() => page.evaluate(() => window.localStorage.getItem('theme'))).toBe('light')
  })
})
