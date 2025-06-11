const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('\n🛠️  Running Pre-Build Check for Expo Project...\n');

// Check Node.js version
const nodeVersion = process.version;
const requiredNodeVersion = '>=14.0.0';

// Basic version check without semver
const checkNodeVersion = () => {
  const currentMajor = parseInt(nodeVersion.slice(1).split('.')[0], 10);
  const requiredMajor = parseInt(requiredNodeVersion.slice(2).split('.')[0], 10);
  
  if (currentMajor < requiredMajor) {
    console.error(`❌ Node.js version ${nodeVersion} is not supported. Required: ${requiredNodeVersion}`);
    console.log('💡 Please update Node.js to a compatible version: https://nodejs.org/');
    process.exit(1);
  } else {
    console.log(`✅ Node.js version: \x1b[36m${nodeVersion}\x1b[0m`);
  }
};

checkNodeVersion();

// 1. Run expo doctor
try {
  console.log('🔍 Running `expo doctor`...\n');
  execSync('npx expo-doctor  --verbose', { stdio: 'inherit' });
} catch (e) {
  console.warn('\n⚠️  Warning from expo doctor — please review any issues above.\n');
}

// 2. Load package.json and SDK version
const pkgPath = path.resolve('package.json');
if (!fs.existsSync(pkgPath)) {
  console.error('❌ package.json not found in project root.');
  process.exit(1);
}

// Define deps at a higher scope level
let deps = {};
let sdkVersion = 'unknown';

try {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  deps = { ...pkg.dependencies, ...pkg.devDependencies };
  sdkVersion = pkg.expo?.sdkVersion || 'unknown';
  console.log(`📦 Expo SDK Version: \x1b[36m${sdkVersion}\x1b[0m`);
  
  // Check for common dependency issues
  console.log('\n🔍 Checking dependencies...');
  
  // Check for React Native version compatibility with Expo SDK
  if (deps['react-native']) {
    console.log(`✓ React Native Version: \x1b[36m${deps['react-native']}\x1b[0m`);
  } else {
    console.warn('⚠️ React Native dependency not found in package.json');
  }
  
  // Check for React version compatibility
  if (deps['react']) {
    console.log(`✓ React Version: \x1b[36m${deps['react']}\x1b[0m`);
  } else {
    console.warn('⚠️ React dependency not found in package.json');
  }
  
  // Check for potential duplicate libraries or conflicting dependencies
  const navigationPackages = Object.keys(deps).filter(dep => 
    dep.includes('navigation') || dep.includes('router')
  );
  if (navigationPackages.length > 3) {
    console.warn('⚠️ Multiple navigation libraries detected. This might cause conflicts:');
    navigationPackages.forEach(pkg => console.log(`  - ${pkg}@${deps[pkg]}`));
  }
  
  // Check for outdated or deprecated packages
  const potentiallyProblematicPackages = [
    { name: 'react-native-webview-bridge', message: 'deprecated, use react-native-webview instead' },
    { name: 'react-native-maps-directions', message: 'consider using react-native-maps with directions support' }
  ];
  
  potentiallyProblematicPackages.forEach(({ name, message }) => {
    if (deps[name]) {
      console.warn(`⚠️ Package ${name} is ${message}`);
    }
  });
  
} catch (error) {
  console.error('❌ Error parsing package.json:', error.message);
  process.exit(1);
}

// 3. Detect native modules
const nativePrefixes = [
  'react-native-', 'expo-camera', 'expo-location', 'expo-av',
  'expo-image-picker', 'expo-media-library', 'expo-notifications',
  'expo-sensors', 'expo-speech', 'expo-blur', 'expo-contacts',
  'expo-file-system', 'expo-haptics', 'expo-local-authentication',
  'expo-secure-store', 'expo-sharing', 'expo-sms', 'expo-vibration',
  'expo-face-detector', 'expo-barcode-scanner'
];

const nativeModules = Object.keys(deps).filter(name =>
  nativePrefixes.some(prefix => name.startsWith(prefix))
);

if (nativeModules.length > 0) {
  console.log('\n⚠️  Native modules detected (require Dev Client rebuild):');
  nativeModules.forEach(name => {
    console.log(` - ${name}@${deps[name]}`);
  });
  console.log('\n💡 Suggested: \x1b[32meas build --profile development --platform android\x1b[0m');
} else {
  console.log('\n✅ No native modules found — no rebuild needed.');
}

