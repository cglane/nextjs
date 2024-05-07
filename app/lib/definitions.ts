// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Progress = {
  id: string;
  name: string;
  firm_id: string;
  current_path: string;
};
export type CaseType = {
  id: string;
  name: string;
  firm_id: string;
  import_names: Array<string>;
};
export type CaseStatus = {
  id: string;
  name: string;
  firm_id: string;
  case_type_id: string
  description: string;
  import_names: string;
};