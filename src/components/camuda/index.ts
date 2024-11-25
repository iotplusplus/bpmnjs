import { addTaskAttachment, getCamudaApi, postCamudaApi } from "./api";
import { CamudaUrls } from "./constants";
import { ProcessDefinitionDiagram, Task, TaskAttachment, TaskComment, TaskCommentPayload, TaskFilter, TaskForm, TaskHistory, TaskIdentityLink, TaskIdentityLinkPayload, VariableValue } from "./types";

export const CamundaAPI = ({baseUrl, user}: {baseUrl: string, user: string}) => ({
    tasklistLogin: async({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) => {
        const payload = {
            username,
            password
        }
        postCamudaApi({baseUrl, url: CamudaUrls.tasklistLogin(), data: payload});
    },
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
    }) => {
        return (await getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskLists({ engineName, firstResult, maxResults, itemCount }),
            engineName,
            user,
        })) as TaskFilter[];
    },
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
                engineName,
                user,
            })
        )?.data as Task[];
    },

    getTaskDetails: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl,
            url: CamudaUrls.getTaskDetails({ engineName, taskId }),
            engineName,
            user,
        })) as Task;
    },
    completeTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return await postCamudaApi({ 
            baseUrl, 
            url: CamudaUrls.completeTask({ engineName, taskId }), 
            data: {},
            engineName,
            user,
        });
    },
    claimTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return await postCamudaApi({ 
            baseUrl, 
            url: CamudaUrls.claimTask({ engineName, taskId }), 
            data: {},
            engineName,
            user,
        });
    },
    unclaimTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return await postCamudaApi({ 
            baseUrl, 
            url: CamudaUrls.unclaimTask({ engineName, taskId }), 
            data: {},
            engineName,
            user,
        });
    },
    delegateTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return await postCamudaApi({ 
            baseUrl, 
            url: CamudaUrls.delegateTask({ engineName, taskId }),
            data: {},
            engineName,
            user,
        })
    },
    resolveTask: async ({
        engineName,
        taskId,
    }: {
        engineName: string;
        taskId: string;
    }) => {
        return await postCamudaApi({ 
            baseUrl, url: CamudaUrls.resolveTask({ engineName, taskId }), data: {},
            engineName,
            user,
        });
    },
    getTaskDiagram: async ({
        engineName,
        processDefinitionId,
    }: {
        engineName: string;
        processDefinitionId: string;
    }) => {
        return (await getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskDiagram({ engineName, processDefinitionId }),
            engineName,
            user,
        })) as ProcessDefinitionDiagram;
    },
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
    }) => {
        return (await getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskHistory({ engineName, id, firstResult, maxResults }),
            engineName,
            user,
        })) as TaskHistory[];
    },
    // Task Forms
    getTaskForm: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl, url: CamudaUrls.getTaskForm({ engineName, id }),
            engineName,
            user,
        })) as TaskForm;
    },
    getDeployedTaskForm: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl, url: CamudaUrls.getDeployedTaskForm({ engineName, id }),
            engineName,
            user,
        }));
    },
    submitTaskForm: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) => {
        return await postCamudaApi({
            baseUrl,
            url: CamudaUrls.submitTaskForm({ engineName, id }),
            data: payload,
            engineName,
            user,
        });
    },
    // Task Variables
    getTaskVariables: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl, url: CamudaUrls.getTaskVariables({ engineName, id }),
            engineName,
            user,
        }));
    },
    getTaskVariable: async ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) => {
        return (await getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskVariable({ engineName, id, varName }),
            engineName,
            user,
        })) as VariableValue;
    },
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
    }) => {
        return await postCamudaApi({
            baseUrl,
            url: CamudaUrls.updateTaskVariable({ engineName, id, varName }),
            data: payload,
            engineName,
            user,
        });
    },
    deleteTaskVariable: async ({
        engineName,
        id,
        varName,
    }: {
        engineName: string;
        id: string;
        varName: string;
    }) => {
        return await postCamudaApi({
            baseUrl,
            url: CamudaUrls.deleteTaskVariable({ engineName, id, varName }),
            data: {},
            engineName,
            user,
        });
    },
    // Task Comments
    getTaskComments: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl, url: CamudaUrls.getTaskComments({ engineName, id }),
            engineName,
            user,
        })) as TaskComment[];
    },
    addTaskComment: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: TaskCommentPayload;
    }) => {
        return (await postCamudaApi({
            baseUrl,
            url: CamudaUrls.addTaskComment({ engineName, id }),
            data: payload,
            engineName,
            user,
        })) as TaskComment;
    },
    // Task Attachments
    getTaskAttachments: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({ 
            baseUrl, url: CamudaUrls.getTaskAttachments({ engineName, id }),
            engineName,
            user,
        }));
    },
    addTaskAttachment: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: any;
    }) => {
        return await addTaskAttachment({
            baseUrl,
            url: CamudaUrls.addTaskAttachment({ engineName, id }),
            payload,
            engineName,
            user,
        });
    },
    getTaskAttachment: async ({
        engineName,
        id,
        attachmentId,
    }: {
        engineName: string;
        id: string;
        attachmentId: string;
    }) => {
        return (await getCamudaApi({
            baseUrl,
            url: CamudaUrls.getTaskAttachment({ engineName, id, attachmentId }),
            engineName,
            user,
        })) as TaskAttachment[];
    },
    // getTaskAttachmentData: async ({
    //     engineName,
    //     id,
    //     attachmentId,
    // }: {
    //     engineName: string;
    //     id: string;
    //     attachmentId: string;
    // }) => {
    //     return (await getCamudaApi({
    //         baseUrl,
    //         url: CamudaUrls.getTaskAttachmentData({ engineName, id, attachmentId }),
    //         engineName,
    //         user,
    //     })) as TaskAttachment;
    // },
    // Task Identity Links
    getTaskIdentityLinks: async ({
        engineName,
        id,
    }: {
        engineName: string;
        id: string;
    }) => {
        return (await getCamudaApi({
            baseUrl, url: CamudaUrls.getTaskIdentityLinks({ engineName, id }),
            engineName,
            user,
        })) as TaskIdentityLink[];
    },
    addTaskIdentityLink: async ({
        engineName,
        id,
        payload,
    }: {
        engineName: string;
        id: string;
        payload: TaskIdentityLinkPayload;
    }) => {
        return (await postCamudaApi({
            baseUrl,
            url: CamudaUrls.addTaskIdentityLink({ engineName, id }),
            data: payload,
            engineName,
            user,
        }));
    },
    // deleteTaskIdentityLink: async ({
    //     engineName,
    //     id,
    //     payload,
    // }: {
    //     engineName: string;
    //     id: string;
    //     payload: any;
    // }) => {
    //     return (await postCamudaApi({
    //         baseUrl,
    //         url: CamudaUrls.deleteTaskIdentityLink({ engineName, id }),
    //         data: payload,
    //         engineName,
    //         user,
    //     }));
    // },
});


