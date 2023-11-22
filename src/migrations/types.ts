export type AnyModel = { [k: string]: any } & {
  version?: string;
};

export type MigrationConfig = {
  version: string;
  test: <Model>(model: Model) => void;
  migrateUp?: <PrevModel, NewModel>(model: PrevModel) => NewModel;
};
