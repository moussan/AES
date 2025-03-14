# CryptoVisualizer

CryptoVisualizer is an interactive web application that visualizes encryption algorithms, cryptographic concepts, and data structures. The application provides step-by-step animations and explanations to help users understand how these algorithms work.

## Features

- Interactive visualizations of encryption algorithms
- Step-by-step explanations of cryptographic processes
- Detailed information about various encryption methods
- Real-time encryption and decryption using actual algorithms
- Modern, responsive UI with dark mode support

## Algorithms and Concepts

The application currently includes visualizations for:

- **AES (Advanced Encryption Standard)** - A symmetric block cipher used for secure data encryption
- RSA (Rivest–Shamir–Adleman) - Coming soon
- SHA (Secure Hash Algorithms) - Coming soon
- Data structures like Binary Trees and Hash Tables - Coming soon

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crypto-visualizer.git
   cd crypto-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
crypto-visualizer/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Technologies Used

- **Next.js** - React framework for server-rendered applications
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Crypto-JS** - JavaScript library of crypto standards

## Development

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build

```bash
npm start
# or
yarn start
```

## Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/AES`

To deploy manually:

```bash
npm run build
npm run export
```

This will generate a static version of your site in the `out` directory, which you can deploy to any static hosting service.

### Other Hosting Options

- **Vercel**: Optimal for Next.js projects with zero configuration
- **Netlify**: Great for static sites with additional features like forms
- **AWS Amplify**: Good for projects that need additional AWS services

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was inspired by the original AES encryption demo in C
- Special thanks to the cryptography community for their educational resources






