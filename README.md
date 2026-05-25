
# 💱 Currency Converter

A simple and elegant React-based currency converter application that allows users to convert between different currencies in real-time.

## Features

USD: 1 EUR: 0.92 GBP: 0.78 JPY: 156.7

Code

*Note: These are sample rates. For production use, integrate a live currency API.*

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
Install dependencies:
bash
npm install
Start the development server:
bash
npm start
Open http://localhost:3000 in your browser

###Usage

Enter Amount - Type the amount you want to convert in the input field
Select From Currency - Choose the currency you're converting from
Select To Currency - Choose the currency you want to convert to
View Result - The converted amount displays automatically in the result box

#### Project Structure

Code
currency-converter/
├── src/
│   ├── CurrencyConverter.jsx    # Main component
│   ├── CurrencyConverter.css    # Styling
│   ├── App.jsx                   # App wrapper
│   └── index.js                  # Entry point
├── package.json
└── README.md
How It Works

##### The application uses React hooks to manage state:

useState - Manages the amount, source currency, and target currency
useMemo - Optimizes currency conversion calculations to prevent unnecessary recalculations
Conversion Logic
Convert input amount to USD (base currency)
Convert USD amount to target currency
Update display in real-time

###### JavaScript

// Conversion formula
const currencyForUsd = amount / rates[fromCurrency];
const convertedAmount = currencyForUsd * rates[toCurrency];
Technologies Used
React - UI library
JavaScript (ES6+) - Programming language
CSS3 - Styling with gradients and animations

###### Responsive Design

The application is fully responsive with breakpoints for:

📱 Mobile devices (< 480px)
💻 Tablets (480px - 768px)
🖥️ Desktop (> 768px)
Future Enhancements
🔄 Integrate live currency exchange rate API
🌐 Add more currency options
💾 Save conversion history
🌙 Dark mode toggle
📊 Historical rate charts
🔔 Currency rate notifications

####### API Integration (Optional)
To use live exchange rates, integrate with APIs like:

Open Exchange Rates
Fixer.io
Alpha Vantage
Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Performance
Lightweight component (~5KB)
Uses React memoization for optimized re-renders
No external dependencies required
Accessibility
Semantic HTML structure
Proper form labels
Keyboard navigation support
Focus state indicators
High contrast design
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

######## Steps to contribute:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

######### License
This project is licensed under the MIT License - see the LICENSE file for details.

########## Author

Yasser Alsatum
GitHub: @Yasser514

########### Support
If you have any questions or need help, feel free to open an issue on GitHub.

Made with ❤️ by Yasser514

Code

############ This README includes:

- ✅ Clear project description
- ✅ Features list
- ✅ Installation instructions
- ✅ Usage guide
- ✅ Project structure
- ✅ How it works explanation
- ✅ Technologies used
- ✅ Future enhancements
- ✅ Contributing guidelines
- ✅ License information
- ✅ Browser support

Feel free to customize it with your GitHub username and any other specific details about y
