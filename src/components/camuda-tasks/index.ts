import { useEffect } from 'react';
import ApiService from './api';
import { API_ENDPOINTS } from './constants';
import {
  AuthorizationDto,
  AuthorizationCheckResultDto,
  ExternalTaskDto,
  ExternalTaskCompleteDto,
  ExternalTaskFailureDto,
  HistoricExternalTaskLogDto,
  HistoricTaskInstanceDto,
  TaskDto,
  TaskAttachmentDto,
  TaskCommentDto,
  TaskIdentityLinkDto,
  TaskLocalVariableDto,
  TaskVariableDto,
  VariableValueDto,
  TaskCreateDto,
  TaskUpdateDto,
  BulkDeleteDto,
  CreateTaskAttachmentPayload,
} from './types';
import { addTaskAttachment } from './attachment';

interface ServerConfig {
    baseUrl: string;
    contextPath?: string;
}

const computeBaseUrl = ({ baseUrl, contextPath = 'engine-rest' }: ServerConfig) => {
    return `${baseUrl}/${contextPath}`;
};

export const CamundaAPI = ({ serverConfig }: { serverConfig: ServerConfig }) => {
    const baseUrl = computeBaseUrl(serverConfig);
  const apiService = new ApiService(baseUrl);

  return {
    // Authorization APIs
    getAllAuthorizations: async (): Promise<AuthorizationDto[]> =>
      (await apiService.get<AuthorizationDto[]>(API_ENDPOINTS.AUTHORIZATION.GET_ALL)).data,

    checkAuthorization: async (params: {
      permissionName: string;
      resourceName: string;
      resourceType: number;
      resourceId?: string;
    }): Promise<AuthorizationCheckResultDto> =>
      (await apiService.get<AuthorizationCheckResultDto>(API_ENDPOINTS.AUTHORIZATION.CHECK, { params })).data,

    getAuthorizationCount: async (): Promise<number> =>
      (await apiService.get<{ count: number }>(API_ENDPOINTS.AUTHORIZATION.COUNT)).data.count,

    createAuthorization: async (data: AuthorizationDto): Promise<AuthorizationDto> =>
      (await apiService.post<AuthorizationDto, AuthorizationDto>(API_ENDPOINTS.AUTHORIZATION.CREATE, data)).data,

    getAuthorizationById: async (id: string): Promise<AuthorizationDto> => {
      const url = API_ENDPOINTS.AUTHORIZATION.GET_BY_ID.replace('{id}', id);
      return (await apiService.get<AuthorizationDto>(url)).data;
    },

    deleteAuthorization: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.AUTHORIZATION.DELETE.replace('{id}', id);
      await apiService.delete<void>(url);
    },

    updateAuthorization: async (id: string, data: AuthorizationDto): Promise<void> => {
      const url = API_ENDPOINTS.AUTHORIZATION.UPDATE.replace('{id}', id);
      await apiService.put<AuthorizationDto, void>(url, data);
    },

    getAuthorizationAvailableOperations: async (id: string): Promise<any> => {
      const url = API_ENDPOINTS.AUTHORIZATION.AVAILABLE_OPERATIONS.replace('{id}', id);
      return (await apiService.get<any>(url)).data;
    },

    // External Task APIs
    listExternalTasks: async (): Promise<ExternalTaskDto[]> =>
      (await apiService.get<ExternalTaskDto[]>(API_ENDPOINTS.EXTERNAL_TASK.LIST)).data,

    getExternalTaskCount: async (): Promise<number> =>
      (await apiService.get<{ count: number }>(API_ENDPOINTS.EXTERNAL_TASK.COUNT)).data.count,

    fetchAndLockExternalTasks: async (data: {
      workerId: string;
      maxTasks: number;
      usePriority?: boolean;
      topics: Array<{ topicName: string; lockDuration: number }>;
    }): Promise<ExternalTaskDto[]> =>
      (await apiService.post<typeof data, ExternalTaskDto[]>(API_ENDPOINTS.EXTERNAL_TASK.FETCH_AND_LOCK, data)).data,

    completeExternalTask: async (id: string, data: ExternalTaskCompleteDto): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.COMPLETE.replace('{id}', id);
      await apiService.post<ExternalTaskCompleteDto, void>(url, data);
    },

    failExternalTask: async (id: string, data: ExternalTaskFailureDto): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.FAILURE.replace('{id}', id);
      await apiService.post<ExternalTaskFailureDto, void>(url, data);
    },

    reportBpmnErrorForExternalTask: async (id: string, data: { errorCode: string }): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.BPMN_ERROR.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    deleteExternalTask: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.DELETE.replace('{id}', id);
      await apiService.delete<void>(url);
    },

    unlockExternalTask: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.UNLOCK.replace('{id}', id);
      await apiService.post(url, {});
    },

    extendLockOnExternalTask: async (id: string, data: { newDuration: number }): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.EXTEND_LOCK.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    retryExternalTask: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.EXTERNAL_TASK.RETRY.replace('{id}', id);
      await apiService.post(url, {});
    },

    // Historic External Task Log APIs
    listHistoricExternalTaskLogs: async (): Promise<HistoricExternalTaskLogDto[]> =>
      (await apiService.get<HistoricExternalTaskLogDto[]>(API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.LIST)).data,

    getHistoricExternalTaskLogCount: async (): Promise<number> =>
      (await apiService.get<{ count: number }>(API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.COUNT)).data.count,

    getHistoricExternalTaskLogById: async (id: string): Promise<HistoricExternalTaskLogDto> => {
      const url = API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.GET_BY_ID.replace('{id}', id);
      return (await apiService.get<HistoricExternalTaskLogDto>(url)).data;
    },

    deleteHistoricExternalTaskLog: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.DELETE.replace('{id}', id);
      await apiService.delete<void>(url);
    },

    clearHistoricExternalTaskLogs: async (): Promise<void> => {
      await apiService.post(API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.CLEAR, {});
    },

    // Historic Task Instance APIs
    listHistoricTaskInstances: async (): Promise<HistoricTaskInstanceDto[]> =>
      (await apiService.get<HistoricTaskInstanceDto[]>(API_ENDPOINTS.HISTORIC_TASK_INSTANCE.LIST)).data,

    getHistoricTaskInstanceCount: async (): Promise<number> =>
      (await apiService.get<{ count: number }>(API_ENDPOINTS.HISTORIC_TASK_INSTANCE.COUNT)).data.count,

    getHistoricTaskInstanceById: async (id: string): Promise<HistoricTaskInstanceDto> => {
      const url = API_ENDPOINTS.HISTORIC_TASK_INSTANCE.GET_BY_ID.replace('{id}', id);
      return (await apiService.get<HistoricTaskInstanceDto>(url)).data;
    },

    deleteHistoricTaskInstance: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.HISTORIC_TASK_INSTANCE.DELETE.replace('{id}', id);
      await apiService.delete<void>(url);
    },

    bulkDeleteHistoricTaskInstances: async (data: BulkDeleteDto): Promise<void> => {
      await apiService.post<BulkDeleteDto, void>(API_ENDPOINTS.HISTORIC_TASK_INSTANCE.BULK_DELETE, data);
    },

    // Task APIs
    listTasks: async (): Promise<TaskDto[]> =>
      (await apiService.get<TaskDto[]>(API_ENDPOINTS.TASK.LIST)).data,

    getTaskCount: async (): Promise<number> =>
      (await apiService.get<{ count: number }>(API_ENDPOINTS.TASK.COUNT)).data.count,

    createTask: async (data: TaskCreateDto): Promise<TaskDto> =>
      (await apiService.post<TaskCreateDto, TaskDto>(API_ENDPOINTS.TASK.CREATE, data)).data,

    getTaskById: async (id: string): Promise<TaskDto> => {
      const url = API_ENDPOINTS.TASK.GET_BY_ID.replace('{id}', id);
      return (await apiService.get<TaskDto>(url)).data;
    },

    updateTask: async (id: string, data: TaskUpdateDto): Promise<void> => {
      const url = API_ENDPOINTS.TASK.UPDATE.replace('{id}', id);
      await apiService.put<TaskUpdateDto, void>(url, data);
    },

    deleteTask: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK.DELETE.replace('{id}', id);
      await apiService.delete<void>(url);
    },

    assignTask: async (id: string, data: { userId: string }): Promise<void> => {
      const url = API_ENDPOINTS.TASK.ASSIGN.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    claimTask: async (id: string, data: { userId: string }): Promise<void> => {
      const url = API_ENDPOINTS.TASK.CLAIM.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    unclaimTask: async (id: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK.UNCLAIM.replace('{id}', id);
      await apiService.post(url, {});
    },

    delegateTask: async (id: string, data: { userId: string }): Promise<void> => {
      const url = API_ENDPOINTS.TASK.DELEGATE.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    completeTask: async (id: string, data: { variables?: Record<string, VariableValueDto> }): Promise<void> => {
      const url = API_ENDPOINTS.TASK.COMPLETE.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    setTaskDueDate: async (id: string, data: { dueDate: string }): Promise<void> => {
      const url = API_ENDPOINTS.TASK.SET_DUEDATE.replace('{id}', id);
      await apiService.post<typeof data, void>(url, data);
    },

    // Task Attachment APIs
    listTaskAttachments: async (taskId: string): Promise<TaskAttachmentDto[]> => {
      const url = API_ENDPOINTS.TASK_ATTACHMENT.LIST.replace('{id}', taskId);
      return (await apiService.get<TaskAttachmentDto[]>(url)).data;
    },

    createTaskAttachment: async (
      taskId: string,
      data: CreateTaskAttachmentPayload
    ): Promise<TaskAttachmentDto> => {
      const url = API_ENDPOINTS.TASK_ATTACHMENT.CREATE.replace('{id}', taskId);
      return (await addTaskAttachment({url: `${baseUrl}${url}`, payload: data})).data;
    },

    getTaskAttachmentById: async (taskId: string, attachmentId: string): Promise<TaskAttachmentDto> => {
      const url = API_ENDPOINTS.TASK_ATTACHMENT.GET_BY_ID.replace('{id}', taskId).replace(
        '{attachmentId}',
        attachmentId
      );
      return (await apiService.get<TaskAttachmentDto>(url)).data;
    },

    deleteTaskAttachment: async (taskId: string, attachmentId: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK_ATTACHMENT.DELETE.replace('{id}', taskId).replace(
        '{attachmentId}',
        attachmentId
      );
      await apiService.delete<void>(url);
    },

    getTaskAttachmentContent: async (taskId: string, attachmentId: string): Promise<Blob> => {
      const url = API_ENDPOINTS.TASK_ATTACHMENT.GET_CONTENT.replace('{id}', taskId).replace(
        '{attachmentId}',
        attachmentId
      );
      return (await apiService.get<Blob>(url, { responseType: 'blob' })).data;
    },

    // Task Comment APIs
    listTaskComments: async (taskId: string): Promise<TaskCommentDto[]> => {
      const url = API_ENDPOINTS.TASK_COMMENT.LIST.replace('{id}', taskId);
      return (await apiService.get<TaskCommentDto[]>(url)).data;
    },

    createTaskComment: async (taskId: string, data: Partial<TaskCommentDto>): Promise<TaskCommentDto> => {
      const url = API_ENDPOINTS.TASK_COMMENT.CREATE.replace('{id}', taskId);
      return (await apiService.post<Partial<TaskCommentDto>, TaskCommentDto>(url, data)).data;
    },

    getTaskCommentById: async (taskId: string, commentId: string): Promise<TaskCommentDto> => {
      const url = API_ENDPOINTS.TASK_COMMENT.GET_BY_ID.replace('{id}', taskId).replace(
        '{commentId}',
        commentId
      );
      return (await apiService.get<TaskCommentDto>(url)).data;
    },

    // Task Identity Link APIs
    listTaskIdentityLinks: async (taskId: string): Promise<TaskIdentityLinkDto[]> => {
      const url = API_ENDPOINTS.TASK_IDENTITY_LINK.LIST.replace('{id}', taskId);
      return (await apiService.get<TaskIdentityLinkDto[]>(url)).data;
    },

    createTaskIdentityLink: async (
      taskId: string,
      data: Partial<TaskIdentityLinkDto>
    ): Promise<TaskIdentityLinkDto> => {
      const url = API_ENDPOINTS.TASK_IDENTITY_LINK.CREATE.replace('{id}', taskId);
      return (await apiService.post<Partial<TaskIdentityLinkDto>, TaskIdentityLinkDto>(url, data)).data;
    },

    deleteTaskIdentityLink: async (taskId: string, identityLinkId: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK_IDENTITY_LINK.DELETE.replace('{id}', taskId).replace(
        '{identityLinkId}',
        identityLinkId
      );
      await apiService.delete<void>(url);
    },

    listTaskIdentityLinkUsers: async (taskId: string): Promise<TaskIdentityLinkDto[]> => {
      const url = API_ENDPOINTS.TASK_IDENTITY_LINK.LIST_USERS.replace('{id}', taskId);
      return (await apiService.get<TaskIdentityLinkDto[]>(url)).data;
    },

    listTaskIdentityLinkGroups: async (taskId: string): Promise<TaskIdentityLinkDto[]> => {
      const url = API_ENDPOINTS.TASK_IDENTITY_LINK.LIST_GROUPS.replace('{id}', taskId);
      return (await apiService.get<TaskIdentityLinkDto[]>(url)).data;
    },

    // Task Local Variable APIs
    listTaskLocalVariables: async (taskId: string): Promise<TaskLocalVariableDto[]> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.LIST.replace('{id}', taskId);
      return (await apiService.get<TaskLocalVariableDto[]>(url)).data;
    },

    getTaskLocalVariableByKey: async (taskId: string, key: string): Promise<TaskLocalVariableDto> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.GET_BY_KEY.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      return (await apiService.get<TaskLocalVariableDto>(url)).data;
    },

    createTaskLocalVariable: async (
      taskId: string,
      key: string,
      data: VariableValueDto
    ): Promise<TaskLocalVariableDto> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.CREATE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      return (await apiService.post<VariableValueDto, TaskLocalVariableDto>(url, data)).data;
    },

    updateTaskLocalVariable: async (
      taskId: string,
      key: string,
      data: VariableValueDto
    ): Promise<void> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.UPDATE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      await apiService.put<VariableValueDto, void>(url, data);
    },

    deleteTaskLocalVariable: async (taskId: string, key: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.DELETE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      await apiService.delete<void>(url);
    },

    modifyTaskLocalVariables: async (taskId: string, data: Record<string, VariableValueDto>): Promise<void> => {
      const url = API_ENDPOINTS.TASK_LOCAL_VARIABLE.MODIFY.replace('{id}', taskId);
      await apiService.post<Record<string, VariableValueDto>, void>(url, data);
    },

    // Task Variable APIs
    listTaskVariables: async (taskId: string): Promise<TaskVariableDto[]> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.LIST.replace('{id}', taskId);
      return (await apiService.get<TaskVariableDto[]>(url)).data;
    },

    getTaskVariableByKey: async (taskId: string, key: string): Promise<TaskVariableDto> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.GET_BY_KEY.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      return (await apiService.get<TaskVariableDto>(url)).data;
    },

    createTaskVariable: async (
      taskId: string,
      key: string,
      data: VariableValueDto
    ): Promise<TaskVariableDto> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.CREATE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      return (await apiService.post<VariableValueDto, TaskVariableDto>(url, data)).data;
    },

    updateTaskVariable: async (
      taskId: string,
      key: string,
      data: VariableValueDto
    ): Promise<void> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.UPDATE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      await apiService.put<VariableValueDto, void>(url, data);
    },

    deleteTaskVariable: async (taskId: string, key: string): Promise<void> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.DELETE.replace('{id}', taskId).replace(
        '{key}',
        key
      );
      await apiService.delete<void>(url);
    },

    modifyTaskVariables: async (taskId: string, data: Record<string, VariableValueDto>): Promise<void> => {
      const url = API_ENDPOINTS.TASK_VARIABLE.MODIFY.replace('{id}', taskId);
      await apiService.post<Record<string, VariableValueDto>, void>(url, data);
    },
  };
};

// const callApi = async() => {
//     const baseUrl = "http://camundaloadbalancer-1512832890.us-east-1.elb.amazonaws.com";
//     const camudaApi = await CamundaAPI({
//         serverConfig: {
//             baseUrl,
//             contextPath: "engine-rest",
//         }
//     });
//     const res = await camudaApi.createTaskAttachment('0441958d-a8d2-11ef-aebb-1287199eca6d', {
//         'attachment-name': '',
//         'attachment-description': '',
//         'attachment-type': '',
//         url: ''
//     });
//     console.log({res});
    
// }

// callApi();