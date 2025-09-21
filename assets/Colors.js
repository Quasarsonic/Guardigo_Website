// Color palette for Guardigo website
// This file provides consistent color values across the project

export const Colors = {
    // Primary colors
    primary: '#FFD700',        // Gold/Yellow - main brand color
    primaryDark: '#E6C200',    // Darker gold for hover states
    primaryLight: '#FFF59D',   // Light gold for backgrounds
    
    // Secondary colors
    secondary: '#1a1a1a',      // Dark gray/black
    secondaryLight: '#333333', // Lighter dark gray
    
    // Accent colors
    accent: '#ff6b6b',         // Red for emergency/alert elements
    accentDark: '#e55555',     // Darker red
    accentLight: '#ff8a8a',    // Lighter red
    
    // Success colors
    success: '#4CAF50',        // Green for success states
    successDark: '#45a049',    // Darker green
    successLight: '#81C784',   // Lighter green
    
    // Warning colors
    warning: '#FF9800',        // Orange for warnings
    warningDark: '#F57C00',    // Darker orange
    warningLight: '#FFB74D',   // Lighter orange
    
    // Info colors
    info: '#2196F3',           // Blue for information
    infoDark: '#1976D2',       // Darker blue
    infoLight: '#64B5F6',      // Lighter blue
    
    // Text colors
    textPrimary: '#333333',    // Main text color
    textSecondary: '#666666',  // Secondary text color
    textLight: '#999999',      // Light text color
    textWhite: '#ffffff',      // White text
    
    // Background colors
    backgroundWhite: '#ffffff',    // Main background
    backgroundLight: '#f8f9fa',    // Light background
    backgroundDark: '#1a1a1a',     // Dark background
    backgroundGray: '#e9ecef',     // Gray background
    
    // Border colors
    borderLight: '#e1e5e9',    // Light border
    borderMedium: '#d1d5db',   // Medium border
    borderDark: '#9ca3af',     // Dark border
    
    // Shadow colors
    shadowLight: 'rgba(0, 0, 0, 0.1)',
    shadowMedium: 'rgba(0, 0, 0, 0.15)',
    shadowHeavy: 'rgba(0, 0, 0, 0.2)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    
    // Gradient colors
    gradients: {
        primary: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        secondary: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        hero: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        card: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        button: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        emergency: 'linear-gradient(135deg, #ff6b6b 0%, #e55555 100%)'
    },
    
    // Status colors
    status: {
        online: '#4CAF50',     // Green for online status
        offline: '#9E9E9E',    // Gray for offline status
        warning: '#FF9800',    // Orange for warning status
        error: '#F44336',      // Red for error status
        info: '#2196F3'        // Blue for info status
    },
    
    // Social media colors
    social: {
        facebook: '#1877F2',
        twitter: '#1DA1F2',
        instagram: '#E4405F',
        linkedin: '#0A66C2',
        youtube: '#FF0000'
    }
};

// Helper function to get color with opacity
export const getColorWithOpacity = (color, opacity) => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Helper function to get CSS custom property
export const getCSSVariable = (colorName) => {
    return `var(--${colorName})`;
};

export default Colors;
