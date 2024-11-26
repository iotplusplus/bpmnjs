export interface AuthorizationDto {
  id: string;
  type: number; // 0 = global, 1 = grant, 2 = revoke
  permissions: string[];
  userId?: string;
  groupId?: string;
  resourceType: number;
  resourceId?: string;
  removalTime?: string;
  rootProcessInstanceId?: string;
}

export interface AuthorizationCheckResultDto {
  permissionName: string;
  resourceName: string;
  resourceId?: string;
  authorized: boolean;
}

export interface ExternalTaskDto {
  id: string;
  topicName: string;
  workerId: string;
  priority: number;
  retries: number;
  errorMessage?: string;
  errorDetails?: string;
  lockedUntil: string; // Date in ISO format
  businessKey?: string;
  tenantId?: string;
  created: string; // Date in ISO format
}

export interface ExternalTaskCompleteDto {
  workerId: string;
  variables?: Record<string, VariableValueDto>;
  localVariables?: Record<string, VariableValueDto>;
}

export interface ExternalTaskFailureDto {
  workerId: string;
  errorMessage: string;
  errorDetails?: string;
  retries?: number;
  retryTimeout?: number;
}

export interface HistoricExternalTaskLogDto {
  id: string;
  externalTaskId: string;
  topicName: string;
  workerId?: string;
  priority: number;
  retries?: number;
  errorMessage?: string;
  errorDetails?: string;
  activityId: string;
  activityInstanceId: string;
  processDefinitionId: string;
  processDefinitionKey: string;
  processInstanceId: string;
  tenantId?: string;
  removalTime?: string;
}

export interface HistoricTaskInstanceDto {
  id: string;
  name: string;
  assignee?: string;
  created: string; // Date in ISO format
  due?: string; // Date in ISO format
  followUp?: string; // Date in ISO format
  endTime?: string; // Date in ISO format
  duration?: number;
  priority: number;
  parentTaskId?: string;
  caseDefinitionId?: string;
  caseInstanceId?: string;
}

export interface TaskDto {
  id: string;
  name: string;
  assignee?: string;
  created: string; // Date in ISO format
  due?: string; // Date in ISO format
  followUp?: string; // Date in ISO format
  delegationState?: string;
  priority: number;
  tenantId?: string;
}

export interface CreateTaskAttachmentPayload {
  "attachment-name": string;
  "attachment-description": string;
  "attachment-type": string;
  "url": string;
  "content"?: string; //binary data
}

export interface TaskAttachmentDto {
  id: string;
  name: string;
  description?: string;
  type: string;
  url: string;
  createTime: string; // Date in ISO format
  taskId: string;
  processInstanceId?: string;
  links?: any[];
  removalTime?: string;
  rootProcessInstanceId?: string;
}

export interface TaskCommentDto {
  id: string;
  taskId: string;
  userId: string;
  message: string;
  createTime: string; // Date in ISO format
}

export interface TaskIdentityLinkDto {
  userId?: string;
  groupId?: string;
  type: string;
}

export interface TaskLocalVariableDto {
  key: string;
  value: any;
  type: string;
  valueInfo?: Record<string, any>;
}

export interface TaskVariableDto {
  key: string;
  value: any;
  type: string;
  valueInfo?: Record<string, any>;
}

export interface VariableValueDto {
  value: any;
  type: string;
  valueInfo?: Record<string, any>;
}

export interface HistoricExternalTaskLogCountDto {
  count: number;
}

export interface HistoricTaskInstanceCountDto {
  count: number;
}

export interface TaskCountDto {
  count: number;
}

export interface TaskCompletionDto {
  workerId: string;
  variables?: Record<string, VariableValueDto>;
}

export interface TaskDelegationDto {
  assignee: string;
}

export interface TaskAssigneeDto {
  userId: string;
}

export interface TaskClaimDto {
  userId: string;
}

export interface TaskDueDateDto {
  dueDate: string; // Date in ISO format
}

export interface TaskCreateDto {
  name: string;
  assignee?: string;
  dueDate?: string; // Date in ISO format
  followUpDate?: string; // Date in ISO format
  priority?: number;
  tenantId?: string;
}

export interface TaskUpdateDto {
  name?: string;
  assignee?: string;
  dueDate?: string; // Date in ISO format
  followUpDate?: string; // Date in ISO format
  priority?: number;
}

export interface AttachmentCreateDto {
  name: string;
  description?: string;
  type: string;
  url: string;
}

export interface CommentCreateDto {
  message: string;
}

export interface IdentityLinkCreateDto {
  userId?: string;
  groupId?: string;
  type: string;
}

export interface LocalVariableUpdateDto {
  key: string;
  value: any;
  type: string;
  valueInfo?: Record<string, any>;
}

export interface VariableUpdateDto {
  key: string;
  value: any;
  type: string;
  valueInfo?: Record<string, any>;
}

export interface BulkDeleteDto {
  taskIds: string[];
}

export interface ErrorResponseDto {
  type: string;
  message: string;
  code?: number;
  details?: string;
}

export interface ProcessDefinitionDto {
  id: string;
  key: string;
  category: string;
  description: string;
  name: string;
  version: number;
  resource: string;
  deploymentId: string;
  tenantId?: string;
  versionTag?: string;
  historyTimeToLive?: number;
  startableInTasklist: boolean;
}

export interface ProcessDefinitionXmlDto {
  id: string;
  bpmn20Xml: string;
}

export interface StartProcessInstanceDto {
  businessKey?: string;
  variables?: Record<string, VariableValueDto>;
  withVariablesInReturn?: boolean;
}

export interface StartProcessInstanceResponseDto {
  id: string;
  definitionId: string;
  businessKey?: string;
  caseInstanceId?: string;
  ended: boolean;
  suspended: boolean;
  tenantId?: string;
  variables?: Record<string, VariableValueDto>;
}

export interface HistoricUserOperationLogDto {
  id: string;
  operationId: string;
  userId: string;
  timestamp: string; // ISO date format
  operationType: string;
  entityType: string;
  property: string;
  orgValue?: string;
  newValue?: string;
  deploymentId?: string;
  processDefinitionId?: string;
  processDefinitionKey?: string;
  processInstanceId?: string;
  caseDefinitionId?: string;
  caseInstanceId?: string;
  taskId?: string;
  externalTaskId?: string;
  batchId?: string;
  tenantId?: string;
  rootProcessInstanceId?: string;
  removalTime?: string; // ISO date format
}

export interface HistoricUserOperationLogQueryDto {
  processInstanceId?: string;
  processDefinitionId?: string;
  userId?: string;
  operationType?: string;
  entityType?: string;
  property?: string;
  sortBy?: string;
  sortOrder?: string;
  firstResult?: number;
  maxResults?: number;
}

export interface HistoricUserOperationLogCountDto {
  count: number;
}