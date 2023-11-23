export type AnyModel = Record<string, any> & {
  version?: string;
};

export type MigrationConfig = {
  version: string;
  test: <Model>(model: Model) => void;
  migrateUp?: (model: any) => any;
};
