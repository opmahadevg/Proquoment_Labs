import {
  HomePage,
  PRODUCT_ENGINEERING_CAPABILITIES,
  TRANSFORMATION_CAPABILITIES,
  CORE_ENGINE_CAPABILITIES,
  AUDIENCE_PROFILES,
} from "@/pages/HomePage";

export function verifyPhase5Exports() {
  const hasHomePage = typeof HomePage === "function";

  const productEngValid =
    Array.isArray(PRODUCT_ENGINEERING_CAPABILITIES) &&
    PRODUCT_ENGINEERING_CAPABILITIES.length === 6;

  const transformationValid =
    Array.isArray(TRANSFORMATION_CAPABILITIES) &&
    TRANSFORMATION_CAPABILITIES.length === 6;

  const coreEngineValid =
    Array.isArray(CORE_ENGINE_CAPABILITIES) &&
    CORE_ENGINE_CAPABILITIES.length === 6;

  const audienceProfilesValid =
    Array.isArray(AUDIENCE_PROFILES) &&
    AUDIENCE_PROFILES.length === 6;

  return {
    hasHomePage,
    productEngValid,
    transformationValid,
    coreEngineValid,
    audienceProfilesValid,
    productEngCount: PRODUCT_ENGINEERING_CAPABILITIES.length,
    transformationCount: TRANSFORMATION_CAPABILITIES.length,
    audienceCount: AUDIENCE_PROFILES.length,
  };
}

export default verifyPhase5Exports;
