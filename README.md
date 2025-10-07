# TicketTracker
An app to check tickets and set reviews

🛠 Technologies Used
Frontend Framework
React Native 0.74.3 - Cross-platform mobile framework

React 18.3.1 - UI library with hooks

Expo SDK 54 - Development platform and services

Navigation & UI Components
@react-native-picker/picker - Customizable picker component

@expo/vector-icons - Comprehensive icon library (Ionicons, MaterialIcons, FontAwesome)

React Native Animated - Smooth animations and transitions

React Native Gesture Handler - Touch and gesture handling

Styling & Design
React Native StyleSheet - Component styling

Custom Color Palette - Professional dark theme with purple accent

Inter Font Family - Modern, readable typography

Flexbox Layout - Responsive design system

State Management
React Hooks (useState, useEffect) - Local component state

Functional Components - Modern React patterns

Development Tools
Expo CLI - Development and build tools

Metro Bundler - JavaScript bundler

TypeScript - Type safety and better development experience

Expo Font - Custom font loading

Expo Status Bar - Status bar customization

Animation & UX
React Native Reanimated (compatible) - Performance animations

Lottie-ready Architecture - Prepared for future animation integration

Progress Animations - Wolf running animation with progress tracking

Loading States - Professional loading sequences

📦 Installation
Prerequisites
Node.js 16+

npm or yarn

Expo Go app on your mobile device

Android Studio (for emulator) - optional

Quick Start
Clone the repository

bash
git clone <repository-url>
cd TicketTracker
Install dependencies

bash
npm install
Start the development server

bash
npx expo start
Run on your device

Scan the QR code with Expo Go (Android)

Or press 'a' for Android emulator

Or press 'i' for iOS simulator

Building for Production
bash
# Build for Android
npx expo build:android

# Build for iOS
npx expo build:ios
🎯 Usage
Creating a Ticket
Tap the floating action button (+)

Enter ticket title and description

Select priority level (High, Medium, Low)

Choose initial status

Tap "Create" to save

Managing Tickets
Edit: Tap the edit icon on any ticket

Delete: Tap the trash icon to remove a ticket

Rate: For completed tickets, tap stars to rate

Filter: View by status using the status badges

Ticket Status Flow
Created → Blue badge, no rating available

Under Assistance → Yellow badge, active work

Completed → Green badge, rating enabled

🏗 Project Structure
text
TicketTracker/
├── App.js                 # Main application component
├── index.js              # Application entry point
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── assets/               # Static assets
│   ├── fonts/            # Inter font family
│   ├── icon.png          # App icon
│   ├── adaptive-icon.png # Android adaptive icon
│   ├── splash.png        # Splash screen
│   └── favicon.png       # Web favicon
└── components/           # Reusable components
    ├── TicketItem.js     # Individual ticket component
    ├── LoadingScreen.js  # Initial loading animation
    └── WolfProgress.js   # Wolf progress indicator
🎨 Design System
Color Palette
Primary: #6366f1 (Vibrant purple)

Background: #0f172a (Dark blue)

Card: #1e293b (Medium blue)

Text: #f8fafc (White)

Success: #10b981 (Green)

Warning: #f59e0b (Orange)

Error: #ef4444 (Red)

Typography
Primary Font: Inter (Bold, Regular)

Headings: 24-32px, Bold

Body: 14-18px, Regular

Labels: 12-16px, Medium

🔧 Configuration
Environment Setup
The app requires minimal configuration:

Expo SDK 54+

React Native 0.74+

Node.js 16+

Platform Support
✅ Android 6.0+

✅ iOS 12.0+

✅ Web (Progressive Web App)

✅ Tablet layouts

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 Scripts
npm start - Start development server

npm run android - Run on Android

npm run ios - Run on iOS simulator

npm run web - Run on web browser

npm run build - Build for production

🐛 Troubleshooting
Common Issues
Expo Go Version Mismatch

bash
# Update to correct SDK version
npx expo install --fix
Font Loading Issues

Ensure fonts are in assets/fonts/ directory

Check font file names match import references

Animation Performance

Use useNativeDriver: true for better performance

Avoid unnecessary re-renders