// Check app.json configuration
console.log('\n🔍 Checking app.json configuration...');
const appJsonPath = path.resolve('app.json');

if (!fs.existsSync(appJsonPath)) {
  console.error('❌ app.json not found in project root');
} else {
  try {
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf-8'));
    const expo = appJson.expo || {};
    
    // Check required fields
    const requiredFields = ['name', 'slug', 'version'];
    const missingFields = requiredFields.filter(field => !expo[field]);
    
    if (missingFields.length > 0) {
      console.error(`❌ app.json missing required fields: ${missingFields.join(', ')}`);
    } else {
      console.log('✅ app.json contains all required fields');
    }
    
    // Check for icon and splash screen
    if (!expo.icon) {
      console.warn('⚠️ No app icon specified in app.json');
    } else {
      const iconPath = path.resolve(expo.icon.startsWith('./') ? expo.icon : `./${expo.icon}`);
      if (!fs.existsSync(iconPath)) {
        console.error(`❌ App icon file not found: ${expo.icon}`);
      }
    }
    
    if (!expo.splash || !expo.splash.image) {
      console.warn('⚠️ No splash screen image specified in app.json');
    } else {
      const splashPath = path.resolve(expo.splash.image.startsWith('./') ? 
        expo.splash.image : `./${expo.splash.image}`);
      if (!fs.existsSync(splashPath)) {
        console.error(`❌ Splash screen image not found: ${expo.splash.image}`);
      }
    }
    
    // Check for platform-specific configurations
    if (!expo.android || !expo.android.package) {
      console.warn('⚠️ No Android package name specified in app.json');
    } else {
      console.log(`✓ Android package name: \x1b[36m${expo.android.package}\x1b[0m`);
    }
    
    if (!expo.ios || !expo.ios.bundleIdentifier) {
      console.warn('⚠️ No iOS bundle identifier specified in app.json');
    } else {
      console.log(`✓ iOS bundle identifier: \x1b[36m${expo.ios.bundleIdentifier}\x1b[0m`);
    }
    
    // Check plugins configuration
    if (!expo.plugins || expo.plugins.length === 0) {
      console.warn('⚠️ No Expo plugins configured in app.json');
    } else {
      console.log(`✓ Expo plugins configured: \x1b[36m${expo.plugins.length}\x1b[0m`);
      
      // Check for dev client if native modules detected
      const hasDevClient = expo.plugins.includes('expo-dev-client');
      if (nativeModules.length > 0 && !hasDevClient) {
        console.error('❌ Native modules detected but expo-dev-client plugin not configured in app.json');
        console.log('💡 Add "expo-dev-client" to the plugins array in app.json');
      }
    }
    
  } catch (error) {
    console.error('❌ Error parsing app.json:', error.message);
  }
}

// 4. Check for eas.json and auto-generate if needed
const easPath = path.resolve('eas.json');
let easConfig = {};

if (fs.existsSync(easPath)) {  try {
    easConfig = JSON.parse(fs.readFileSync(easPath, 'utf-8'));
    const hasDevProfile = easConfig.build?.development?.developmentClient === true;

    if (hasDevProfile) {
      console.log('\n🧪 EAS config: \x1b[32mValid Development profile found.\x1b[0m');
    } else {
      console.warn('\n⚠️  EAS config exists but missing "developmentClient: true". Updating...');
      easConfig.build = {
        ...easConfig.build,
        development: {
          developmentClient: true,
          distribution: 'internal'
        }
      };
      fs.writeFileSync(easPath, JSON.stringify(easConfig, null, 2));
      console.log('✅ EAS config updated with development profile.');
    }
  } catch (error) {
    console.error('❌ Error parsing eas.json:', error.message);
    console.warn('Creating new eas.json file with default configuration...');
    
    // Continue with creating a new config
    easConfig = {
      cli: {
        version: '>= 3.0.0'
      },
      build: {
        development: {
          developmentClient: true,
          distribution: 'internal'
        },
        preview: {
          distribution: 'internal'
        },
        production: {}
      }
    };
    fs.writeFileSync(easPath, JSON.stringify(easConfig, null, 2));
    console.log('✅ Created eas.json with development, preview, and production profiles.');
  }
} else {
  console.warn('\n❌ No eas.json found. Creating default config...');
  easConfig = {
    cli: {
      version: '>= 3.0.0'
    },
    build: {
      development: {
        developmentClient: true,
        distribution: 'internal'
      },
      preview: {
        distribution: 'internal'
      },
      production: {}
    }
  };
  fs.writeFileSync(easPath, JSON.stringify(easConfig, null, 2));
  console.log('✅ Created eas.json with development, preview, and production profiles.');
}

