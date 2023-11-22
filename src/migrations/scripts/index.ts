import { MigrationConfig } from '../types';
import { config as v1_0_11 } from './1.0.11/config';
import { config as v1_0_12 } from './1.0.12/config';

export const migrations: MigrationConfig[] = [v1_0_11, v1_0_12];
