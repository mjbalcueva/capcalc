# CapCalc

A modern engineering calculator web application built with the T3 Stack, providing interactive structural engineering tools for professional engineers and students.

## Features

- **Bolted Connections Calculator**

  - Concentric Bolted Connection Analysis
  - Eccentric Bolted Connection Analysis

- **Welded Connections Calculator**

  - Balanced Weld Group Analysis
  - Eccentric Loading Calculations
  - Tension Forces on Welded Sections
  - Shear and Bending Analysis

- **Non-Built Up Columns Calculator**
  - Euler's Formula for Columns
  - NSCP 2001 Code Provisions
  - Base Plate Design

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety and enhanced developer experience
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Zod](https://zod.dev/) - Schema validation
- [Jotai](https://jotai.org/) - Atomic state management

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/             # Next.js 13 App Router
├── atoms/           # Jotai atoms for state management
├── components/      # Reusable UI components
├── lib/            # Utility functions and schemas
├── providers/      # React context providers
└── styles/         # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
