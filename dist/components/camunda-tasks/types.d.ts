export interface AuthorizationDto {
    id: string;
    type: number;
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
    lockedUntil: string;
    businessKey?: string;
    tenantId?: string;
    created: string;
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
    created: string;
    due?: string;
    followUp?: string;
    endTime?: string;
    duration?: number;
    priority: number;
    parentTaskId?: string;
    caseDefinitionId?: string;
    caseInstanceId?: string;
}
export interface TaskQueryDto {
    taskId?: string;
    taskIdIn?: string;
    processInstanceId?: string;
    processInstanceIdIn?: string;
    processInstanceBusinessKey?: string;
    processInstanceBusinessKeyIn?: string;
    processInstanceBusinessKeyLike?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionKeyIn?: string;
    executionId?: string;
    caseInstanceId?: string;
    caseInstanceBusinessKey?: string;
    caseInstanceBusinessKeyLike?: string;
    caseDefinitionId?: string;
    caseDefinitionKey?: string;
    caseExecutionId?: string;
    activityInstanceIdIn?: string;
    tenantIdIn?: string;
    withoutTenantId?: boolean;
    assignee?: string;
    assigneeLike?: string;
    assigneeIn?: string;
    assigneeNotIn?: string;
    owner?: string;
    candidateGroup?: string;
    candidateUser?: string;
    includeAssignedTasks?: boolean;
    involvedUser?: string;
    taskDefinitionKey?: string;
    taskDefinitionKeyIn?: string;
    name?: string;
    nameLike?: string;
    description?: string;
    descriptionLike?: string;
    priority?: number;
    maxPriority?: number;
    minPriority?: number;
    dueDate?: string;
    dueAfter?: string;
    dueBefore?: string;
    followUpDate?: string;
    followUpAfter?: string;
    followUpBefore?: string;
    createdOn?: string;
    createdAfter?: string;
    createdBefore?: string;
    updatedAfter?: string;
    delegationState?: "PENDING" | "RESOLVED";
    candidateGroups?: string;
    withCandidateGroups?: boolean;
    withoutCandidateGroups?: boolean;
    active?: boolean;
    suspended?: boolean;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    firstResult?: number;
    maxResults?: number;
}
export interface TaskDto {
    id: string;
    name: string;
    assignee?: string;
    created: string;
    due?: string;
    followUp?: string;
    delegationState?: string;
    priority: number;
    tenantId?: string;
    lastUpdated: string;
    description: null;
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
    "content"?: string;
}
export interface TaskAttachmentDto {
    id: string;
    name: string;
    description?: string;
    type: string;
    url: string;
    createTime: string;
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
    createTime: string;
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
    dueDate: string;
}
export interface TaskCreateDto {
    name: string;
    assignee?: string;
    dueDate?: string;
    followUpDate?: string;
    priority?: number;
    tenantId?: string;
}
export interface TaskUpdateDto {
    name: string;
    assignee?: string;
    due?: string;
    followUp?: string;
    delegationState?: string;
    priority: number;
    tenantId?: string;
    description: null;
    owner?: string;
    parentTaskId?: string;
    caseInstanceId?: string;
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
    timestamp: string;
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
    removalTime?: string;
}
export interface HistoricUserOperationLogQueryDto {
    deploymentId?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processInstanceId?: string;
    executionId?: string;
    caseDefinitionId?: string;
    caseInstanceId?: string;
    caseExecutionId?: string;
    taskId?: string;
    externalTaskId?: string;
    batchId?: string;
    jobId?: string;
    jobDefinitionId?: string;
    userId?: string;
    operationId?: string;
    operationType?: string;
    entityType?: string;
    entityTypeIn?: string;
    category?: string;
    categoryIn?: string;
    property?: string;
    afterTimestamp?: string;
    beforeTimestamp?: string;
    sortBy?: "timestamp";
    sortOrder?: "asc" | "desc";
    firstResult?: number;
    maxResults?: number;
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
    variables: Record<string, {
        value: any;
        type: string;
    }>;
}
export interface ResolveTaskPayload {
    variables: Record<string, {
        value: any;
        type: string;
    }>;
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
    sortBy?: 'id' | 'name' | 'type';
    sortOrder?: 'asc' | 'desc';
    firstResult?: number;
    maxResults?: number;
    id?: string;
    idIn?: string;
    name?: string;
    nameLike?: string;
    type?: string;
    member?: string;
    memberOfTenant?: string;
}
export interface GroupMemberDto {
    userId: string;
}
export interface GroupOptionsDto {
    links: Array<{
        href: string;
        rel: string;
        method: string;
    }>;
}
export interface TenantDto {
    id: string;
    name: string;
}
export interface DeploymentDto {
    id?: string;
    tenantId?: string;
    deploymentTime?: string;
    source?: string;
    name?: string;
    links?: [
        {
            rel?: string;
            href?: string;
            method?: string;
        }
    ];
}
