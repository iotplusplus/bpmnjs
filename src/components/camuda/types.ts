export interface ProcessEngine {
    name: string;
}

export interface TaskFilter {
    id: string;
    resourceType: string;
    name: string;
    owner: string;
    query: object;
    properties: object;
}

export interface Task {
    id: string;
    name: string;
    assignee: string;
    created: string;
    due?: string;
    followUp?: string;
    delegationState?: string;
    description?: string;
    executionId: string;
    owner?: string;
    parentTaskId?: string;
    priority: number;
    processDefinitionId: string;
    processInstanceId: string;
    caseDefinitionId?: string;
    caseInstanceId?: string;
    caseExecutionId?: string;
    taskDefinitionKey: string;
    suspended: boolean;
    formKey?: string;
    tenantId?: string;
    lastUpdated?: string;
    camundaFormRef?: any;
    taskState: string;
}

export interface TaskDetails extends Task {
    variables: Record<string, VariableValue>;
}

export interface ProcessDefinitionDiagram {
    id: string;
    bpmn20Xml: string;
}

export interface UserOperationLogEntry {
    id: string;
    operationId: string;
    operationType: string;
    entityType: string;
    property: string;
    orgValue?: string;
    newValue?: string;
    timestamp: string;
    userId: string;
    taskId?: string;
    processInstanceId?: string;
    processDefinitionId?: string;
    caseInstanceId?: string;
    caseDefinitionId?: string;
    externalTaskId?: string;
    jobId?: string;
    jobDefinitionId?: string;
    batchId?: string;
    tenantId?: string;
    removalTime?: string;
    rootProcessInstanceId?: string;
}

export interface TaskForm {
    key: string;
    contextPath: string;
    camundaFormRef: string;
}

export interface DeployedTaskForm {
    id: string;
    formKey: string;
    deploymentId: string;
    resourceName: string;
}

export interface VariableValue {
    type: string;
    value: any;
    valueInfo?: object;
}

export interface TaskCommentPayload {
    "message": string;
    "userId": string;
    "timestamp": string;
}

export interface TaskComment {
    id: string;
    userId: string;
    time: string;
    taskId: string;
    processInstanceId?: string;
    message: string;
    removalTime?: string;
    rootProcessInstanceId?: string;
    links: any[];
}

export interface TaskAttachment {
    id: string;
    name: string;
    description?: string;
    type: string;
    taskId: string;
    processInstanceId?: string;
    url?: string;
    createTime: string;
    removalTime?: string;
    rootProcessInstanceId?: string;
    links?: any[];
}

export interface TaskIdentityLinkPayload {
    type: string;
    userId?: string;
    groupId?: string;
}
export interface TaskIdentityLink {
    type: string;
    userId?: string;
    groupId?: string;
    taskId: string;
    processDefinitionId?: string;
    tenantId?: string;

}

export interface TaskHistory {
    id: string;
    deploymentId: string;
    processDefinitionId: string;
    processDefinitionKey: string;
    processInstanceId: string;
    executionId: string;
    caseDefinitionId: string | null;
    caseInstanceId: string | null;
    caseExecutionId: string | null;
    taskId: string;
    jobId: string | null;
    jobDefinitionId: string | null;
    batchId: string | null;
    userId: string;
    timestamp: string; // ISO 8601 format
    operationId: string;
    externalTaskId: string | null;
    operationType: string;
    entityType: string;
    property: string;
    orgValue: string | null;
    newValue: string | null;
    removalTime: string | null;
    rootProcessInstanceId: string;
    category: string;
    annotation: string | null;
}