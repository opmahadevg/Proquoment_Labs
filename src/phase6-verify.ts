import { SERVICES_PRODUCT_ENGINEERING, SERVICES_AGENTS_AUTOMATION, SERVICES_TRANSFORMATION, ENGAGEMENT_MODELS } from "@/pages/ServicesPage";
import { SERVICE_TYPE_OPTIONS, BUDGET_RANGE_OPTIONS } from "@/pages/ContactPage";

export function verifyPhase6Exports() {
  const productEngValid =
    Array.isArray(SERVICES_PRODUCT_ENGINEERING) &&
    SERVICES_PRODUCT_ENGINEERING.length >= 8;

  const agentsValid =
    Array.isArray(SERVICES_AGENTS_AUTOMATION) &&
    SERVICES_AGENTS_AUTOMATION.length >= 8;

  const transformationValid =
    Array.isArray(SERVICES_TRANSFORMATION) &&
    SERVICES_TRANSFORMATION.length >= 7;

  const engagementModelsValid =
    Array.isArray(ENGAGEMENT_MODELS) &&
    ENGAGEMENT_MODELS.length === 3;

  const contactOptionsValid =
    Array.isArray(SERVICE_TYPE_OPTIONS) &&
    SERVICE_TYPE_OPTIONS.length > 0 &&
    Array.isArray(BUDGET_RANGE_OPTIONS) &&
    BUDGET_RANGE_OPTIONS.length > 0;

  return {
    productEngValid,
    agentsValid,
    transformationValid,
    engagementModelsValid,
    contactOptionsValid,
    productEngCount: SERVICES_PRODUCT_ENGINEERING.length,
    agentsCount: SERVICES_AGENTS_AUTOMATION.length,
    transformationCount: SERVICES_TRANSFORMATION.length,
    engagementCount: ENGAGEMENT_MODELS.length,
  };
}

export default verifyPhase6Exports;
