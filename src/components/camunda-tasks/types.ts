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

export interface TaskQueryDto {
  taskId?: string; // Restrict to task with the given id
  taskIdIn?: string; // Restrict to tasks with any of the given ids (comma-separated)
  processInstanceId?: string; // Restrict to tasks belonging to a process instance with the given id
  processInstanceIdIn?: string; // Restrict to tasks belonging to process instances with the given ids (comma-separated)
  processInstanceBusinessKey?: string; // Restrict to tasks belonging to a process instance with the given business key
  processInstanceBusinessKeyIn?: string; // Restrict to tasks belonging to process instances with business keys (comma-separated)
  processInstanceBusinessKeyLike?: string; // Restrict to tasks with process instance business key containing this substring
  processDefinitionId?: string; // Restrict to tasks belonging to a process definition with the given id
  processDefinitionKey?: string; // Restrict to tasks belonging to a process definition with the given key
  processDefinitionKeyIn?: string; // Restrict to tasks belonging to process definitions with the given keys (comma-separated)
  executionId?: string; // Restrict to tasks belonging to the given execution id
  caseInstanceId?: string; // Restrict to tasks belonging to the given case instance id
  caseInstanceBusinessKey?: string; // Restrict to tasks belonging to the given case instance business key
  caseInstanceBusinessKeyLike?: string; // Restrict to tasks with case instance business key containing this substring
  caseDefinitionId?: string; // Restrict to tasks belonging to a case definition with the given id
  caseDefinitionKey?: string; // Restrict to tasks belonging to a case definition with the given key
  caseExecutionId?: string; // Restrict to tasks belonging to the given case execution id
  activityInstanceIdIn?: string; // Comma-separated list of activity instance ids
  tenantIdIn?: string; // Comma-separated list of tenant ids
  withoutTenantId?: boolean; // Include tasks with no tenant
  assignee?: string; // Restrict to tasks assigned to the given user
  assigneeLike?: string; // Restrict to tasks with assignees containing this substring
  assigneeIn?: string; // Comma-separated list of assignees
  assigneeNotIn?: string; // Comma-separated list of excluded assignees
  owner?: string; // Restrict to tasks owned by the given user
  candidateGroup?: string; // Restrict to tasks offered to the given group
  candidateUser?: string; // Restrict to tasks offered to the given user
  includeAssignedTasks?: boolean; // Include assigned tasks in candidate queries
  involvedUser?: string; // Restrict to tasks the user is involved in
  taskDefinitionKey?: string; // Restrict to tasks with the given key
  taskDefinitionKeyIn?: string; // Comma-separated list of task definition keys
  name?: string; // Restrict to tasks with the given name
  nameLike?: string; // Restrict to tasks with names containing this substring
  description?: string; // Restrict to tasks with the given description
  descriptionLike?: string; // Restrict to tasks with descriptions containing this substring
  priority?: number; // Restrict to tasks with the given priority
  maxPriority?: number; // Restrict to tasks with priority <= maxPriority
  minPriority?: number; // Restrict to tasks with priority >= minPriority
  dueDate?: string; // Restrict to tasks due on this date
  dueAfter?: string; // Restrict to tasks due after this date
  dueBefore?: string; // Restrict to tasks due before this date
  followUpDate?: string; // Restrict to tasks with this follow-up date
  followUpAfter?: string; // Restrict to tasks with follow-up dates after this date
  followUpBefore?: string; // Restrict to tasks with follow-up dates before this date
  createdOn?: string; // Restrict to tasks created on this date
  createdAfter?: string; // Restrict to tasks created after this date
  createdBefore?: string; // Restrict to tasks created before this date
  updatedAfter?: string; // Restrict to tasks updated after this date
  delegationState?: "PENDING" | "RESOLVED"; // Restrict to tasks in the given delegation state
  candidateGroups?: string; // Comma-separated list of candidate groups
  withCandidateGroups?: boolean; // Include tasks with candidate groups
  withoutCandidateGroups?: boolean; // Exclude tasks with candidate groups
  active?: boolean; // Restrict to active tasks
  suspended?: boolean; // Restrict to suspended tasks
  sortBy?: string; // Sort the results by a specific field
  sortOrder?: "asc" | "desc"; // Sorting order
  firstResult?: number; // Pagination: Index of the first result
  maxResults?: number; // Pagination: Maximum number of results to return
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
  lastUpdated: string;
  description: null,
  executionId: string;
  owner?: string;
  parentTaskId?: string;
  processDefinitionId: string;
  processInstanceId: string;
  taskDefinitionKey: string;
  caseExecutionId?: string;
  caseInstanceId?: string;
  caseDefinitionId?: string;
  suspended: boolean;
  formKey?: string;
  camundaFormRef?: any;
  taskState: string;
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

export interface CreateTaskCommentDto {
  message: string;
  processInstanceId: string;
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
  deploymentId?: string; // Filter by deployment id
  processDefinitionId?: string; // Filter by process definition id
  processDefinitionKey?: string; // Filter by process definition key
  processInstanceId?: string; // Filter by process instance id
  executionId?: string; // Filter by execution id
  caseDefinitionId?: string; // Filter by case definition id
  caseInstanceId?: string; // Filter by case instance id
  caseExecutionId?: string; // Filter by case execution id
  taskId?: string; // Only include operations on this task
  externalTaskId?: string; // Only include operations on this external task
  batchId?: string; // Only include operations on this batch
  jobId?: string; // Filter by job id
  jobDefinitionId?: string; // Filter by job definition id
  userId?: string; // Only include operations of this user
  operationId?: string; // Filter by the id of the operation
  operationType?: string; // Filter by the type of the operation (e.g., Claim, Delegate)
  entityType?: string; // Filter by the type of entity affected by this operation (e.g., Task, Attachment, IdentityLink)
  entityTypeIn?: string; // Filter by a comma-separated list of entity types
  category?: string; // Filter by the category of the operation (e.g., TaskWorker, Admin, Operator)
  categoryIn?: string; // Filter by a comma-separated list of categories
  property?: string; // Only include operations that changed this property (e.g., owner, assignee)
  afterTimestamp?: string; // Restrict to entries created after this timestamp (format: yyyy-MM-dd'T'HH:mm:ss.SSSZ)
  beforeTimestamp?: string; // Restrict to entries created before this timestamp (format: yyyy-MM-dd'T'HH:mm:ss.SSSZ)
  sortBy?: "timestamp"; // Sort results lexicographically by a given criterion
  sortOrder?: "asc" | "desc"; // Sort order, either ascending or descending
  firstResult?: number; // Pagination: index of the first result to return
  maxResults?: number; // Pagination: maximum number of results to return
}

export interface HistoricUserOperationLogCountDto {
  count: number;
}

export interface FormKeyDto {
  key: string;
  contextPath?: string;
  camundaFormRef?: string;
}

export interface RenderedFormDto {
  renderedForm: string;
}

export interface FormVariablesDto {
  [key: string]: {
    type: string;
    value?: any;
    valueInfo?: any;
  };
}

export interface SubmitFormPayload {
  variables: Record<string, { value: any; type: string }>;
}

export interface ResolveTaskPayload {
  variables: Record<string, { value: any; type: string }>;
}

export interface DeployedFormDto {
  form: string;
}

export interface FilterDto {
  id: string;
  resourceType: string;
  name: string;
  owner?: string;
  query: Record<string, any>;
  properties: Record<string, any>;
}

export interface CreateFilterDto {
  resourceType: string;
  name: string;
  owner?: string;
  query: Record<string, any>;
  properties?: Record<string, any>;
}

export interface UpdateFilterDto {
  resourceType?: string;
  name?: string;
  owner?: string;
  query?: Record<string, any>;
  properties?: Record<string, any>;
}

export interface ExecuteFilterDto<T> {
  items: T[];
}

export interface ExecuteFilterCountDto {
  count: number;
}

export interface ExtendedFilterInfoDto {
  id: string;
  name: string;
  resourceType: string;
  properties: Record<string, any>;
  extendedInfo?: any;
}

export interface SortingOptionDto {
  field: string;
  order: 'asc' | 'desc';
}

export interface GroupDto {
  id: string;
  name: string;
  type: string;
}

export interface GroupQueryDto {
  sortBy?: 'id' | 'name' | 'type'; // Sort by a specific field
  sortOrder?: 'asc' | 'desc'; // Sorting order
  firstResult?: number; // Pagination: index of the first result to return
  maxResults?: number; // Pagination: maximum number of results to return
  id?: string; // Filter by the ID of the group
  idIn?: string; // Filter by a comma-separated list of group IDs
  name?: string; // Filter by the name of the group
  nameLike?: string; // Filter by names that contain the parameter value as a substring
  type?: string; // Filter by the type of the group
  member?: string; // Retrieve groups where the given user ID is a member
  memberOfTenant?: string; // Retrieve groups that are members of the given tenant
}

export interface GroupMemberDto {
  userId: string;
}

export interface GroupOptionsDto {
  links: Array<{ href: string; rel: string; method: string }>;
}
