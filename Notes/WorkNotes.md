## rn fetch blob code with changes

google() to maven {...} in buildcript repositories

implementation to compile

```
apply plugin: 'com.android.library'

def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}

repositories {
    mavenCentral()
}

buildscript {
    repositories {
        jcenter()
        maven {
            url 'https://maven.google.com'
            name 'Google'
        }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.4'
    }
}

android {
    compileSdkVersion safeExtGet('compileSdkVersion', 26)
    buildToolsVersion safeExtGet('buildToolsVersion', '26.0.3')
    defaultConfig {
        minSdkVersion safeExtGet('minSdkVersion', 16)
        targetSdkVersion safeExtGet('targetSdkVersion', 26)
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
    productFlavors {
    }
}

dependencies {
    compile "com.facebook.react:react-native:${safeExtGet('reactNativeVersion', '+')}"
    //compile 'com.squareup.okhttp3:okhttp:+'
    //{RNFetchBlob_PRE_0.28_DEPDENDENCY}
}
```
also in android files check Podfile....
