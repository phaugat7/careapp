import Constants from "expo-constants/src/Constants";

const settings = {
    dev: {
        apiUrl: 'http://192.168.1.132:4080',
    },
    staging: {
        apiUrl: 'http://192.168.1.132:9000/api',
    },
    prod: {
        apiUrl: 'http://192.168.1.132:9000/api',
    }
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();
