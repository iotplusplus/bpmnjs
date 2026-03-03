import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

const BPMNEditor = ({ 
  bpmnXML, taskDefinitionKeys, taskDefinitionKeyColors,
  height, width, containerStyle, taskInstancesCount
}: { 
  bpmnXML: string; taskDefinitionKeys?: (string | undefined)[], taskDefinitionKeyColors?: string[],
  height?: string | number, width?: string | number, containerStyle?: React.CSSProperties,
  taskInstancesCount?: {
    activityId: string | undefined;
    count: number | undefined;
}[],
}) => {
  const modelerRef = useRef<BpmnModeler | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const xml = typeof bpmnXML === "string" ? bpmnXML.trim() : "";
    if (!xml) return;

    const modeler = new BpmnModeler({
      container: containerRef.current,
    });

    modelerRef.current = modeler;
    let cancelled = false;

    modeler
      .importXML(xml)
      .then(() => {
        if (cancelled || modelerRef.current !== modeler) return;
        if (!!taskDefinitionKeys?.length) {
          taskDefinitionKeys.forEach((taskDefinitionKey, index) => {
            if (!!taskDefinitionKey)
              changeElementBackground(taskDefinitionKey, !!taskDefinitionKeyColors?.length ? taskDefinitionKeyColors[index] : "#90CAF9");
          });
        }
        if (!!taskInstancesCount?.length) {
          taskInstancesCount.forEach((taskInstance) => {
            if (!!taskInstance?.activityId && taskInstance?.count) {
              addTaskInstanceOverlay(taskInstance.activityId, taskInstance.count);
            }
          });
        }
      })
      .catch((err) => {
        if (!cancelled) console.error("Failed to load BPMN diagram", err);
      });

    return () => {
      cancelled = true;
      modeler.destroy();
      if (modelerRef.current === modeler) modelerRef.current = null;
    };
  }, [bpmnXML, taskDefinitionKeys]);

  const changeElementBackground = (elementId: string, color: string) => {
    if (!modelerRef.current) return;

    const modeling: any = modelerRef.current.get("modeling");
    const elementRegistry: any = modelerRef.current.get("elementRegistry");

    const element = elementRegistry.get(elementId);
    if (!element) {
      // Element may be from another process or not present in this diagram — skip silently
      return;
    }

    modeling.setColor([element], {
      fill: color,
      stroke: "#000000",
    });
  };
  const addTaskInstanceOverlay = (elementId: string, instanceCount: number) => {
    if (!modelerRef.current) return;

    const overlays: any = modelerRef.current.get("overlays");
    const elementRegistry: any = modelerRef.current.get("elementRegistry");

    const element = elementRegistry.get(elementId);
    if (!element) {
      // Element may be from another process or not present in this diagram — skip silently
      return;
    }
    overlays.add(element, {
      position: {
        bottom: 5, // Shift slightly below the task box
        left: -5,   // Shift slightly to the left
      },
      html: `<div style="
          background: #70b8db;
          color: white;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: bold;
          box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
        ">${instanceCount}</div>`,
    });
  };
  return (
    <div
      ref={containerRef}
      style={{
        width: width ? width : "100%",
        height: height ? height : "500px",
        ...(!!containerStyle ? containerStyle : {}),
      }}
    />
  );
};

export default BPMNEditor;
