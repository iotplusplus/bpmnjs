"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Modeler_1 = __importDefault(require("bpmn-js/lib/Modeler"));
const BPMNEditor = ({ bpmnXML, taskDefinitionKeys, taskDefinitionKeyColors, height, width, containerStyle, taskInstancesCount }) => {
    const modelerRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!containerRef.current)
            return;
        const modeler = new Modeler_1.default({
            container: containerRef.current,
        });
        modelerRef.current = modeler;
        modeler
            .importXML(bpmnXML)
            .then(() => {
            if (!!(taskDefinitionKeys === null || taskDefinitionKeys === void 0 ? void 0 : taskDefinitionKeys.length)) {
                taskDefinitionKeys.forEach((taskDefinitionKey, index) => {
                    // console.log({currentStatusItem: taskDefinitionKey});
                    if (!!taskDefinitionKey)
                        changeElementBackground(taskDefinitionKey, !!(taskDefinitionKeyColors === null || taskDefinitionKeyColors === void 0 ? void 0 : taskDefinitionKeyColors.length) ? taskDefinitionKeyColors[index] : "#90CAF9");
                });
            }
            if (!!(taskInstancesCount === null || taskInstancesCount === void 0 ? void 0 : taskInstancesCount.length)) {
                taskInstancesCount.forEach((taskInstance, index) => {
                    // console.log({ currentCountItem: taskInstance });
                    if (!!(taskInstance === null || taskInstance === void 0 ? void 0 : taskInstance.activityId) && (taskInstance === null || taskInstance === void 0 ? void 0 : taskInstance.count)) {
                        addTaskInstanceOverlay(taskInstance === null || taskInstance === void 0 ? void 0 : taskInstance.activityId, taskInstance === null || taskInstance === void 0 ? void 0 : taskInstance.count);
                    }
                });
            }
        })
            .catch((err) => {
            console.error("Failed to load BPMN diagram", err);
        });
        return () => {
            modeler.destroy();
        };
    }, [bpmnXML, taskDefinitionKeys]);
    const changeElementBackground = (elementId, color) => {
        if (!modelerRef.current)
            return;
        const modeling = modelerRef.current.get("modeling");
        const elementRegistry = modelerRef.current.get("elementRegistry");
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
    const addTaskInstanceOverlay = (elementId, instanceCount) => {
        if (!modelerRef.current)
            return;
        const overlays = modelerRef.current.get("overlays");
        const elementRegistry = modelerRef.current.get("elementRegistry");
        const element = elementRegistry.get(elementId);
        if (!element) {
            console.error(`Element with ID ${elementId} not found for overlays`);
            return;
        }
        overlays.add(element, {
            position: {
                bottom: 5, // Shift slightly below the task box
                left: -5, // Shift slightly to the left
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
    return (react_1.default.createElement("div", { ref: containerRef, style: Object.assign({ width: width ? width : "100%", height: height ? height : "500px" }, (!!containerStyle ? containerStyle : {})) }));
};
exports.default = BPMNEditor;
