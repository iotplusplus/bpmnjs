"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamundaAPI = void 0;
const api_1 = __importDefault(require("./api"));
const constants_1 = require("./constants");
const attachment_1 = require("./attachment");
const computeBaseUrl = ({ baseUrl, contextPath = 'engine-rest' }) => {
    return `${baseUrl}/${contextPath}`;
};
const CamundaAPI = ({ serverConfig }) => {
    var _a, _b;
    const baseUrl = computeBaseUrl(serverConfig);
    const apiService = new api_1.default(baseUrl, (_a = serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.organizationId) !== null && _a !== void 0 ? _a : "", (_b = serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.accessToken) !== null && _b !== void 0 ? _b : "");
    return {
        // Authorization APIs
        getAllAuthorizations: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.AUTHORIZATION.GET_ALL)).data; }),
        checkAuthorization: (params) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.AUTHORIZATION.CHECK, { params })).data; }),
        getAuthorizationCount: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.AUTHORIZATION.COUNT)).data.count; }),
        createAuthorization: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.AUTHORIZATION.CREATE, data)).data; }),
        getAuthorizationById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.AUTHORIZATION.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        deleteAuthorization: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.AUTHORIZATION.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        updateAuthorization: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.AUTHORIZATION.UPDATE.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        getAuthorizationAvailableOperations: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.AUTHORIZATION.AVAILABLE_OPERATIONS.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        // External Task APIs
        listExternalTasks: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.EXTERNAL_TASK.LIST)).data; }),
        getExternalTaskCount: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.EXTERNAL_TASK.COUNT)).data.count; }),
        fetchAndLockExternalTasks: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.EXTERNAL_TASK.FETCH_AND_LOCK, data)).data; }),
        completeExternalTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.COMPLETE.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        failExternalTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.FAILURE.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        reportBpmnErrorForExternalTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.BPMN_ERROR.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        deleteExternalTask: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        unlockExternalTask: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.UNLOCK.replace('{id}', id);
            yield apiService.post(url, {});
        }),
        extendLockOnExternalTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.EXTEND_LOCK.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        retryExternalTask: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.EXTERNAL_TASK.RETRY.replace('{id}', id);
            yield apiService.post(url, {});
        }),
        // Historic External Task Log APIs
        listHistoricExternalTaskLogs: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.LIST)).data; }),
        getHistoricExternalTaskLogCount: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.COUNT)).data.count; }),
        getHistoricExternalTaskLogById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        deleteHistoricExternalTaskLog: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        clearHistoricExternalTaskLogs: () => __awaiter(void 0, void 0, void 0, function* () {
            yield apiService.post(constants_1.API_ENDPOINTS.HISTORIC_EXTERNAL_TASK_LOG.CLEAR, {});
        }),
        // Historic Task Instance APIs
        listHistoricTaskInstances: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_TASK_INSTANCE.LIST)).data; }),
        getHistoricTaskInstanceCount: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_TASK_INSTANCE.COUNT)).data.count; }),
        getHistoricTaskInstanceById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.HISTORIC_TASK_INSTANCE.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        deleteHistoricTaskInstance: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.HISTORIC_TASK_INSTANCE.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        bulkDeleteHistoricTaskInstances: (data) => __awaiter(void 0, void 0, void 0, function* () {
            yield apiService.post(constants_1.API_ENDPOINTS.HISTORIC_TASK_INSTANCE.BULK_DELETE, data);
        }),
        // Task APIs
        listTasks: (query) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.get(constants_1.API_ENDPOINTS.TASK.LIST, { params: query })).data;
        }),
        getTaskCount: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.TASK.COUNT)).data.count; }),
        createTask: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.TASK.CREATE, data)).data; }),
        getTaskById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        updateTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.UPDATE.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        deleteTask: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        assignTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.ASSIGN.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        claimTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.CLAIM.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        unclaimTask: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.UNCLAIM.replace('{id}', id);
            yield apiService.post(url, {});
        }),
        delegateTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.DELEGATE.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        completeTask: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.COMPLETE.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        setTaskDueDate: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK.SET_DUEDATE.replace('{id}', id);
            yield apiService.post(url, data);
        }),
        // Task Attachment APIs
        listTaskAttachments: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_ATTACHMENT.LIST.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        createTaskAttachment: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_ATTACHMENT.CREATE.replace('{id}', taskId);
            return (yield (0, attachment_1.addTaskAttachment)({ url: `${baseUrl}${url}`, payload: data })).data;
        }),
        getTaskAttachmentById: (taskId, attachmentId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_ATTACHMENT.GET_BY_ID.replace('{id}', taskId).replace('{attachmentId}', attachmentId);
            return (yield apiService.get(url)).data;
        }),
        deleteTaskAttachment: (taskId, attachmentId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_ATTACHMENT.DELETE.replace('{id}', taskId).replace('{attachmentId}', attachmentId);
            yield apiService.delete(url);
        }),
        getTaskAttachmentContent: (taskId, attachmentId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_ATTACHMENT.GET_CONTENT.replace('{id}', taskId).replace('{attachmentId}', attachmentId);
            return (yield apiService.get(url, { responseType: 'blob' })).data;
        }),
        // Task Comment APIs
        listTaskComments: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_COMMENT.LIST.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        createTaskComment: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_COMMENT.CREATE.replace('{id}', taskId);
            return (yield apiService.post(url, data)).data;
        }),
        getTaskCommentById: (taskId, commentId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_COMMENT.GET_BY_ID.replace('{id}', taskId).replace('{commentId}', commentId);
            return (yield apiService.get(url)).data;
        }),
        // Task Identity Link APIs
        listTaskIdentityLinks: (taskId, query) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_IDENTITY_LINK.LIST.replace('{id}', taskId);
            return (yield apiService.get(url, { params: query })).data;
        }),
        createTaskIdentityLink: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_IDENTITY_LINK.CREATE.replace('{id}', taskId);
            return (yield apiService.post(url, data)).data;
        }),
        deleteTaskIdentityLink: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_IDENTITY_LINK.DELETE.replace('{id}', taskId);
            yield apiService.post(url, data);
        }),
        // Task Local Variable APIs
        listTaskLocalVariables: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.LIST.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        getTaskLocalVariableByKey: (taskId, key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.GET_BY_KEY.replace('{id}', taskId).replace('{key}', key);
            return (yield apiService.get(url)).data;
        }),
        createTaskLocalVariable: (taskId, key, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.CREATE.replace('{id}', taskId).replace('{key}', key);
            return (yield apiService.post(url, data)).data;
        }),
        updateTaskLocalVariable: (taskId, key, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.UPDATE.replace('{id}', taskId).replace('{key}', key);
            yield apiService.put(url, data);
        }),
        deleteTaskLocalVariable: (taskId, key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.DELETE.replace('{id}', taskId).replace('{key}', key);
            yield apiService.delete(url);
        }),
        modifyTaskLocalVariables: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_LOCAL_VARIABLE.MODIFY.replace('{id}', taskId);
            yield apiService.post(url, data);
        }),
        // Task Variable APIs
        listTaskVariables: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.LIST.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        getTaskVariableByKey: (taskId, key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.GET_BY_KEY.replace('{id}', taskId).replace('{key}', key);
            return (yield apiService.get(url)).data;
        }),
        createTaskVariable: (taskId, key, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.CREATE.replace('{id}', taskId).replace('{key}', key);
            return (yield apiService.post(url, data)).data;
        }),
        updateTaskVariable: (taskId, key, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.UPDATE.replace('{id}', taskId).replace('{key}', key);
            yield apiService.put(url, data);
        }),
        deleteTaskVariable: (taskId, key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.DELETE.replace('{id}', taskId).replace('{key}', key);
            yield apiService.delete(url);
        }),
        modifyTaskVariables: (taskId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_VARIABLE.MODIFY.replace('{id}', taskId);
            yield apiService.post(url, data);
        }),
        // Process Definition
        listProcessDefinitions: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.PROCESS_DEFINITION.LIST)).data; }),
        listProcessDefinitionByTenantId: (tenantId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.LIST_BY_TENANT.replace('{tenantId}', tenantId);
            return (yield apiService.get(url)).data;
        }),
        getProcessDefinitionById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        getProcessDefinitionByKey: (key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.GET_BY_KEY.replace('{key}', key);
            return (yield apiService.get(url)).data;
        }),
        getProcessDefinitionByKeyAndTenantId: (key, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.GET_BY_KEY_AND_TENANT.replace('{key}', key).replace('{tenantId}', tenantId);
            return (yield apiService.get(url)).data;
        }),
        getProcessDefinitionXmlById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.XML_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        getProcessDefinitionXmlByKey: (key) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.XML_BY_KEY.replace('{key}', key);
            return (yield apiService.get(url)).data;
        }),
        startProcessInstanceById: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.START_BY_ID.replace('{id}', id);
            return (yield apiService.post(url, data)).data;
        }),
        startProcessInstanceByKey: (key, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.START_BY_KEY.replace('{key}', key);
            return (yield apiService.post(url, data)).data;
        }),
        startProcessInstanceByKeyAndTenantId: (key, tenantId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.START_BY_KEY_AND_TENANT.replace('{key}', key).replace('{tenantId}', tenantId);
            return (yield apiService.post(url, data)).data;
        }),
        suspendProcessDefinitionById: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.SUSPEND_BY_ID.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        activateProcessDefinitionById: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.ACTIVATE_BY_ID.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        deleteProcessDefinitionById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.PROCESS_DEFINITION.DELETE_BY_ID.replace('{id}', id);
            yield apiService.delete(url);
        }),
        // List historic user operation logs with optional query parameters
        listHistoricUserOperationLogs: (query) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_USER_OPERATION_LOG.LIST, { params: query })).data;
        }),
        // Count historic user operation logs with optional query parameters
        countHistoricUserOperationLogs: (query) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.get(constants_1.API_ENDPOINTS.HISTORIC_USER_OPERATION_LOG.COUNT, { params: query })).data;
        }),
        // Get form key for a task
        getFormKey: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.GET_FORM_KEY.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        // Get rendered form for a task
        getRenderedForm: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.GET_RENDERED_FORM.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        // Get deployed form for a task
        getDeployedForm: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.GET_DEPLOYED_FORM.replace('{id}', taskId);
            return (yield apiService.get(url)).data;
        }),
        // Get form variables for a task
        getFormVariables: (taskId, variableNames) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.GET_FORM_VARIABLES.replace('{id}', taskId);
            const config = variableNames ? { params: { variableNames: variableNames.join(',') } } : undefined;
            return (yield apiService.get(url, config)).data;
        }),
        // Submit form for a task
        submitForm: (taskId, payload) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.SUBMIT_FORM.replace('{id}', taskId);
            yield apiService.post(url, payload);
        }),
        // Resolve task
        resolveTask: (taskId, payload) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.TASK_FORM.RESOLVE_TASK.replace('{id}', taskId);
            yield apiService.post(url, payload);
        }),
        // List all filters
        listFilters: () => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.get(constants_1.API_ENDPOINTS.FILTER.LIST)).data;
        }),
        // Create a new filter
        createFilter: (data) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.post(constants_1.API_ENDPOINTS.FILTER.CREATE, data)).data;
        }),
        // Get a filter by ID
        getFilterById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        // Update a filter by ID
        updateFilterById: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.UPDATE_BY_ID.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        // Delete a filter by ID
        deleteFilterById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.DELETE_BY_ID.replace('{id}', id);
            yield apiService.delete(url);
        }),
        // Execute a filter to fetch the filtered items
        executeFilter: (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, firstResult = 0, maxResults = 15) {
            const url = constants_1.API_ENDPOINTS.FILTER.EXECUTE.replace('{id}', id);
            return (yield apiService.get(url, {
                params: {
                    firstResult,
                    maxResults,
                }
            })).data;
        }),
        // Execute a filter to count the filtered items
        executeFilterCount: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.EXECUTE_COUNT.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        // Execute a filter to fetch a single result
        executeFilterSingleResult: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.EXECUTE_SINGLE.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        // Get sorting options for filters
        getSortingOptions: () => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.get(constants_1.API_ENDPOINTS.FILTER.SORTING_OPTIONS)).data;
        }),
        // Get extended filter information by ID
        getExtendedFilterInfo: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.GET_EXTENDED_INFO_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        // Update extended filter information
        updateExtendedFilterInfo: (id, resourceId, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.UPDATE_EXTENDED_INFO.replace('{id}', id).replace('{resourceId}', resourceId);
            yield apiService.put(url, data);
        }),
        // Delete extended filter information
        deleteExtendedFilterInfo: (id, resourceId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.DELETE_EXTENDED_INFO.replace('{id}', id).replace('{resourceId}', resourceId);
            yield apiService.delete(url);
        }),
        // Count extended filter information
        countExtendedFilterInfo: (id, resourceId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.EXTENDED_INFO_COUNT.replace('{id}', id).replace('{resourceId}', resourceId);
            return (yield apiService.get(url)).data;
        }),
        // List extended filter information
        listExtendedFilterInfo: (id, resourceId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.FILTER.EXTENDED_INFO_LIST.replace('{id}', id).replace('{resourceId}', resourceId);
            return (yield apiService.get(url)).data;
        }),
        listGroups: (params) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.GROUP.LIST, { params })).data; }),
        listGroupsPost: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.GROUP.LIST_POST, data)).data; }),
        getGroupCount: (params) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.GROUP.COUNT, { params })).data.count; }),
        getGroupCountPost: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.GROUP.COUNT_POST, data)).data.count; }),
        createGroup: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.GROUP.CREATE, data)).data; }),
        getGroupById: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.GET_BY_ID.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        updateGroup: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.UPDATE.replace('{id}', id);
            yield apiService.put(url, data);
        }),
        deleteGroup: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.DELETE.replace('{id}', id);
            yield apiService.delete(url);
        }),
        getGroupMembers: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.GET_MEMBERS.replace('{id}', id);
            return (yield apiService.get(url)).data;
        }),
        addGroupMember: (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.ADD_MEMBER.replace('{id}', id).replace('{userId}', userId);
            yield apiService.put(url);
        }),
        deleteGroupMember: (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.DELETE_MEMBER.replace('{id}', id).replace('{userId}', userId);
            yield apiService.delete(url);
        }),
        getGroupOptions: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.options(constants_1.API_ENDPOINTS.GROUP.OPTIONS)).data; }),
        getGroupMembersOptions: (id) => __awaiter(void 0, void 0, void 0, function* () {
            const url = constants_1.API_ENDPOINTS.GROUP.MEMBERS_OPTIONS.replace('{id}', id);
            return (yield apiService.options(url)).data;
        }),
        listTenants: () => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.get(constants_1.API_ENDPOINTS.TENANT.LIST)).data; }),
        createTenant: (data) => __awaiter(void 0, void 0, void 0, function* () { return (yield apiService.post(constants_1.API_ENDPOINTS.TENANT.CREATE, data)).data; }),
        deployProcessToTenant: (requestBody) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield apiService.post(`${constants_1.API_ENDPOINTS.DEPLOYMENT.CREATE}`, requestBody, { headers: { 'Content-Type': 'multipart/form-data' } })).data;
        }),
    };
};
exports.CamundaAPI = CamundaAPI;
// const callApi = async() => {
//     const baseUrl = "http://camundaloadbalancer-1512832890.us-east-1.elb.amazonaws.com";
//     const camudaApi = await CamundaAPI({
//         serverConfig: {
//             baseUrl,
//             contextPath: "engine-rest",
//         }
//     });
//     const res = await camudaApi.getRenderedForm('0441958d-a8d2-11ef-aebb-1287199eca6d');
//     console.log({res});
// }
// callApi();