// const camuda =  CamundaAPI({baseUrl: 'http://camundaloadbalancer-1512832890.us-east-1.elb.amazonaws.com', user: 'demo'});
// camuda.getTaskLists({
//     engineName: 'default',
// });

// camuda.getTasks({
//     engineName: 'default',
//     taskListId: 'f275d60b-a5bf-11ef-aebb-1287199eca6d',
// });

// camuda.getTaskDetails({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.completeTask({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.claimTask({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.unclaimTask({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.delegateTask({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.resolveTask({
//     engineName: 'default',
//     taskId: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.getTaskDiagram({
//     engineName: 'default',
//     processDefinitionId: 'moc_request_v1:1:544bfbda-a8b4-11ef-aebb-1287199eca6d',
// });

// camuda.getTaskHistory({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.getTaskForm({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.getDeployedTaskForm({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });


// camuda.getTaskVariables({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.getTaskComments({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.addTaskComment({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
//     payload: {
//         "message": "This is a comment on the task.",
//         "userId": "demo-user",  // Optional: the ID of the user adding the comment
//         "timestamp": "2024-11-25T10:30:00Z" // Optional: ISO 8601 timestamp
//     }
// });


// camuda.getTaskAttachments({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.addTaskAttachment({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
//     payload: {
//         "name": "attachment-name.pdf",
//         "description": "This is a description of the attachment.",
//         "type": "application/pdf",
//         "url": "https://example.com/attachment.pdf"
//     },
// });

// camuda.getTaskIdentityLinks({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });

// camuda.addTaskIdentityLink({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
//     payload: {
//         "type": "candidate",
//         "userId": "demo-user",
//         // "groupId": "demo-group"
//     },
// });

// camuda.getTaskIdentityLinks({
//     engineName: 'default',
//     id: '3f9bb03c-aaf2-11ef-aebb-1287199eca6d',
// });
