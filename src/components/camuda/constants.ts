const initialUrl = 'engine-rest';

export const CamudaUrls = {
    // Engine APIs
    tasklistLogin: () => `/camunda/api/admin/auth/user/default/login/tasklist`,
    getEngines: () => `/${initialUrl}/engine`,

    // Task APIs
    getTaskLists: ({
        engineName,
        firstResult = 0,
        maxResults = 2000,
        itemCount = false,
    }: {
        engineName: string;
        firstResult?: number;
        maxResults?: number;
        itemCount?: boolean;
    }) =>
        `/${initialUrl}/engine/${engineName}/filter?firstResult=${firstResult}&maxResults=${maxResults}&itemCount=${itemCount}&resourceType=Task`,
    getTasks: ({
        engineName,
        taskListId,
        firstResult = 0,
        maxResults = 15,
    }: {
        engineName: string;
        taskListId: string;
        firstResult?: number;
        maxResults?: number;
    }) =>
        `/${initialUrl}/engine/${engineName}/filter/${taskListId}/list?firstResult=${firstResult}&maxResults=${maxResults}`,
    getTaskDetails: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}`,
    getTaskDiagram: ({
        engineName,
        processDefinitionId,
    }: {
        engineName: string;
        processDefinitionId: string;
    }) =>
        `/${initialUrl}/engine/${engineName}/process-definition/${processDefinitionId}/xml`,
    getTaskHistory: ({
        engineName,
        id,
        firstResult = 0,
        maxResults = 50,
    }: {
        engineName: string;
        id: string;
        firstResult?: number;
        maxResults?: number;
    }) =>
        `/${initialUrl}/engine/${engineName}/history/user-operation?taskId=${id}&maxResults=${maxResults}&firstResult=${firstResult}`,
    completeTask: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}/complete`,
    claimTask: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}/claim`,
    unclaimTask: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}/unclaim`,
    delegateTask: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}/delegate`,
    resolveTask: ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${taskId}/resolve`,

    // Task Forms
    getTaskForm: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/form`,
    getDeployedTaskForm: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/deployed-form?noCache=${new Date().getTime()}`,
    submitTaskForm: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/submit-form`,

    // Task Variables
    getTaskVariables: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/variables`,
    getTaskVariable: ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/variables/${varName}`,
    updateTaskVariable: ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/variables/${varName}`,
    deleteTaskVariable: ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/variables/${varName}`,

    // Task Comments
    getTaskComments: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/comment`,
    addTaskComment: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/comment/create`,

    // Task Attachments
    getTaskAttachments: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/attachment`,
    addTaskAttachment: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/attachment/create`,
    getTaskAttachment: ({
        engineName,
        id,
        attachmentId,
    }: {
        engineName: string;
        id: string;
        attachmentId: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/attachment/${attachmentId}`,
    // getTaskAttachmentData: ({
    //     engineName,
    //     id,
    //     attachmentId,
    // }: {
    //     engineName: string;
    //     id: string;
    //     attachmentId: string;
    // }) => `/${initialUrl}/engine/${engineName}/task/${id}/attachment/${attachmentId}/data`,

    // Task Identity Links
    getTaskIdentityLinks: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/identity-links`,
    addTaskIdentityLink: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/identity-links`,
    deleteTaskIdentityLink: ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => `/${initialUrl}/engine/${engineName}/task/${id}/identity-links`,
};
