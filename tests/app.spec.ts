import { expect, test } from '@playwright/test'

test.describe('NextArbiter home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => window.localStorage.clear())
  })

  test('renders the case command center shell', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('NextArbiter')
    await expect(page.getByRole('heading', { name: 'Case command center' })).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Resolve casework with a clearer record.' }),
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'New case' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Start review' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'View docket' })).toBeVisible()
  })

  test('shows stable docket metrics', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('25 active')).toBeVisible()
    await expect(page.getByRole('group', { name: 'New evidence: 12' })).toBeVisible()
    await expect(page.getByRole('group', { name: 'Ready for review: 8' })).toBeVisible()
    await expect(page.getByRole('group', { name: 'Awaiting response: 5' })).toBeVisible()
    await expect(page.getByText('ACME v. Northstar')).toBeVisible()
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
