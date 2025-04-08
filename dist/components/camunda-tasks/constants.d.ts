export declare const API_ENDPOINTS: {
    AUTHORIZATION: {
        GET_ALL: string;
        CHECK: string;
        COUNT: string;
        CREATE: string;
        GET_BY_ID: string;
        DELETE: string;
        UPDATE: string;
        AVAILABLE_OPERATIONS: string;
    };
    EXTERNAL_TASK: {
        LIST: string;
        COUNT: string;
        FETCH_AND_LOCK: string;
        COMPLETE: string;
        FAILURE: string;
        BPMN_ERROR: string;
        DELETE: string;
        UNLOCK: string;
        EXTEND_LOCK: string;
        RETRY: string;
    };
    HISTORIC_EXTERNAL_TASK_LOG: {
        LIST: string;
        COUNT: string;
        GET_BY_ID: string;
        DELETE: string;
        CLEAR: string;
    };
    HISTORIC_TASK_INSTANCE: {
        LIST: string;
        COUNT: string;
        GET_BY_ID: string;
        DELETE: string;
        BULK_DELETE: string;
    };
    TASK: {
        LIST: string;
        LIST_BY_TENANT: string;
        COUNT: string;
        CREATE: string;
        GET_BY_ID: string;
        UPDATE: string;
        DELETE: string;
        ASSIGN: string;
        CLAIM: string;
        UNCLAIM: string;
        DELEGATE: string;
        COMPLETE: string;
        SET_DUEDATE: string;
    };
    TASK_FORM: {
        GET_FORM_KEY: string;
        GET_RENDERED_FORM: string;
        GET_DEPLOYED_FORM: string;
        GET_FORM_VARIABLES: string;
        SUBMIT_FORM: string;
        RESOLVE_TASK: string;
    };
    TASK_ATTACHMENT: {
        LIST: string;
        CREATE: string;
        GET_BY_ID: string;
        DELETE: string;
        GET_CONTENT: string;
    };
    TASK_COMMENT: {
        LIST: string;
        CREATE: string;
        GET_BY_ID: string;
    };
    TASK_IDENTITY_LINK: {
        LIST: string;
        CREATE: string;
        DELETE: string;
    };
    TASK_LOCAL_VARIABLE: {
        LIST: string;
        GET_BY_KEY: string;
        CREATE: string;
        UPDATE: string;
        DELETE: string;
        MODIFY: string;
    };
    TASK_VARIABLE: {
        LIST: string;
        GET_BY_KEY: string;
        CREATE: string;
        UPDATE: string;
        DELETE: string;
        MODIFY: string;
    };
    PROCESS_DEFINITION: {
        LIST: string;
        LIST_BY_TENANT: string;
        GET_BY_ID: string;
        GET_BY_KEY: string;
        GET_BY_KEY_AND_TENANT: string;
        XML_BY_ID: string;
        XML_BY_KEY: string;
        XML_BY_KEY_AND_TENANT: string;
        START_BY_ID: string;
        START_BY_KEY: string;
        START_BY_KEY_AND_TENANT: string;
        SUSPEND_BY_ID: string;
        SUSPEND_BY_KEY: string;
        SUSPEND_BY_KEY_AND_TENANT: string;
        ACTIVATE_BY_ID: string;
        ACTIVATE_BY_KEY: string;
        ACTIVATE_BY_KEY_AND_TENANT: string;
        DELETE_BY_ID: string;
        DELETE_BY_KEY: string;
        DELETE_BY_KEY_AND_TENANT: string;
    };
    PROCESS_INSTANCE: {
        LIST: string;
        LIST_BY_TENANT: string;
        GET_BY_ID: string;
        ACTIVEINSTANCES_BY_ID: string;
        VARIABLES_BY_ID: string;
    };
    HISTORIC_USER_OPERATION_LOG: {
        LIST: string;
        COUNT: string;
    };
    FILTER: {
        LIST: string;
        CREATE: string;
        GET_BY_ID: string;
        UPDATE_BY_ID: string;
        DELETE_BY_ID: string;
        EXECUTE: string;
        EXECUTE_COUNT: string;
        EXECUTE_SINGLE: string;
        SORTING_OPTIONS: string;
        GET_EXTENDED_INFO_BY_ID: string;
        UPDATE_EXTENDED_INFO: string;
        DELETE_EXTENDED_INFO: string;
        EXTENDED_INFO_COUNT: string;
        EXTENDED_INFO_LIST: string;
    };
    GROUP: {
        LIST: string;
        LIST_POST: string;
        COUNT: string;
        COUNT_POST: string;
        CREATE: string;
        GET_BY_ID: string;
        UPDATE: string;
        DELETE: string;
        GET_MEMBERS: string;
        ADD_MEMBER: string;
        DELETE_MEMBER: string;
        OPTIONS: string;
        MEMBERS_OPTIONS: string;
    };
    TENANT: {
        LIST: string;
        COUNT: string;
        CREATE: string;
        GET_BY_ID: string;
        UPDATE: string;
        DELETE: string;
        GET_GROUP_MEMBERS: string;
        ADD_GROUP_MEMBERS: string;
        DELETE_GROUP_MEMBERS: string;
        GROUP_MEMBERS_OPTIONS: string;
        MEMBERS_OPTIONS: string;
        UPDATE_MEMBERS: string;
        DELETE_MEMBERS: string;
    };
    DEPLOYMENT: {
        LIST: string;
        CREATE: string;
        DELETE: string;
        GET_BY_ID: string;
        RESOURCES_BY_ID: string;
        REDEPLOY: string;
    };
};
