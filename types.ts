
export enum ResourceCategory {
  Training = 'Training Materials',
  Business = 'Business Presentations',
  Marketing = 'Marketing Tools',
}

export enum FileType {
    PDF = 'PDF',
    PPT = 'PPT',
    DOC = 'DOC'
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: ResourceCategory;
  fileUrl: string;
  fileType: FileType;
}
