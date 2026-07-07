import type { PortfolioCase } from './case-types';

export type { CaseCategory, CaseCategoryItem, PortfolioCase } from './case-types';
export { caseCategories, casePhotosBaseUrl } from './case-settings';

type CaseModule = {
  default: PortfolioCase;
};

const caseModules = import.meta.glob<CaseModule>('./case-items/*.ts', { eager: true });

export const cases: PortfolioCase[] = Object.values(caseModules)
  .map((caseModule) => caseModule.default)
  .sort((leftCase, rightCase) => leftCase.sortOrder - rightCase.sortOrder);