// 5. Check for unused dependencies
console.log('\n🔍 Checking for unused dependencies...');
try {
  // Get list of all packages in node_modules
  const installedPackages = Object.keys(deps);
  
  // Define patterns to search for in import statements
  const importPatterns = [
    /import\s+.*\s+from\s+['"]([-@\w\/\.]+)['"]/g,         // ES6 imports: import X from 'package'
    /import\s+['"]([-@\w\/\.]+)['"]/g,                     // Side-effect imports: import 'package'
    /require\s*\(\s*['"]([-@\w\/\.]+)['"]\s*\)/g,          // CommonJS requires: require('package')
    /React\.lazy\s*\(\s*\(\)\s*=>\s*import\s*\(['"]([-@\w\/\.]+)['"]\)/g // React.lazy dynamic imports
  ];
  
  // Track which packages are in use
  const usedPackages = new Set();
  
  // Recursive function to find JavaScript files
  const findJsFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
        // Recursively search directories
        results = results.concat(findJsFiles(filePath));
      } else if (stat.isFile() && 
                 (file.endsWith('.js') || file.endsWith('.jsx') || 
                  file.endsWith('.ts') || file.endsWith('.tsx'))) {
        // Add JavaScript/TypeScript files
        results.push(filePath);
      }
    });
    
    return results;
  };
  
  // Get all JS/TS files in the project
  console.log('  Scanning project files for imports...');
  const jsFiles = findJsFiles(path.resolve('.'));
  
  // Extract package names from all imports in the codebase
  jsFiles.forEach(file => {
    const code = fs.readFileSync(file, 'utf-8');
    
    // Check for all import patterns
    for (const pattern of importPatterns) {
      const matches = code.matchAll(pattern);
      for (const match of matches) {
        const imported = match[1];
        
        // Get root package name (handle subpath imports like 'lodash/map')
        let packageName = imported.split('/')[0];
        // Handle scoped packages like @react-navigation/native
        if (packageName.startsWith('@')) {
          packageName = packageName + '/' + imported.split('/')[1];
        }
        
        // Skip relative imports
        if (!packageName.startsWith('.') && !packageName.startsWith('@/')) {
          usedPackages.add(packageName);
        }
      }
    }
  });
  
  // Identify core dependencies that should always be kept
  const coreDependencies = [
    'react', 'react-native', 'expo', 'expo-status-bar', 'expo-splash-screen', 
    'metro-runtime', '@babel/core', 'babel-preset-expo', '@expo/webpack-config'
  ];
  
  // Add core dependencies to used packages
  coreDependencies.forEach(pkg => usedPackages.add(pkg));
  
  // Find potentially unused packages
  const unusedPackages = installedPackages.filter(pkg => 
    !usedPackages.has(pkg) && !pkg.startsWith('@types/')
  );
  
  if (unusedPackages.length > 0) {
    console.log('\n⚠️  Potentially unused packages detected:');
    unusedPackages.forEach(pkg => {
      console.log(`  - ${pkg}@${deps[pkg]}`);
    });
    console.log('\n💡 Consider removing these packages by running:');
    console.log(`\x1b[32m  npm uninstall ${unusedPackages.join(' ')}\x1b[0m`);
    console.log('  (Verify they are truly unused before removing)');
  } else {
    console.log('✅ No obviously unused packages detected.');
  }
} catch (error) {
  console.error('⚠️ Error checking for unused packages:', error.message);
  console.log('  Skipping unused packages check...');
}

console.log('\n✅ Pre-build check complete!\n');
console.log('🚀 Ready to build your Expo project!');