import { getCamudaApi, postCamudaApi } from "./api";
import { CamudaUrls } from "./constants";

export const CamundaAPI = (baseUrl: string) => ({
    // Engine APIs
    getEngines: async () => getCamudaApi({ baseUrl, url: CamudaUrls.getEngines() }),

    // Task APIs
    getTaskLists: async ({
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
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskLists({ engineName, firstResult, maxResults, itemCount }),
        }),

    getTasks: async ({
        engineName,
        taskListId,
        firstResult = 0,
        maxResults = 15,
    }: {
        engineName: string;
        taskListId: string;
        firstResult?: number;
        maxResults?: number;
    }) => {
        const payload = {
            processVariables: [],
            taskVariables: [],
            caseInstanceVariables: [],
            firstResult,
            maxResults,
            sorting: [{ sortBy: "created", sortOrder: "desc" }],
            active: true,
        };
        return (
            await postCamudaApi({
                baseUrl,
                url: CamudaUrls.getTasks({ engineName, taskListId, firstResult, maxResults }),
                data: payload,
            })
        )?.data;
    },

    getTaskDetails: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskDetails({ engineName, taskId }) }),

    completeTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => postCamudaApi({ baseUrl, url: CamudaUrls.completeTask({ engineName, taskId }), data: {} }),

    claimTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => postCamudaApi({ baseUrl, url: CamudaUrls.claimTask({ engineName, taskId }), data: {} }),

    unclaimTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => postCamudaApi({ baseUrl, url: CamudaUrls.unclaimTask({ engineName, taskId }), data: {} }),

    delegateTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => postCamudaApi({ baseUrl, url: CamudaUrls.delegateTask({ engineName, taskId }), data: {} }),

    resolveTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => postCamudaApi({ baseUrl, url: CamudaUrls.resolveTask({ engineName, taskId }), data: {} }),

    getTaskDiagram: async ({
        engineName,
        processDefinitionId,
    }: {
        engineName: string;
        processDefinitionId: string;
    }) =>
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskDiagram({ engineName, processDefinitionId }),
        }),

    getTaskHistory: async ({
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
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskHistory({ engineName, id, firstResult, maxResults }),
        }),

    // Task Forms
    getTaskForm: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskForm({ engineName, id }) }),

    getDeployedTaskForm: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getDeployedTaskForm({ engineName, id }) }),

    submitTaskForm: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.submitTaskForm({ engineName, id }),
            data: payload,
        }),

    // Task Variables
    getTaskVariables: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskVariables({ engineName, id }) }),

    getTaskVariable: async ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) =>
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskVariable({ engineName, id, varName }),
        }),

    updateTaskVariable: async ({
        engineName,
        id,
        varName,
        payload,
    }: {
        engineName: string;
        id: string;
        varName: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.updateTaskVariable({ engineName, id, varName }),
            data: payload,
        }),

    deleteTaskVariable: async ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.deleteTaskVariable({ engineName, id, varName }),
            data: {},
        }),

    // Task Comments
    getTaskComments: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskComments({ engineName, id }) }),

    addTaskComment: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.addTaskComment({ engineName, id }),
            data: payload,
        }),

    // Task Attachments
    getTaskAttachments: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskAttachments({ engineName, id }) }),

    addTaskAttachment: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.addTaskAttachment({ engineName, id }),
            data: payload,
        }),

    getTaskAttachment: async ({
        engineName,
        id,
        attachmentId,
    }: {
        engineName: string;
        id: string;
        attachmentId: string;
    }) =>
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskAttachment({ engineName, id, attachmentId }),
        }),

    getTaskAttachmentData: async ({
        engineName,
        id,
        attachmentId,
    }: {
        engineName: string;
        id: string;
        attachmentId: string;
    }) =>
        getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskAttachmentData({ engineName, id, attachmentId }),
        }),

    // Task Identity Links
    getTaskIdentityLinks: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => getCamudaApi({ baseUrl, url: CamudaUrls.getTaskIdentityLinks({ engineName, id }) }),

    addTaskIdentityLink: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.addTaskIdentityLink({ engineName, id }),
            data: payload,
        }),

    deleteTaskIdentityLink: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) =>
        postCamudaApi({
            baseUrl,
            url: CamudaUrls.deleteTaskIdentityLink({ engineName, id }),
            data: payload,
        }),
});
