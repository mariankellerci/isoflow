// import { AnyModel } from './types';
// import { getMigrationPath } from './utils';
// import { migrations } from './scripts';

// const migrationManager = (model: AnyModel) => {
//   const migrationPath = getMigrationPath(model, migrations);

//   migrationPath.reduce((acc, migration) => {
//     const newModel = migration.migrateUp ? migration.migrateUp(acc) : model;
//     migration.test(newModel);

//     return newModel;
//   }, model);
// };
