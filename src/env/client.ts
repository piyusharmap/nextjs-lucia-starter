import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    // client variables
  },
  runtimeEnv: {
    // reference of client variables
  },
});
