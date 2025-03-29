# Alt+Shift

This is a Next.js project using the App Router and `next/font/local` for local font optimization.

**Note:** Font files are located in the project root `/fonts` directory (not `/public`) because `next/font/local` requires direct file system access for build-time optimization. This ensures fonts are self-hosted, preloaded, and do not cause layout shift.
