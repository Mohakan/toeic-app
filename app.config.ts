import type { ConfigContext, ExpoConfig } from 'expo/config';
import { examFrom } from './src/exams/catalog.ts';

/**
 * One store app per exam from this code base. app.json holds everything the apps share; the exam
 * chosen with EXPO_PUBLIC_EXAM (TOEIC by default) sets the name and the store identifiers.
 */
export default ({ config }: ConfigContext): ExpoConfig => {
  const exam = examFrom(process.env.EXPO_PUBLIC_EXAM);
  if (exam.status !== 'live') {
    throw new Error(`${exam.appName} (${exam.examLabel}) is planned but has no content yet: it cannot be built.`);
  }
  return {
    ...config,
    name: exam.appName,
    slug: exam.slug,
    ...(exam.icons ? { icon: `${exam.icons.dir}/icon.png` } : {}),
    ios: { ...config.ios, bundleIdentifier: exam.bundleId },
    android: {
      ...config.android,
      package: exam.bundleId,
      ...(exam.icons
        ? {
            adaptiveIcon: {
              backgroundColor: exam.icons.background,
              foregroundImage: `${exam.icons.dir}/android-icon-foreground.png`,
              backgroundImage: `${exam.icons.dir}/android-icon-background.png`,
              monochromeImage: `${exam.icons.dir}/android-icon-monochrome.png`,
            },
          }
        : {}),
    },
    web: { ...config.web, ...(exam.icons ? { favicon: `${exam.icons.dir}/favicon.png` } : {}) },
    extra: { ...config.extra, exam: exam.id },
  };
};
