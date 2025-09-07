
import { Resource, ResourceCategory, FileType } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'What is i-Elite', path: '/about' },
  { name: 'Downloads', path: '/downloads' },
];

export const RESOURCES: Resource[] = [
  {
    id: 1,
    title: 'New Member Onboarding Guide',
    description: 'A comprehensive guide for new members to get started with i-Elite.',
    category: ResourceCategory.Training,
    fileUrl: '/downloads/onboarding-guide.pdf',
    fileType: FileType.PDF,
  },
  {
    id: 2,
    title: 'i-Elite Business Opportunity',
    description: 'Presentation slides explaining the business model and opportunities.',
    category: ResourceCategory.Business,
    fileUrl: '/downloads/business-opportunity.pptx',
    fileType: FileType.PPT,
  },
  {
    id: 3,
    title: 'Social Media Marketing Kit',
    description: 'Ready-to-use templates and graphics for social media promotion.',
    category: ResourceCategory.Marketing,
    fileUrl: '/downloads/social-media-kit.zip',
    fileType: FileType.DOC,
  },
  {
    id: 4,
    title: 'Leadership Training Manual',
    description: 'Advanced training materials for developing leadership skills.',
    category: ResourceCategory.Training,
    fileUrl: '/downloads/leadership-manual.pdf',
    fileType: FileType.PDF,
  },
  {
    id: 5,
    title: 'Product Catalog 2024',
    description: 'The latest catalog of all i-Elite products and services.',
    category: ResourceCategory.Marketing,
    fileUrl: '/downloads/product-catalog-2024.pdf',
    fileType: FileType.PDF,
  },
  {
    id: 6,
    title: 'Quarterly Business Review Template',
    description: 'A template for conducting effective quarterly business reviews with your team.',
    category: ResourceCategory.Business,
    fileUrl: '/downloads/qbr-template.pptx',
    fileType: FileType.PPT,
  },
   {
    id: 7,
    title: 'Compensation Plan Explained',
    description: 'A detailed document explaining the compensation structure.',
    category: ResourceCategory.Business,
    fileUrl: '/downloads/compensation-plan.pdf',
    fileType: FileType.PDF,
  },
  {
    id: 8,
    title: 'Effective Prospecting Techniques',
    description: 'Guide on how to find and approach potential new members.',
    category: ResourceCategory.Training,
    fileUrl: '/downloads/prospecting-techniques.docx',
    fileType: FileType.DOC,
  },
  {
    id: 9,
    title: 'Branded Email Signatures',
    description: 'Official i-Elite email signature templates for a professional look.',
    category: ResourceCategory.Marketing,
    fileUrl: '/downloads/email-signatures.zip',
    fileType: FileType.DOC,
  }
];
