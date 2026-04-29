# Theme Mode

## Objective
Allow users to switch the NextArbiter interface between light and dark visual modes.

## Context
The app already defines light and dark CSS variables. Users need an explicit control in the main app shell to choose the active mode.

## Business Rules
- The app must default to light mode when no preference has been saved.
- The selected mode must persist between page reloads.
- The theme control must be available from the primary navigation.

## Functional Requirements
- Display a theme toggle button in the navigation.
- When the current mode is light, the toggle switches the app to dark mode.
- When the current mode is dark, the toggle switches the app to light mode.
- Store the selected mode in browser local storage.
- Apply dark mode by toggling the `dark` class on the document root.

## Non-Functional Requirements
- The control must be accessible by role and label.
- The implementation should remain simple and local to the app shell.
- Existing app content and workflows must continue to render.

## Acceptance Criteria
- Given no saved theme preference, the page loads in light mode.
- Given the user activates the theme toggle, the page switches to dark mode and stores that preference.
- Given the user activates the theme toggle again, the page switches to light mode and stores that preference.
- Given a saved dark preference, the page loads in dark mode after reload.
- Existing deterministic Playwright checks continue to pass.

## Error Cases
- If local storage is unavailable, the page should still render and allow theme switching for the current session.

## Out of Scope
- System theme detection.
- Additional theme palettes beyond light and dark.
- Server-side theme rendering.
