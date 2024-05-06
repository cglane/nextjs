
# Fonts
Fonts are added to static package via the fonts.ts file.

# CSS
Tailwind css only adds the classes used in ts file to the ultimate css build, preventing un-used css from being included in package.
Any custom css classes should be added in the styles folder.

# Sizing and Screen Sizing
Tailwind is mobile first so any formatting that is not mobile specific should use the 'md:XX' naming convention'
I have found that changing screen size while developing helps prevent conflicts.

# i18N
Variables should be named with the element type first followed by reference to the text itself. For example, 'h_welcome_title' == "Welcome to Case Status"
Translations are route specific to avoid collisions. Therefore any text shown on the /progress endpoint should exist in the 'progress.json' file.
We define the 'pages' in the i18n.json file.

# Authentication
Authentication is handled through the middleware.ts file. This stands between all page requests and screen rendering. We are persisting a token granted from the Api in our cookies. Should we receive a 403 from the Api we should route the user back to the login screen.

# Node
- Must use node v 18+

# How to deploy to Vercel?
- TODO

# Filenaming
Use snake case. 'right_column.tsx'
Why? Why not.

# TODO
- i18n, https://github.com/i18next/next-i18next
- Global state managment, Zustand?

# Guiding Points
    - Use Tailwind as much as you can, custom classes should be used only if tailwind classes have been exhausted
    -All components should be tested on 3 screen widths
    - Always use 'md' when thinking about desktop screens.


# Warnings
- Using the "use client" tag with next-translate can have strange hydration errors
- If you see a '... is not a function' error it could be because you have used 'use client' where you shouldn't have