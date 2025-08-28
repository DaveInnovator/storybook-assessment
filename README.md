# Storybook-assessment
A reusable React + TypeScript + TailwindCSS component library including:

- **InputField**: Flexible input component with variants, sizes, validation states, password toggle, and optional clear button.
- **DataTable**: Fully typed, sortable, selectable table with loading & empty states.

This library is designed for modern frontend development, ready for production, and can be easily integrated into any React project.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Components](#components)
- [Storybook](#storybook)
- [Project Structure](#project-structure)
- [Approach & Best Practices](#approach--best-practices)

---

## Demo

A live Storybook preview of all components is available once deployed:

**Storybook Preview**: 

---

## Features

### InputField
- Controlled and uncontrolled support
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `sm`, `md`, `lg`
- States: `disabled`, `invalid`, `loading`
- Optional: clear button, password toggle
- Theme support: light & dark
- Helper text and error messages

### DataTable
- Display tabular data with proper TypeScript typing
- Column sorting (ascending/descending)
- Row selection (single & multiple)
- Loading state with skeleton UI
- Empty state with friendly message
- Responsive design

---

## Getting Started

### 1. Clone the repo

git clone <https://github.com/DaveInnovator/storybook-assessment>
cd component-library
### 2. Install dependencies
npm install

### 3. Run Storybook locally
npm run storybook

### 4. Build Storybook for production
npm run build-storybook

# Components

All components are located in src/components and exported from src/components/index.ts for easy import:

import { InputField, DataTable } from 'component-library';

# Storybook

Each component has multiple stories covering all states (default, error, loading, empty, sizes, variants, etc.).

Stories are located next to the component files (InputField.stories.tsx, DataTable.stories.tsx).

Storybook supports both light & dark themes and fully responsive layouts.

# Project Structure
<img width="273" height="872" alt="Screenshot 2025-08-28 143211" src="https://github.com/user-attachments/assets/09f65897-3670-4a7b-9b35-280e495b4a35" />

# Approach & Best Practices

TypeScript generics ensure strong typing and safety.

TailwindCSS for modular, responsive, and themeable styling.

Controlled & uncontrolled inputs for flexibility.

Accessibility: ARIA attributes for tables, inputs, checkboxes.

Clean Storybook stories to visualize all states for easier design/system handoff.


