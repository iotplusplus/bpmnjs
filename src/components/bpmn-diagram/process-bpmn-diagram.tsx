import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

const BPMNEditor = ({ 
  bpmnXML, taskDefinitionKeys, taskDefinitionKeyColors,
  height, width, containerStyle,
}: { 
  bpmnXML: string; taskDefinitionKeys?: (string | undefined)[], taskDefinitionKeyColors?: string[],
  height?: string | number, width?: string | number, containerStyle?: React.CSSProperties,
}) => {
  const modelerRef = useRef<BpmnModeler | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const modeler = new BpmnModeler({
      container: containerRef.current,
    });

    modelerRef.current = modeler;

    modeler
      .importXML(bpmnXML)
      .then(() => {
        if (!!taskDefinitionKeys?.length) {
          taskDefinitionKeys.forEach((taskDefinitionKey, index) => {
            console.log({currentStatusItem: taskDefinitionKey});
            if(!!taskDefinitionKey)
              changeElementBackground(taskDefinitionKey, !!taskDefinitionKeyColors?.length ? taskDefinitionKeyColors[index] : "#90CAF9");
          })
        }
      })
      .catch((err) => {
        console.error("Failed to load BPMN diagram", err);
      });

    return () => {
      modeler.destroy();
    };
  }, [bpmnXML, taskDefinitionKeys]);

  const changeElementBackground = (elementId: string, color: string) => {
    if (!modelerRef.current) return;

    const modeling: any = modelerRef.current.get("modeling");
    const elementRegistry: any = modelerRef.current.get("elementRegistry");

    const element = elementRegistry.get(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found`);
      return;
    }

    modeling.setColor([element], {
      fill: color,
      stroke: "#000000",
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
