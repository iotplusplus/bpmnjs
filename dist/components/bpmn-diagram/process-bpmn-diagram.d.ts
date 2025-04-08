import React from "react";
declare const BPMNEditor: ({ bpmnXML, taskDefinitionKeys, taskDefinitionKeyColors, height, width, containerStyle, taskInstancesCount }: {
    bpmnXML: string;
    taskDefinitionKeys?: (string | undefined)[];
    taskDefinitionKeyColors?: string[];
    height?: string | number;
    width?: string | number;
    containerStyle?: React.CSSProperties;
    taskInstancesCount?: {
        activityId: string | undefined;
        count: number | undefined;
    }[];
}) => React.JSX.Element;
export default BPMNEditor;
