/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  KubernetesRequestBody,
  ObjectsByEntityResponse,
  WorkloadsByEntityRequest,
  CustomObjectsByEntityRequest,
} from '@backstage/plugin-kubernetes-common';
import { createApiRef } from '@backstage/core-plugin-api';

export const kubernetesApiRef = createApiRef<KubernetesApi>({
  id: 'plugin.kubernetes.service',
});

export interface KubernetesApi {
  getObjectsByEntity(
    requestBody: KubernetesRequestBody,
  ): Promise<ObjectsByEntityResponse>;
  getClusters(): Promise<
    {
      name: string;
      authProvider: string;
      oidcTokenProvider?: string | undefined;
    }[]
  >;
  getWorkloadsByEntity(
    request: WorkloadsByEntityRequest,
  ): Promise<ObjectsByEntityResponse>;
  getCustomObjectsByEntity(
    request: CustomObjectsByEntityRequest,
  ): Promise<ObjectsByEntityResponse>;

  // TODO(dio): Make sure we have the right request object type.
  deleteObject(request: any) : Promise<any>;
  applyObject(request: any) : Promise<any>;
}
