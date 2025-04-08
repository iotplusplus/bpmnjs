import { AuthorizationDto, AuthorizationCheckResultDto, ExternalTaskDto, ExternalTaskCompleteDto, ExternalTaskFailureDto, HistoricExternalTaskLogDto, HistoricTaskInstanceDto, TaskDto, TaskAttachmentDto, TaskCommentDto, TaskIdentityLinkDto, TaskLocalVariableDto, TaskVariableDto, VariableValueDto, TaskCreateDto, TaskUpdateDto, BulkDeleteDto, CreateTaskAttachmentPayload, StartProcessInstanceDto, StartProcessInstanceResponseDto, ProcessDefinitionDto, ProcessDefinitionXmlDto, HistoricUserOperationLogQueryDto, HistoricUserOperationLogDto, HistoricUserOperationLogCountDto, FormKeyDto, RenderedFormDto, DeployedFormDto, FormVariablesDto, SubmitFormPayload, ResolveTaskPayload, FilterDto, CreateFilterDto, UpdateFilterDto, ExecuteFilterDto, ExecuteFilterCountDto, SortingOptionDto, ExtendedFilterInfoDto, CreateTaskCommentDto, GroupOptionsDto, GroupMemberDto, GroupDto, GroupQueryDto, TaskQueryDto, TenantDto, DeploymentDto } from './types';
interface ServerConfig {
    baseUrl: string;
    contextPath?: string;
    accessToken?: string;
    organizationId?: string;
}
export declare const CamundaAPI: ({ serverConfig }: {
    serverConfig: ServerConfig;
}) => {
    getAllAuthorizations: () => Promise<AuthorizationDto[]>;
    checkAuthorization: (params: {
        permissionName: string;
        resourceName: string;
        resourceType: number;
        resourceId?: string;
    }) => Promise<AuthorizationCheckResultDto>;
    getAuthorizationCount: () => Promise<number>;
    createAuthorization: (data: AuthorizationDto) => Promise<AuthorizationDto>;
    getAuthorizationById: (id: string) => Promise<AuthorizationDto>;
    deleteAuthorization: (id: string) => Promise<void>;
    updateAuthorization: (id: string, data: AuthorizationDto) => Promise<void>;
    getAuthorizationAvailableOperations: (id: string) => Promise<any>;
    listExternalTasks: () => Promise<ExternalTaskDto[]>;
    getExternalTaskCount: () => Promise<number>;
    fetchAndLockExternalTasks: (data: {
        workerId: string;
        maxTasks: number;
        usePriority?: boolean;
        topics: Array<{
            topicName: string;
            lockDuration: number;
        }>;
    }) => Promise<ExternalTaskDto[]>;
    completeExternalTask: (id: string, data: ExternalTaskCompleteDto) => Promise<void>;
    failExternalTask: (id: string, data: ExternalTaskFailureDto) => Promise<void>;
    reportBpmnErrorForExternalTask: (id: string, data: {
        errorCode: string;
    }) => Promise<void>;
    deleteExternalTask: (id: string) => Promise<void>;
    unlockExternalTask: (id: string) => Promise<void>;
    extendLockOnExternalTask: (id: string, data: {
        newDuration: number;
    }) => Promise<void>;
    retryExternalTask: (id: string) => Promise<void>;
    listHistoricExternalTaskLogs: () => Promise<HistoricExternalTaskLogDto[]>;
    getHistoricExternalTaskLogCount: () => Promise<number>;
    getHistoricExternalTaskLogById: (id: string) => Promise<HistoricExternalTaskLogDto>;
    deleteHistoricExternalTaskLog: (id: string) => Promise<void>;
    clearHistoricExternalTaskLogs: () => Promise<void>;
    listHistoricTaskInstances: () => Promise<HistoricTaskInstanceDto[]>;
    getHistoricTaskInstanceCount: () => Promise<number>;
    getHistoricTaskInstanceById: (id: string) => Promise<HistoricTaskInstanceDto>;
    deleteHistoricTaskInstance: (id: string) => Promise<void>;
    bulkDeleteHistoricTaskInstances: (data: BulkDeleteDto) => Promise<void>;
    listTasks: (query?: TaskQueryDto) => Promise<TaskDto[]>;
    getTaskCount: () => Promise<number>;
    createTask: (data: TaskCreateDto) => Promise<TaskDto>;
    getTaskById: (id: string) => Promise<TaskDto>;
    updateTask: (id: string, data: TaskUpdateDto) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    assignTask: (id: string, data: {
        userId: string;
    }) => Promise<void>;
    claimTask: (id: string, data: {
        userId: string;
    }) => Promise<void>;
    unclaimTask: (id: string) => Promise<void>;
    delegateTask: (id: string, data: {
        userId: string;
    }) => Promise<void>;
    completeTask: (id: string, data: {
        variables?: Record<string, VariableValueDto>;
    }) => Promise<void>;
    setTaskDueDate: (id: string, data: {
        dueDate: string;
    }) => Promise<void>;
    listTaskAttachments: (taskId: string) => Promise<TaskAttachmentDto[]>;
    createTaskAttachment: (taskId: string, data: CreateTaskAttachmentPayload) => Promise<TaskAttachmentDto>;
    getTaskAttachmentById: (taskId: string, attachmentId: string) => Promise<TaskAttachmentDto>;
    deleteTaskAttachment: (taskId: string, attachmentId: string) => Promise<void>;
    getTaskAttachmentContent: (taskId: string, attachmentId: string) => Promise<Blob>;
    listTaskComments: (taskId: string) => Promise<TaskCommentDto[]>;
    createTaskComment: (taskId: string, data: CreateTaskCommentDto) => Promise<TaskCommentDto>;
    getTaskCommentById: (taskId: string, commentId: string) => Promise<TaskCommentDto>;
    listTaskIdentityLinks: (taskId: string, query: {
        type?: string;
    }) => Promise<TaskIdentityLinkDto[]>;
    createTaskIdentityLink: (taskId: string, data: Partial<TaskIdentityLinkDto>) => Promise<TaskIdentityLinkDto>;
    deleteTaskIdentityLink: (taskId: string, data: Partial<TaskIdentityLinkDto>) => Promise<void>;
    listTaskLocalVariables: (taskId: string) => Promise<TaskLocalVariableDto[]>;
    getTaskLocalVariableByKey: (taskId: string, key: string) => Promise<TaskLocalVariableDto>;
    createTaskLocalVariable: (taskId: string, key: string, data: VariableValueDto) => Promise<TaskLocalVariableDto>;
    updateTaskLocalVariable: (taskId: string, key: string, data: VariableValueDto) => Promise<void>;
    deleteTaskLocalVariable: (taskId: string, key: string) => Promise<void>;
    modifyTaskLocalVariables: (taskId: string, data: Record<string, VariableValueDto>) => Promise<void>;
    listTaskVariables: (taskId: string) => Promise<TaskVariableDto[]>;
    getTaskVariableByKey: (taskId: string, key: string) => Promise<TaskVariableDto>;
    createTaskVariable: (taskId: string, key: string, data: VariableValueDto) => Promise<TaskVariableDto>;
    updateTaskVariable: (taskId: string, key: string, data: VariableValueDto) => Promise<void>;
    deleteTaskVariable: (taskId: string, key: string) => Promise<void>;
    modifyTaskVariables: (taskId: string, data: Record<string, VariableValueDto>) => Promise<void>;
    listProcessDefinitions: () => Promise<ProcessDefinitionDto[]>;
    listProcessDefinitionByTenantId: (tenantId: string) => Promise<ProcessDefinitionDto[]>;
    getProcessDefinitionById: (id: string) => Promise<ProcessDefinitionDto>;
    getProcessDefinitionByKey: (key: string) => Promise<ProcessDefinitionDto>;
    getProcessDefinitionByKeyAndTenantId: (key: string, tenantId: string) => Promise<ProcessDefinitionDto>;
    getProcessDefinitionXmlById: (id: string) => Promise<ProcessDefinitionXmlDto>;
    getProcessDefinitionXmlByKey: (key: string) => Promise<ProcessDefinitionXmlDto>;
    startProcessInstanceById: (id: string, data: StartProcessInstanceDto) => Promise<StartProcessInstanceResponseDto>;
    startProcessInstanceByKey: (key: string, data: StartProcessInstanceDto) => Promise<StartProcessInstanceResponseDto>;
    startProcessInstanceByKeyAndTenantId: (key: string, tenantId: string, data: StartProcessInstanceDto) => Promise<StartProcessInstanceResponseDto>;
    suspendProcessDefinitionById: (id: string, data: {
        suspended: boolean;
        includeProcessInstances?: boolean;
    }) => Promise<void>;
    activateProcessDefinitionById: (id: string, data: {
        suspended: boolean;
        includeProcessInstances?: boolean;
    }) => Promise<void>;
    deleteProcessDefinitionById: (id: string) => Promise<void>;
    listHistoricUserOperationLogs: (query?: HistoricUserOperationLogQueryDto) => Promise<HistoricUserOperationLogDto[]>;
    countHistoricUserOperationLogs: (query?: HistoricUserOperationLogQueryDto) => Promise<HistoricUserOperationLogCountDto>;
    getFormKey: (taskId: string) => Promise<FormKeyDto>;
    getRenderedForm: (taskId: string) => Promise<RenderedFormDto>;
    getDeployedForm: (taskId: string) => Promise<DeployedFormDto>;
    getFormVariables: (taskId: string, variableNames?: string[]) => Promise<FormVariablesDto>;
    submitForm: (taskId: string, payload: SubmitFormPayload) => Promise<void>;
    resolveTask: (taskId: string, payload: ResolveTaskPayload) => Promise<void>;
    listFilters: () => Promise<FilterDto[]>;
    createFilter: (data: CreateFilterDto) => Promise<FilterDto>;
    getFilterById: (id: string) => Promise<FilterDto>;
    updateFilterById: (id: string, data: UpdateFilterDto) => Promise<void>;
    deleteFilterById: (id: string) => Promise<void>;
    executeFilter: <T = any>(id: string, firstResult?: number, maxResults?: number) => Promise<any[]>;
    executeFilterCount: (id: string) => Promise<ExecuteFilterCountDto>;
    executeFilterSingleResult: <T = any>(id: string) => Promise<T>;
    getSortingOptions: () => Promise<SortingOptionDto[]>;
    getExtendedFilterInfo: (id: string) => Promise<ExtendedFilterInfoDto>;
    updateExtendedFilterInfo: (id: string, resourceId: string, data: Partial<ExtendedFilterInfoDto>) => Promise<void>;
    deleteExtendedFilterInfo: (id: string, resourceId: string) => Promise<void>;
    countExtendedFilterInfo: (id: string, resourceId: string) => Promise<ExecuteFilterCountDto>;
    listExtendedFilterInfo: <T = any>(id: string, resourceId: string) => Promise<ExecuteFilterDto<T>>;
    listGroups: (params?: GroupQueryDto) => Promise<GroupDto[]>;
    listGroupsPost: (data: GroupQueryDto) => Promise<GroupDto[]>;
    getGroupCount: (params?: GroupQueryDto) => Promise<number>;
    getGroupCountPost: (data: GroupQueryDto) => Promise<number>;
    createGroup: (data: GroupDto) => Promise<GroupDto>;
    getGroupById: (id: string) => Promise<GroupDto>;
    updateGroup: (id: string, data: GroupDto) => Promise<void>;
    deleteGroup: (id: string) => Promise<void>;
    getGroupMembers: (id: string) => Promise<GroupMemberDto[]>;
    addGroupMember: (id: string, userId: string) => Promise<void>;
    deleteGroupMember: (id: string, userId: string) => Promise<void>;
    getGroupOptions: () => Promise<GroupOptionsDto>;
    getGroupMembersOptions: (id: string) => Promise<GroupOptionsDto>;
    listTenants: () => Promise<TenantDto[]>;
    createTenant: (data: TenantDto) => Promise<TenantDto>;
    deployProcessToTenant: (requestBody: Record<string, any>) => Promise<DeploymentDto>;
};
export {};
