# Case Status meets NextJs

## Fonts

Fonts are added to static package via the fonts.ts file.

## CSS

Tailwind css only adds the classes used in ts file to the ultimate css build, preventing un-used css from being included in package.
Any custom css classes should be added in the styles folder.
Custom classes live in ui/styles and can be written in sass.

## Sizing and Screen Sizing

Tailwind is mobile first so any formatting that is not mobile specific should use the 'md:XX' naming convention'
I have found that changing screen size while developing helps prevent conflicts.

## i18N

Variables should be named with the element type first followed by reference to the text itself. For example, 'h_welcome_title' == "Welcome to Case Status"
Translations are route specific to avoid collisions. Therefore any text shown on the /progress endpoint should exist in the 'progress.json' file.
We define the 'pages' in the i18n.json file.

## Authentication

Authentication is handled through the middleware.ts file. This stands between all page requests and screen rendering. We are persisting a token granted from the Api in our cookies. Should we receive a 403 from the Api we should route the user back to the login screen.

## State Management

We have implemented Zustand as a global state store. Use sparingly.
Otherwise react useState is sufficient in most scenarios.

## Node

- Must use node v 18+

## How to deploy to Vercel?

- Vercel will create a deployment for all commits on the 'staging' branch
- Vercel will also create a 'preview' of all other branches

## Filenaming

Use snake case. 'right_column.tsx'
Why? Why not.

## Guiding Points

- Use Tailwind as much as you can, custom classes should be used only if tailwind classes have been exhausted
- All components should be tested on 3 screen widths
- Always use 'md' when thinking about desktop screens.
- Data fetching and internationalization should be handled in server rendered files, and passed down to client files.
- All static language should be capture by a variable with the locales file.

## Gotchas

You cannot use state management or internationalization in client files.
Using the "use client" tag with next-translate can have strange hydration errors
If you see a '... is not a function' error it could be because you have used 'use client' where you shouldn't have
