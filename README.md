# Next.js 15 App Router: ISR Issue with Dynamic Routes

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routes and Incremental Static Regeneration (ISR).

## Bug Description

The issue is that ISR doesn't behave as expected with dynamic routes.  The page is not revalidated as often as specified in the `revalidate` setting.  This can lead to stale content being displayed.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the data may not update as frequently as expected when the underlying data changes.

## Expected Behavior

The page should be revalidated according to the `revalidate` setting in the ISR configuration.

## Actual Behavior

The page is not revalidated at the expected intervals. 

## Solution

The issue can be resolved by [insert description of the solution here]
